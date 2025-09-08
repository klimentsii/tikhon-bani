import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  http = inject(HttpClient);
  showCalculator = false;
  phoneNumber = '';
  selectedBathType = '';
  showSuccessMessage = false;

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
      const date = new Date();
      const formattedDate = date.toLocaleString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });

      const bathTypeText = this.selectedBathType === 'square' ? 'Квадратная баня' : 'Баня-бочка';

      const message =
        `🏠 *Заявка на расчет стоимости бани*\n\n` +
        `📅 Дата: ${formattedDate}\n` +
        `📞 Номер телефона: ${this.phoneNumber}\n` +
        `🏡 Тип бани: ${bathTypeText}\n` +
        `📝 Источник: Главная страница`;

      const url = `https://api.telegram.org/bot8409391989:AAGfNKCOk4pZP-nWHEzmRJ2JzN0EjnBcUkk/sendMessage`;

      // Отправляем в основной чат
      this.http
        .post(url, {
          chat_id: '7557882902',
          text: message,
          parse_mode: 'Markdown',
        })
        .subscribe({
          next: (response) => {
            console.log('success main chat', response);
          },
          error: (errorResponse) => {
            console.log('error main chat', errorResponse);
          },
        });

      // Отправляем в дополнительный чат
      this.http
        .post(url, {
          chat_id: '5390444241',
          text: message,
          parse_mode: 'Markdown',
        })
        .subscribe({
          next: (response) => {
            console.log('success additional chat', response);
            this.showSuccessMessage = true;
            this.resetForm();
          },
          error: (errorResponse) => {
            console.log('error additional chat', errorResponse);
            alert('Произошла ошибка при отправке заявки. Попробуйте еще раз.');
          },
        });
    } else {
      alert('Пожалуйста, заполните все поля');
    }
  }

  // Обнуление формы
  resetForm() {
    this.phoneNumber = '';
    this.selectedBathType = '';
    this.showCalculator = false;
  }

  // Скрытие сообщения об успехе
  hideSuccessMessage() {
    this.showSuccessMessage = false;
  }
}
