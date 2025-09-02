import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { CatalogSection, Product, CATALOG_DATA } from './catalog.data';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss',
})
export class Catalog implements OnInit {
  catalogSections: CatalogSection[] = [];
  private readonly CART_STORAGE_KEY = 'catalog_cart';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Каталог бань-бочек и квадратных бань премиум-класса | BANYA TUT');
    this.metaService.updateTag({
      name: 'description',
      content:
        'Каталог бань-бочек и квадратных бань различных размеров от BANYA TUT. Профессиональные бани-бочки 2-6 метров, квадро-бани с расширенным функционалом. Рассчитать стоимость бани онлайн.',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content:
        'каталог бань-бочек, квадратные бани, баня-бочка 2 метра, баня-бочка 3 метра, баня-бочка 4 метра, баня-бочка 5 метров, баня-бочка 6 метров, квадро-баня',
    });

    this.initializeCatalogData();
  }

  private initializeCatalogData(): void {
    // Копируем данные из константы
    this.catalogSections = JSON.parse(JSON.stringify(CATALOG_DATA));

    // Загружаем сохраненную корзину из localStorage
    this.loadCartFromStorage();
  }

  private loadCartFromStorage(): void {
    try {
      const savedCart = localStorage.getItem(this.CART_STORAGE_KEY);
      if (savedCart) {
        const cartMap = JSON.parse(savedCart);

        // Применяем сохраненную корзину к продуктам
        this.catalogSections.forEach((section) => {
          section.products.forEach((product) => {
            if (cartMap[product.id] !== undefined) {
              product.isLiked = cartMap[product.id]; // Используем существующее поле isLiked для совместимости
            }
          });
        });

        // Обновляем счетчик в сервисе
        this.cartService.updateCartCount(cartMap);
      }
    } catch (error) {
      console.error('Ошибка при загрузке корзины из localStorage:', error);
    }
  }

  private saveCartToStorage(): void {
    try {
      const cartMap: { [key: string]: boolean } = {};

      // Собираем все товары в корзине в объект
      this.catalogSections.forEach((section) => {
        section.products.forEach((product) => {
          cartMap[product.id] = product.isLiked; // Используем существующее поле isLiked для совместимости
        });
      });

      // Сохраняем в localStorage
      localStorage.setItem(this.CART_STORAGE_KEY, JSON.stringify(cartMap));

      // Обновляем счетчик в сервисе
      this.cartService.updateCartCount(cartMap);
    } catch (error) {
      console.error('Ошибка при сохранении корзины в localStorage:', error);
    }
  }

  toggleCart(product: Product): void {
    product.isLiked = !product.isLiked; // Используем существующее поле isLiked для совместимости
    this.saveCartToStorage();
  }

  trackByProductId(index: number, product: Product): string {
    return product.id;
  }
}
