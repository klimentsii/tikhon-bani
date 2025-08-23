import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Catalog } from './pages/catalog/catalog';
import { Equipment } from './pages/equipment/equipment';
import { Contacts } from './pages/contacts/contacts';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'catalog', component: Catalog },
  { path: 'equipment', component: Equipment },
  { path: 'contacts', component: Contacts }
];
