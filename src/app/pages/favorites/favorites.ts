import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Product, CATALOG_DATA } from '../catalog/catalog.data';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss',
})
export class Favorites implements OnInit {
  cartProducts: Product[] = [];
  cartCount = 0;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Корзина | BANYA TUT');
    this.metaService.updateTag({
      name: 'description',
      content:
        'Ваша корзина с бани-бочками и квадро-банями от BANYA TUT. Просматривайте выбранные товары и оформляйте заказ.',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'корзина, выбранные товары, бани-бочки, квадро-бани, заказ',
    });

    this.loadCartProducts();
  }

  private loadCartProducts(): void {
    try {
      const savedCart = localStorage.getItem('catalog_cart');
      if (savedCart) {
        const cartMap = JSON.parse(savedCart);
        const cartIds = Object.keys(cartMap).filter((id) => cartMap[id] === true);

        // Загружаем полную информацию о продуктах из каталога
        this.cartProducts = [];
        CATALOG_DATA.forEach((section) => {
          section.products.forEach((product) => {
            if (cartIds.includes(product.id)) {
              this.cartProducts.push({ ...product, isLiked: true });
            }
          });
        });

        this.cartCount = this.cartProducts.length;
      }
    } catch (error) {
      console.error('Ошибка при загрузке товаров в корзине:', error);
    }
  }

  removeFromCart(productId: string): void {
    try {
      const savedCart = localStorage.getItem('catalog_cart');
      if (savedCart) {
        const cartMap = JSON.parse(savedCart);
        cartMap[productId] = false;
        localStorage.setItem('catalog_cart', JSON.stringify(cartMap));

        // Обновляем счетчик в сервисе
        this.cartService.updateCartCount(cartMap);

        // Убираем товар из списка
        this.cartProducts = this.cartProducts.filter((p) => p.id !== productId);
        this.cartCount = this.cartProducts.length;
      }
    } catch (error) {
      console.error('Ошибка при удалении из корзины:', error);
    }
  }

  trackByProductId(index: number, product: Product): string {
    return product.id;
  }
}
