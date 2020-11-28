import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, pipe, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MainService {
  configUrl = 'http://ws.audioscrobbler.com';
  api = '01424f8ebe495e0900a4e99eebd5324c';
  constructor(private http: HttpClient) { }

  getTop(): Observable <any> {
    return this.http.get(`${this.configUrl}/2.0/?method=chart.gettoptracks&api_key=${this.api}&format=json`)
  }



  searchTrack(text): Observable <any> {

    return this.http.get(`${this.configUrl}/2.0/?method=track.search&track=${text}&api_key=${this.api}&format=json`, {
      params: {
        limit: '150',
        track: 'terra',
        artist: ''
      }

    })
  }
}
