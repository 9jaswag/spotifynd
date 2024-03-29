import { SpotifyService } from '../spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  id: string;
  artist;
  albums;

  constructor( private _activatedRoute: ActivatedRoute, private _spotifyService: SpotifyService) { }

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.params['id'];
    this._spotifyService.getArtist(this.id)
      .subscribe( artist => this.artist = artist);

    this._spotifyService.getAlbums(this.id)
      .subscribe( album => this.albums = album.items);
  }

}
