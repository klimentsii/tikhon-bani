import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly CART_STORAGE_KEY = 'catalog_cart';
  private cartCountSubject = new BehaviorSubject<number>(0);

  public cartCount$ = this.cartCountSubject.asObservable();

  constructor() {
    this.loadCartFromStorage();
  }

  private loadCartFromStorage(): void {
    try {
      const savedCart = localStorage.getItem(this.CART_STORAGE_KEY);
      if (savedCart) {
        const cartMap = JSON.parse(savedCart);
        const count = Object.values(cartMap).filter((inCart) => inCart === true).length;
        this.cartCountSubject.next(count);
      }
    } catch (error) {
      console.error('Ошибка при загрузке корзины из localStorage:', error);
    }
  }

  updateCartCount(cartMap: { [key: string]: boolean }): void {
    const count = Object.values(cartMap).filter((inCart) => inCart === true).length;
    this.cartCountSubject.next(count);
  }

  getCartCount(): number {
    return this.cartCountSubject.value;
  }
}
