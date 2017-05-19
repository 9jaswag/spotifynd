import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  searchRes: string;

  private _searchUrl: string;

  constructor(private _http: Http) { }

  searchMusic(str: string, type= 'artist') {
    this._searchUrl = 'https://api.spotify.com/v1/search?q=' + str + '&type=' + type + '&limit=20';
    console.log(this._searchUrl);
    return this._http.get(this._searchUrl)
      .map(res => res.json());
  }

  setSearchRes(str: string) {
    this.searchRes = str;
    console.log(this.searchRes);
  }

}
