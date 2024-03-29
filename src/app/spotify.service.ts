import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  private _searchUrl: string;
  private _artistUrl: string;
  private _albumsUrl: string;
  private _albumUrl: string;

  constructor(private _http: Http) { }

  searchMusic(str: string, type= 'artist') {
    this._searchUrl = 'https://api.spotify.com/v1/search?q=' + str + '&type=' + type;
    console.log(this._searchUrl);
    return this._http.get(this._searchUrl)
      .map(res => res.json());
  }

  getArtist(id: string) {
    this._artistUrl = 'https://api.spotify.com/v1/artists/' + id;
    return this._http.get(this._artistUrl)
      .map( res => res.json());
  }

  getAlbums(id: string) {
    this._albumsUrl = 'https://api.spotify.com/v1/artists/' + id + '/albums';
    return this._http.get(this._albumsUrl)
      .map( res => res.json());
  }

  getAlbum(id: string) {
    this._albumUrl = 'https://api.spotify.com/v1/albums/' + id;
    return this._http.get(this._albumUrl)
      .map( res => res.json());
  }

}
