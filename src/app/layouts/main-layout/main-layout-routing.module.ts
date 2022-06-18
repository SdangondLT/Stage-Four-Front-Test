import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: "",
        pathMatch:"full",
        redirectTo: "personal",
      },
      {
        path: "personal",
        pathMatch: "full",
        loadChildren: () =>
          import("../../modules/personal/personal.module").then(
            (m) => m.PersonalModule
          )
      },
      {
        path: "residential",
        pathMatch: "full",
        loadChildren: () =>
          import("../../modules/residential/residential.module").then(
            (m) => m.ResidentialModule
          )
      },
      {
        path: "resume",
        pathMatch: "full",
        loadChildren: () =>
          import("../../modules/resume/resume.module").then(
            (m) => m.ResumeModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }
