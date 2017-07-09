import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallMapComponent } from './call-map.component';
import {CallMapService} from './call-map.service';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCsQVGUxpsyXXow4g1Lf4pKdl-UPDcp7QM'
    })
  ],
  declarations: [CallMapComponent],
  providers: [CallMapService]
})
export class CallMapModule { }
