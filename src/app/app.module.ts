import { httpInterceptorProviders } from "./core/http-interceptors/index";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatOptionModule } from "@angular/material/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { MatSliderModule } from "@angular/material/slider";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { AuthComponent } from "./auth/auth.component";
import { CycleComponent } from "./cycle/cycle.component";
import { HeaderComponent } from "./header/header.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { SetComponent } from "./set/set.component";
import { SoundComponent } from "./sound/sound.component";
import { WorkoutDetailComponent } from "./workout/detail/workout-detail.component";
import { WorkoutEditComponent } from "./workout/edit/workout-edit.component";
import { WorkoutListComponent } from "./workout/list/workout-list.component";
import { TypeComponent } from "./type/type.component";
import { PasswordValidatorComponent } from "./shared/password-validator/password-validator.component";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CycleComponent,
    HeaderComponent,
    NotFoundComponent,
    PasswordValidatorComponent,
    SetComponent,
    SoundComponent,
    TypeComponent,
    WorkoutListComponent,
    WorkoutDetailComponent,
    WorkoutEditComponent,
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
    ReactiveFormsModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
