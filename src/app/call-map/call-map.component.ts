import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CallMapConfig} from './index';

@Component({
  selector: 'app-call-map',
  templateUrl: './call-map.component.html',
  styleUrls: ['./call-map.component.scss']
})
export class CallMapComponent implements OnInit {
  config: CallMapConfig;

  latitude: number;
  longitude: number;

  zoom: number;
  minZoom: number;
  maxZoom: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: {config: CallMapConfig}) => {
      this.latitude = data.config.defaultLatitude;
      this.longitude = data.config.defaultLongitude;
      this.zoom = data.config.defaultZoom;
      this.minZoom = data.config.minZoom;
      this.maxZoom = data.config.maxZoom;
    });
  }

}
