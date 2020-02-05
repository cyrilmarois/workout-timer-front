import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TimerEditComponent } from './timer/edit/timer-edit.component';
import { TimerDetailComponent } from './timer/detail/timer-detail.component';
import { TimerListComponent } from './timer/list/timer-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/timer', pathMatch: 'full' },
  { path: 'timer', component: TimerListComponent, children: [
    { path: '', component: TimerListComponent },
    { path: ':id', component: TimerDetailComponent },
    { path: ':id/edit', component: TimerEditComponent },
  ]},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
