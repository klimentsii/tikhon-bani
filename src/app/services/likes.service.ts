import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LikesService {
  private readonly LIKES_STORAGE_KEY = 'catalog_likes';
  private likesCountSubject = new BehaviorSubject<number>(0);
  
  public likesCount$ = this.likesCountSubject.asObservable();

  constructor() {
    this.loadLikesFromStorage();
  }

  private loadLikesFromStorage(): void {
    try {
      const savedLikes = localStorage.getItem(this.LIKES_STORAGE_KEY);
      if (savedLikes) {
        const likesMap = JSON.parse(savedLikes);
        const count = Object.values(likesMap).filter(like => like === true).length;
        this.likesCountSubject.next(count);
      }
    } catch (error) {
      console.error('Ошибка при загрузке лайков из localStorage:', error);
    }
  }

  updateLikesCount(likesMap: { [key: string]: boolean }): void {
    const count = Object.values(likesMap).filter(like => like === true).length;
    this.likesCountSubject.next(count);
  }

  getLikesCount(): number {
    return this.likesCountSubject.value;
  }
}
