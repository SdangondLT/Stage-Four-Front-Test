import { Injectable } from '@angular/core';
import { CanDeactivate, Router, UrlTree } from '@angular/router';
import { IDeactivateModule } from '@app-core/store/models/deactivateModule.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardGuard implements CanDeactivate<IDeactivateModule> {

  component: Object;
  canDeactivate(component: IDeactivateModule):
    Observable<boolean| UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    return component.canGoNextView ? component.canGoNextView() : true ; //true deja pasar
  }
}
