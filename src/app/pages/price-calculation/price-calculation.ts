import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Title, Meta } from '@angular/platform-browser';

interface EquipmentItem {
  id: string;
  name: string;
  description: string;
  icon: string;
  price: number;
  selected: boolean;
}

interface SaunaProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  type: 'barrel' | 'quadro';
  specifications: Array<{
    label: string;
    value: string;
  }>;
}

@Component({
  selector: 'app-price-calculation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './price-calculation.html',
  styleUrls: ['./price-calculation.scss'],
})
export class PriceCalculationComponent implements OnInit {
  selectedProduct: SaunaProduct | null = null;
  equipmentItems: EquipmentItem[] = [];
  showContactForm = false;
  contactForm = {
    name: '',
    phone: '',
  };
  isSubmitting = false;
  showSuccessMessage = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit() {
    this.title.setTitle('Рассчитать стоимость бани - BANYA TUT');
    this.meta.updateTag({
      name: 'description',
      content:
        'Рассчитайте стоимость бани с выбранными комплектациями. Выберите баню и необходимые опции для точного расчета цены.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'расчет стоимости бани, цена бани, комплектация бани, баня бочка цена, квадратная баня стоимость',
    });

    // Получаем ID продукта из URL
    const productId = this.route.snapshot.queryParams['productId'];
    if (productId) {
      this.loadProduct(productId);
    }

    this.initializeEquipment();
  }

  loadProduct(productId: string) {
    // Импортируем данные каталога
    import('./../catalog/catalog.data').then(({ CATALOG_DATA }) => {
      // Ищем продукт по ID во всех секциях каталога
      for (const section of CATALOG_DATA) {
        const product = section.products.find((p) => p.id === productId);
        if (product) {
          this.selectedProduct = {
            id: product.id,
            name: product.name,
            description: 'Комфортная баня из натурального дерева',
            image: product.image,
            price: 0, // Цена будет отображаться из specifications
            type: product.id.includes('barrel') ? 'barrel' : 'quadro',
            specifications: product.specifications,
          };
          break;
        }
      }
    });
  }

  initializeEquipment() {
    this.equipmentItems = [
      {
        id: '1',
        name: 'Утеплитель',
        description: 'Качественный утеплитель для сохранения тепла',
        icon: '🧱',
        price: 15000,
        selected: false,
      },
      {
        id: '2',
        name: 'Г-образные полки',
        description: 'Удобные полки для комфортного парения',
        icon: '🪑',
        price: 25000,
        selected: false,
      },
      {
        id: '3',
        name: 'Печь',
        description: 'Надежная печь для создания идеального пара',
        icon: '🔥',
        price: 35000,
        selected: false,
      },
      {
        id: '4',
        name: 'Козырек',
        description: 'Защита от осадков над входом в баню',
        icon: '☂️',
        price: 12000,
        selected: false,
      },
      {
        id: '5',
        name: 'Крыльцо',
        description: 'Удобный вход в баню с красивым оформлением',
        icon: '🚪',
        price: 18000,
        selected: false,
      },
      {
        id: '6',
        name: 'Печь снаружи вынос',
        description: 'Безопасная топка печи снаружи бани',
        icon: '🏭',
        price: 45000,
        selected: false,
      },
      {
        id: '7',
        name: 'Сосновый стол',
        description: 'Натуральный стол для комнаты отдыха',
        icon: '🪑',
        price: 22000,
        selected: false,
      },
      {
        id: '8',
        name: 'Рундук',
        description: 'Встроенное место для хранения вещей',
        icon: '📦',
        price: 15000,
        selected: false,
      },
      {
        id: '9',
        name: 'Верхние полки',
        description: 'Дополнительные полки для хранения',
        icon: '📚',
        price: 12000,
        selected: false,
      },
      {
        id: '10',
        name: 'Душ комплект',
        description: 'Полный комплект для душевой кабины',
        icon: '🚿',
        price: 28000,
        selected: false,
      },
      {
        id: '11',
        name: 'Уличные ступени',
        description: 'Безопасные ступени для входа в баню',
        icon: '⬆️',
        price: 8000,
        selected: false,
      },
      {
        id: '12',
        name: 'Дополнительная пропитка',
        description: 'Защита древесины от влаги и гниения',
        icon: '🎨',
        price: 5000,
        selected: false,
      },
      {
        id: '13',
        name: 'Комплект лавки + стол',
        description: 'Уютная зона отдыха с мебелью',
        icon: '🪑',
        price: 30000,
        selected: false,
      },
    ];
  }

  toggleEquipment(item: EquipmentItem) {
    item.selected = !item.selected;
  }

  get totalPrice(): number {
    if (!this.selectedProduct) return 0;

    const equipmentPrice = this.equipmentItems
      .filter((item) => item.selected)
      .reduce((sum, item) => sum + item.price, 0);

    // Получаем базовую цену из specifications
    const priceSpec = this.selectedProduct.specifications.find((spec) => spec.label === 'Цена:');
    const basePrice = priceSpec ? this.extractPriceFromString(priceSpec.value) : 0;

    return basePrice + equipmentPrice;
  }

  private extractPriceFromString(priceString: string): number {
    // Извлекаем число из строки типа "3900 BYN"
    const match = priceString.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  }

  get selectedEquipmentCount(): number {
    return this.equipmentItems.filter((item) => item.selected).length;
  }

  showContactFormModal() {
    this.showContactForm = true;
  }

  hideContactForm() {
    this.showContactForm = false;
    this.contactForm = { name: '', phone: '' };
  }

  submitContactForm() {
    if (!this.contactForm.name.trim() || !this.contactForm.phone.trim()) {
      return;
    }

    this.isSubmitting = true;

    // Отправляем данные в Telegram бот
    const priceSpec = this.selectedProduct?.specifications.find((spec) => spec.label === 'Цена:');
    const basePrice = priceSpec ? priceSpec.value : 'Не указана';

    const message = `
🔴 НОВАЯ ЗАЯВКА НА РАСЧЕТ СТОИМОСТИ

🏠 Продукт: ${this.selectedProduct?.name || 'Не указан'}
💰 Базовая цена: ${basePrice}
⚙️ Выбранные комплектации: ${this.selectedEquipmentCount} шт.
💵 Итоговая стоимость: ${this.totalPrice.toLocaleString()} BYN

👤 Имя: ${this.contactForm.name}
📱 Телефон: ${this.contactForm.phone}

📋 Выбранные опции:
${this.equipmentItems
  .filter((item) => item.selected)
  .map((item) => `• ${item.name} - ${item.price.toLocaleString()} BYN`)
  .join('\n')}
    `;

    const data = {
      chat_id: '-1001234567890', // Замените на ваш chat_id
      text: message,
      parse_mode: 'HTML',
    };

    this.http.post('https://api.telegram.org/botYOUR_BOT_TOKEN/sendMessage', data).subscribe({
      next: () => {
        this.showSuccessMessage = true;
        this.hideContactForm();
        this.isSubmitting = false;
      },
      error: (error) => {
        console.error('Ошибка отправки:', error);
        this.isSubmitting = false;
      },
    });
  }

  hideSuccessMessage() {
    this.showSuccessMessage = false;
  }
}
