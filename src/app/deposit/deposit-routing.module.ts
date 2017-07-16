import { VisaComponent } from './deposit-methods/visa/visa.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';





const DepositRoutes: Routes = [
  { path: '', redirectTo: 'deposit', pathMatch: 'full' },
  { path: 'deposit', component: VisaComponent },

  { path: '**', redirectTo: 'deposit', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(DepositRoutes)],
  exports: [RouterModule]
})
export class DepositRoutingModule {

}