import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ScrollService } from '../../services/scroll';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  constructor(private scrollService: ScrollService) {}

  onNavClick() {
    // Прокручиваем к началу страницы при клике на навигацию
    this.scrollService.scrollToTop();
  }
}
