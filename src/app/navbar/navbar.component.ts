import { SpotifyService } from '../spotify.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchStr: string;
  searchRes;
  @Output() artistData = new EventEmitter();
  @Output() strlen = new EventEmitter();

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
  }
  searchMusic() {
    if (this.searchStr) {
      this._spotifyService.searchMusic(this.searchStr)
      .subscribe( res => {
        this.searchRes = res.artists.items;
        this.artistData.emit(this.searchRes);
        this.strlen.emit(this.searchStr.length);
      });
    }
  }

}
