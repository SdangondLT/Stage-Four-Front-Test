import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { IDeactivateModule } from '@app-core/store/models/deactivateModule.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostEditGuard implements CanDeactivate<IDeactivateModule> {
  component: Object;
  constructor (private router: Router, private route: ActivatedRoute,){ }

  canDeactivate(component: IDeactivateModule,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
  {
    // console.log('currentRoute', this.route.snapshot.queryParams['returnUrl'] || '/')
    // console.log(this.route)
    // if (this.router.url){
    //   //alert('vienes de resume');
    //     // this.router.navigate(['/resume'])
    // }
    return true;
  }

  // CanDeactivate( route: ActivatedRouteSnapshot, component: IDeactivateModule): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  // {
  //   // console.log('route', this.router.url)
  //   // if (this.router.url === "/resume" && event.){
  //   //   alert('vienes de resume');
  //   //     this.router.navigate(['/resume'])
  //   // }
  //   return component.canGoNextView ? component.canGoNextView() : true ; //true deja pasar

  // }

}
