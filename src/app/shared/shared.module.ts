import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdNativeDateModule, MdButtonModule, MdCheckboxModule } from '@angular/material';
import { AppRoutingModule } from './../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
@NgModule({
 declarations: [
   
    
  ],
  exports:[
    MaterialModule,
    MdNativeDateModule,
    MdButtonModule, 
    MdCheckboxModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
