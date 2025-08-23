import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  showCalculator = false;
  phoneNumber = '';
  selectedBathType = '';

  calculatePrice() {
    if (this.phoneNumber && this.selectedBathType) {
      console.log('Заявка отправлена:', {
        phone: this.phoneNumber,
        bathType: this.selectedBathType
      });
      // Здесь будет логика отправки заявки
      alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
      this.showCalculator = false;
      this.phoneNumber = '';
      this.selectedBathType = '';
    } else {
      alert('Пожалуйста, заполните все поля');
    }
  }
}
