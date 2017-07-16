import { NouisliderModule } from 'ng2-Nouislider';
import { SharedModule } from './../shared/shared.module';
import { DepositRoutingModule } from './deposit-routing.module';
import { VisaComponent } from './deposit-methods/visa/visa.component';

import { NgModule } from "@angular/core";

@NgModule({
    declarations:[
        VisaComponent
    ],
    imports:[
        DepositRoutingModule,
        SharedModule,
       NouisliderModule
    ]
})
export class DepositModule{}