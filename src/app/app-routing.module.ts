import { WorkoutListComponent } from "./workout/list/workout-list.component";
import { WorkoutDetailComponent } from "./workout/detail/workout-detail.component";
import { WorkoutEditComponent } from "./workout/edit/workout-edit.component";
import { SetComponent } from "./set/set.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { NotFoundComponent } from "./not-found/not-found.component";

const appRoutes: Routes = [
  // { path: '', redirectTo: '/timer', pathMatch: 'full' },
  { path: "workout/:id", component: WorkoutDetailComponent },
  { path: "new", component: WorkoutEditComponent },
  {
    path: "workout",
    component: WorkoutListComponent,
    children: [
      { path: "", component: WorkoutListComponent },
      // { path: 'workout/:id', component: WorkoutDetailComponent },
      // { path: ':id/edit', component: WorkoutEditComponent },
    ],
  },
  { path: "**", component: WorkoutListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
