import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchRes;

  constructor() { }

  ngOnInit() {
  }

  getArtistData(event) {
    this.searchRes = event;
    console.log(this.searchRes);
  }

}
