import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '@app-core/auth-guard/auth-guard.guard';
import { PostEditGuard } from '@app-core/post-edit-guard/post-edit.guard';
import {PersonalComponent} from '@app-modules/personal/personal.component'

const routes: Routes = [
  {
    path: "",
    component: PersonalComponent,
    canDeactivate: [AuthGuardGuard, PostEditGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
