import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-offer-agreement',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offer-agreement.html',
  styleUrl: './offer-agreement.scss'
})
export class OfferAgreement implements OnInit {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Договор оферты | BANYA TUT');
    this.metaService.updateTag({ name: 'description', content: 'Договор оферты BANYA TUT - условия покупки бань-бочек и квадратных бань. Правовая информация, условия сделки, права и обязанности сторон.' });
    this.metaService.updateTag({ name: 'keywords', content: 'договор оферты, условия покупки бани, правовая информация, BANYA TUT' });
  }
}
