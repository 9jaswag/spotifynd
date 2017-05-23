import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  private _searchUrl: string;
  private _artistUrl: string;

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

}
