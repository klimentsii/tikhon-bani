import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Catalog } from './pages/catalog/catalog';
import { Equipment } from './pages/equipment/equipment';
import { Contacts } from './pages/contacts/contacts';
import { OfferAgreement } from './pages/offer-agreement/offer-agreement';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { Installment } from './pages/installment/installment';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'catalog', component: Catalog },
  { path: 'equipment', component: Equipment },
  { path: 'contacts', component: Contacts },
  { path: 'offer-agreement', component: OfferAgreement },
  { path: 'privacy-policy', component: PrivacyPolicy },
  { path: 'installment', component: Installment },
];
