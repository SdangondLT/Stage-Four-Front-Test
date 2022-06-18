import { Observable } from "rxjs";

export interface IDeactivateModule {
  canGoNextView: () => Observable<boolean> | Promise<boolean> | boolean;
}
