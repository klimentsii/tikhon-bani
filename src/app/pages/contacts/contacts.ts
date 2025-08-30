import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contacts.html',
  styleUrl: './contacts.scss'
})
export class Contacts implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Контакты BANYA TUT - Свяжитесь с нами для заказа бани-бочки | Брестская область');
    this.metaService.updateTag({ name: 'description', content: 'Контакты BANYA TUT - свяжитесь с нами для заказа бани-бочки или квадратной бани. Телефон, email, адрес. Рассчитать стоимость бани онлайн. Доставка по всей области. Производство банного оборудования премиум-класса.' });
    this.metaService.updateTag({ name: 'keywords', content: 'контакты BANYA TUT, заказать баню-бочку, телефон бани, адрес производства бань, доставка бань, Брестская область, Березовский район' });
  }
}
