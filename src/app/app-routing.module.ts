import { VisaComponent } from './deposit/deposit-methods/visa/visa.component';
import { RouterModule, Routes } from '@angular/router';



const AppRoutes: Routes = [
  { path: '', redirectTo: 'deposit', pathMatch: 'full' },
  { path: 'deposit', component: VisaComponent },

  { path: '**', redirectTo: 'deposit', pathMatch: 'full' },
];

export const AppRoutingModule = RouterModule.forRoot(AppRoutes, {useHash: true});
