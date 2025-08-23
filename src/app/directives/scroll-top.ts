import { Directive, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { ScrollService } from '../services/scroll';

@Directive({
  selector: '[appScrollTop]',
  standalone: true
})
export class ScrollTopDirective implements OnInit {

  constructor(
    private router: Router,
    private scrollService: ScrollService
  ) {}

  ngOnInit() {
    // Подписываемся на события навигации
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Прокручиваем к началу страницы при каждом переходе
      this.scrollService.scrollToTop();
    });
  }
}
