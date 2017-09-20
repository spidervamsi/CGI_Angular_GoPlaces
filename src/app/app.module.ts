import { PlaceService } from './place/place.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PlaceComponent } from './place/place.component';

import { SearchComponent } from './search/search.component';
import { StaticComponent } from './static/static.component';
import { DetailComponent } from './detail/detail.component';
@NgModule({
  declarations: [
    AppComponent,
    PlaceComponent,
    SearchComponent,
    StaticComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path :'home/:id',
        component: PlaceComponent
      },
      {
        path :'static',
        component: StaticComponent
      },
      {
        path :'detail',
        component: DetailComponent
      },
      {
        path :'search',
        component:SearchComponent
      }
    ])
  ],
  providers: [PlaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
