import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  showCalculator = false;
  phoneNumber = '';
  selectedBathType = '';

  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle('BANYA TUT - Производство бань-бочек и квадратных бань премиум-класса | Брестская область');
    this.metaService.updateTag({ name: 'description', content: 'BANYA TUT - производство бань-бочек и квадратных бань премиум-класса. Рассчитать стоимость бани онлайн. Панельная технология сборки, эксклюзивная подготовка древесины. Доставка по всей области от 300 руб.' });
    this.metaService.updateTag({ name: 'keywords', content: 'баня-бочка, квадратная баня, рассчитать стоимость бани, баня премиум-класса, Брестская область' });
  }

  calculatePrice() {
    if (this.phoneNumber && this.selectedBathType) {
      console.log('Расчет стоимости:', {
        phone: this.phoneNumber,
        type: this.selectedBathType
      });
      
      // Здесь можно добавить логику отправки данных
      alert('Спасибо! Мы свяжемся с вами для расчета стоимости.');
      
      // Сброс формы
      this.phoneNumber = '';
      this.selectedBathType = '';
      this.showCalculator = false;
    } else {
      alert('Пожалуйста, заполните все поля');
    }
  }
}
