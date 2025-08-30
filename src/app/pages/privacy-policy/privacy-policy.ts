import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss'
})
export class PrivacyPolicy implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Политика конфиденциальности | BANYA TUT');
    this.metaService.updateTag({ name: 'description', content: 'Политика конфиденциальности BANYA TUT - информация о защите персональных данных клиентов. Как мы собираем, используем и защищаем вашу информацию.' });
    this.metaService.updateTag({ name: 'keywords', content: 'политика конфиденциальности, защита персональных данных, BANYA TUT, конфиденциальность' });
  }
}
