import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '@app-core/auth-guard/auth-guard.guard';
import {PersonalComponent} from '@app-modules/personal/personal.component'

const routes: Routes = [
  {
    path: "",
    component: PersonalComponent,
    canDeactivate: [AuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
