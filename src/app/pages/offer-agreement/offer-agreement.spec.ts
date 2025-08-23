import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferAgreement } from './offer-agreement';

describe('OfferAgreement', () => {
  let component: OfferAgreement;
  let fixture: ComponentFixture<OfferAgreement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferAgreement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferAgreement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
