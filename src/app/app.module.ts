import 'hammerjs';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdIconModule, MdToolbarModule} from '@angular/material';
import {CallMapModule} from './call-map/call-map.module';
import {CallMapComponent} from './call-map/call-map.component';
import {CallMapResolve} from './call-map.resolve';

const routes: Routes = [
  {
    path: 'map',
    component: CallMapComponent,
    resolve: {
      config: CallMapResolve
    }
  },
  {
    path: '**',
    redirectTo: 'map'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdToolbarModule,
    MdIconModule,
    CallMapModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CallMapResolve],
  bootstrap: [AppComponent]
})
export class AppModule {
}
