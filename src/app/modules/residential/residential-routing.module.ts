import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResidentialComponent} from '@app-modules/residential/residential.component'

const routes: Routes = [
  {
    path: "",
    component: ResidentialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentialRoutingModule { }
