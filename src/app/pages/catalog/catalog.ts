import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.html',
  styleUrl: './catalog.scss'
})
export class Catalog implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Каталог бань-бочек и квадратных бань премиум-класса | BANYA TUT');
    this.metaService.updateTag({ name: 'description', content: 'Каталог бань-бочек и квадратных бань различных размеров от BANYA TUT. Профессиональные бани-бочки 2-6 метров, квадро-бани с расширенным функционалом. Рассчитать стоимость бани онлайн.' });
    this.metaService.updateTag({ name: 'keywords', content: 'каталог бань-бочек, квадратные бани, баня-бочка 2 метра, баня-бочка 3 метра, баня-бочка 4 метра, баня-бочка 5 метров, баня-бочка 6 метров, квадро-баня' });
  }
}
