import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { CatalogSection, Product, CATALOG_DATA } from './catalog.data';
import { LikesService } from '../../services/likes.service';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss'
})
export class Catalog implements OnInit {
  catalogSections: CatalogSection[] = [];
  private readonly LIKES_STORAGE_KEY = 'catalog_likes';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private likesService: LikesService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Каталог бань-бочек и квадратных бань премиум-класса | BANYA TUT');
    this.metaService.updateTag({ name: 'description', content: 'Каталог бань-бочек и квадратных бань различных размеров от BANYA TUT. Профессиональные бани-бочки 2-6 метров, квадро-бани с расширенным функционалом. Рассчитать стоимость бани онлайн.' });
    this.metaService.updateTag({ name: 'keywords', content: 'каталог бань-бочек, квадратные бани, баня-бочка 2 метра, баня-бочка 3 метра, баня-бочка 4 метра, баня-бочка 5 метров, баня-бочка 6 метров, квадро-баня' });
    
    this.initializeCatalogData();
  }

  private initializeCatalogData(): void {
    // Копируем данные из константы
    this.catalogSections = JSON.parse(JSON.stringify(CATALOG_DATA));
    
    // Загружаем сохраненные лайки из localStorage
    this.loadLikesFromStorage();
  }

  private loadLikesFromStorage(): void {
    try {
      const savedLikes = localStorage.getItem(this.LIKES_STORAGE_KEY);
      if (savedLikes) {
        const likesMap = JSON.parse(savedLikes);
        
        // Применяем сохраненные лайки к продуктам
        this.catalogSections.forEach(section => {
          section.products.forEach(product => {
            if (likesMap[product.id] !== undefined) {
              product.isLiked = likesMap[product.id];
            }
          });
        });
        
        // Обновляем счетчик в сервисе
        this.likesService.updateLikesCount(likesMap);
      }
    } catch (error) {
      console.error('Ошибка при загрузке лайков из localStorage:', error);
    }
  }

  private saveLikesToStorage(): void {
    try {
      const likesMap: { [key: string]: boolean } = {};
      
      // Собираем все лайки в объект
      this.catalogSections.forEach(section => {
        section.products.forEach(product => {
          likesMap[product.id] = product.isLiked;
        });
      });
      
      // Сохраняем в localStorage
      localStorage.setItem(this.LIKES_STORAGE_KEY, JSON.stringify(likesMap));
      
      // Обновляем счетчик в сервисе
      this.likesService.updateLikesCount(likesMap);
    } catch (error) {
      console.error('Ошибка при сохранении лайков в localStorage:', error);
    }
  }

  toggleLike(product: Product): void {
    product.isLiked = !product.isLiked;
    this.saveLikesToStorage();
  }

  trackByProductId(index: number, product: Product): string {
    return product.id;
  }
}
