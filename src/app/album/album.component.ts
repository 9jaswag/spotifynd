import { SpotifyService } from '../spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  id: string;
  album;

  constructor( private _activatedRoute: ActivatedRoute, private _spotifyService: SpotifyService) { }

  ngOnInit() {
    this.id = this._activatedRoute.snapshot.params['id'];
    this._spotifyService.getAlbum(this.id)
      .subscribe( album => this.album = album);
  }

  goBack() {
    window.history.back();
  }

}
