import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { LikesService } from '../../services/likes.service';
import { Product, CATALOG_DATA } from '../catalog/catalog.data';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './favorites.html',
  styleUrl: './favorites.scss'
})
export class Favorites implements OnInit {
  likedProducts: Product[] = [];
  likesCount = 0;

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private likesService: LikesService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Избранные товары | BANYA TUT');
    this.metaService.updateTag({ name: 'description', content: 'Ваши избранные бани-бочки и квадро-бани от BANYA TUT. Просматривайте понравившиеся товары и сравнивайте их характеристики.' });
    this.metaService.updateTag({ name: 'keywords', content: 'избранные бани, понравившиеся товары, бани-бочки, квадро-бани' });
    
    this.loadLikedProducts();
  }

  private loadLikedProducts(): void {
    try {
      const savedLikes = localStorage.getItem('catalog_likes');
      if (savedLikes) {
        const likesMap = JSON.parse(savedLikes);
        const likedIds = Object.keys(likesMap).filter(id => likesMap[id] === true);
        
        // Загружаем полную информацию о продуктах из каталога
        this.likedProducts = [];
        CATALOG_DATA.forEach(section => {
          section.products.forEach(product => {
            if (likedIds.includes(product.id)) {
              this.likedProducts.push({ ...product, isLiked: true });
            }
          });
        });
        
        this.likesCount = this.likedProducts.length;
      }
    } catch (error) {
      console.error('Ошибка при загрузке избранных товаров:', error);
    }
  }

  removeFromFavorites(productId: string): void {
    try {
      const savedLikes = localStorage.getItem('catalog_likes');
      if (savedLikes) {
        const likesMap = JSON.parse(savedLikes);
        likesMap[productId] = false;
        localStorage.setItem('catalog_likes', JSON.stringify(likesMap));
        
        // Обновляем счетчик в сервисе
        this.likesService.updateLikesCount(likesMap);
        
        // Убираем товар из списка
        this.likedProducts = this.likedProducts.filter(p => p.id !== productId);
        this.likesCount = this.likedProducts.length;
      }
    } catch (error) {
      console.error('Ошибка при удалении из избранного:', error);
    }
  }

  trackByProductId(index: number, product: Product): string {
    return product.id;
  }
}
