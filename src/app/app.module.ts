import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatestestComponent } from './datestest/datestest.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {FormsModule} from "@angular/forms";
import { InputMaskModule } from '@ngneat/input-mask';

@NgModule({
  declarations: [
    AppComponent,
    DatestestComponent
  ],
  imports: [
    BrowserModule,
    MatNativeDateModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    InputMaskModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'de-DE'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
