import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '@app-core/auth-guard/auth-guard.guard';
import {ResidentialComponent} from '@app-modules/residential/residential.component'

const routes: Routes = [
  {
    path: "",
    component: ResidentialComponent,
    canDeactivate: [AuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentialRoutingModule { }
