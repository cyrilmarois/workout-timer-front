import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { TimerComponent } from './timer/timer.component';
import { TimerListComponent } from './timer/list/timer-list.component';
import { TimerDetailComponent } from './timer/detail/timer-detail.component';
import { TimerEditComponent } from './timer/edit/timer-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerListComponent,
    TimerDetailComponent,
    TimerEditComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
