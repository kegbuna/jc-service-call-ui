import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {CallMapConfig} from './call-map/index';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class CallMapResolve implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CallMapConfig> {
    return Observable.of({
      defaultLatitude: 40.731091,
      defaultLongitude: -74.062790,
      defaultZoom: 15,
      minZoom: 13,
      maxZoom: 17
    });
  }

  constructor() {
  }

}
