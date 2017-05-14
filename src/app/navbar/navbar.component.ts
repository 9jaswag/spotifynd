import { SpotifyService } from '../spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchStr: string;

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
  }
  searchMusic() {
    this._spotifyService.searchMusic(this.searchStr);
  }

}
