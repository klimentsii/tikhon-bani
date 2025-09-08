import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-installment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './installment.html',
  styleUrl: './installment.scss',
})
export class Installment implements OnInit {
  http = inject(HttpClient);
  currentStep = 1;
  totalSteps = 4;
  showSuccessMessage = false;

  // Ответы на вопросы
  answers = {
    creditType: '',
    term: '',
    monthlyPayment: '',
    phone: '',
    name: '',
  };

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle('Оформление рассрочки на баню-бочку и квадратную баню | BANYA TUT');
    this.metaService.updateTag({
      name: 'description',
      content:
        'Оформление рассрочки на баню-бочку и квадратную баню от BANYA TUT. Заполните форму и мы подберем для вас оптимальные условия рассрочки. Без переплат и скрытых комиссий.',
    });
    this.metaService.updateTag({
      name: 'keywords',
      content:
        'рассрочка на баню, кредит на баню, рассрочка баня-бочка, рассрочка квадратная баня, оформить рассрочку, условия рассрочки',
    });
  }

  // Переход к следующему шагу
  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  // Переход к предыдущему шагу
  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  // Выбор типа кредита
  selectCreditType(type: string) {
    this.answers.creditType = type;
    this.nextStep();
  }

  // Выбор срока
  selectTerm(term: string) {
    this.answers.term = term;
    this.nextStep();
  }

  // Выбор ежемесячной платы
  selectMonthlyPayment(payment: string) {
    this.answers.monthlyPayment = payment;
    this.nextStep();
  }

  // Отправка формы
  submitForm() {
    const date = new Date();
    const formattedDate = date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    const message =
      `📝 *Новая заявка*\n\n` +
      `📅 Дата: ${formattedDate}\n` +
      `👤 Имя: ${this.answers.name}\n` +
      `📞 Номер: ${this.answers.phone}\n` +
      `🔘 Формат оплаты: ${this.answers.creditType}\n` +
      `💬 Срок: ${this.answers.term}\n` +
      `💬 Ежемесячный платеж: ${this.answers.monthlyPayment}`;

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
        },
      });
  }

  // Обнуление формы
  resetForm() {
    this.answers = {
      creditType: '',
      term: '',
      monthlyPayment: '',
      phone: '',
      name: '',
    };
    this.currentStep = 1;
  }

  // Скрытие сообщения об успехе
  hideSuccessMessage() {
    this.showSuccessMessage = false;
  }

  // Проверка, можно ли перейти к следующему шагу
  canProceed(): boolean {
    switch (this.currentStep) {
      case 1:
        return !!this.answers.creditType;
      case 2:
        return !!this.answers.term;
      case 3:
        return !!this.answers.monthlyPayment;
      case 4:
        return !!this.answers.phone && !!this.answers.name;
      default:
        return false;
    }
  }

  // Получение процента заполнения
  getProgressPercentage(): number {
    return (this.currentStep / this.totalSteps) * 100;
  }
}
