import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit, OnDestroy {
  isMobileMenuOpen = false;
  cartCount = 0;
  private cartSubscription!: Subscription;

  constructor(private scrollService: ScrollService, private cartService: CartService) {}

  ngOnInit() {
    this.cartSubscription = this.cartService.cartCount$.subscribe((count) => {
      this.cartCount = count;
    });
  }

  ngOnDestroy() {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  onNavClick() {
    // Прокручиваем к началу страницы при клике на навигацию
    this.scrollService.scrollToTop();
    // Закрываем мобильное меню при клике на ссылку
    this.closeMobileMenu();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    // Блокируем прокрутку страницы когда меню открыто
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }
}
