import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Catalog } from './pages/catalog/catalog';
import { Equipment } from './pages/equipment/equipment';
import { Contacts } from './pages/contacts/contacts';
import { OfferAgreement } from './pages/offer-agreement/offer-agreement';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';
import { Installment } from './pages/installment/installment';
import { Favorites } from './pages/favorites/favorites';
import { PriceCalculationComponent } from './pages/price-calculation/price-calculation';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'catalog', component: Catalog },
  { path: 'favorites', component: Favorites },
  { path: 'equipment', component: Equipment },
  { path: 'contacts', component: Contacts },
  { path: 'offer-agreement', component: OfferAgreement },
  { path: 'privacy-policy', component: PrivacyPolicy },
  { path: 'installment', component: Installment },
  { path: 'price-calculation', component: PriceCalculationComponent },
];
