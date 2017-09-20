import { PlaceService } from './../place/place.service';
import { StaticComponent } from './../static/static.component';
import { PlaceComponent } from './../place/place.component';
import { Component,Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

@Input() parentValue : any[];

  constructor() { }

  ngOnInit() {
  }

}
