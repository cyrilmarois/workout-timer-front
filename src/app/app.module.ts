import { httpInterceptorProviders } from './core/http-interceptors/index';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  MatCardModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatOptionModule,
  MatSelectModule,
  MatSliderModule
} from '@angular/material';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CycleComponent } from './cycle/cycle.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SetComponent } from './set/set.component';
import { SoundComponent } from './sound/sound.component';
import { TimerDetailComponent } from './timer/detail/timer-detail.component';
import { TimerEditComponent } from './timer/edit/timer-edit.component';
import { TimerListComponent } from './timer/list/timer-list.component';
import { TypeComponent } from './type/type.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TimerListComponent,
    TimerDetailComponent,
    TimerEditComponent,
    SetComponent,
    CycleComponent,
    SoundComponent,
    TypeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
    MatCardModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    MatListModule,
    MatSelectModule,
    MatSliderModule,
    ReactiveFormsModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
