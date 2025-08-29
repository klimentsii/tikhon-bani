import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-installment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './installment.html',
  styleUrl: './installment.scss'
})
export class Installment {
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
    console.log('Ответы пользователя:', this.answers);
    // Здесь можно добавить логику отправки данных на сервер
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
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
