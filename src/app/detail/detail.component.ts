import { PlaceService } from './../place/place.service';
import { StaticComponent } from './../static/static.component';
import { PlaceComponent } from './../place/place.component';
import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


@Input() resultValue : any [];

  constructor() { }

  ngOnInit() {
  }

}
