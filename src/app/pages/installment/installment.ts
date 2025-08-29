import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Component({
  selector: 'app-installment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './installment.html',
  styleUrl: './installment.scss'
})
export class Installment {
  http = inject(HttpClient);
  currentStep = 1;
  totalSteps = 4;
  
  // Ответы на вопросы
  answers = {
    creditType: '',
    term: '',
    monthlyPayment: '',
    phone: '',
    name: ''
  };

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
        day: '2-digit', month: '2-digit', year: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
      });
  
      const message = `📝 *Новая заявка*\n\n` +
        `📅 Дата: ${formattedDate}\n` +
        `👤 Имя: ${this.answers.name}\n` +
        `📞 Номер: ${this.answers.phone}\n` +
        `🔘 Формат оплаты: ${this.answers.creditType}\n` +
        `💬 Срок: ${this.answers.term}\n` +
        `💬 Ежемесячный платеж: ${this.answers.monthlyPayment}`;
  
      const url = `https://api.telegram.org/bot8409391989:AAGfNKCOk4pZP-nWHEzmRJ2JzN0EjnBcUkk/sendMessage`;
  
      this.http.post(url, {
        chat_id: '7557882902',
        text: message,
        parse_mode: 'Markdown',
      }).subscribe({
        error: (errorResponse) => {
          console.log(errorResponse);
        },
        complete: () => {
          console.log('success');
        }
      });
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
