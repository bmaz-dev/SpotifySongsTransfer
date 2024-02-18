import { Injectable } from '@angular/core';
import { PlaylistListElement } from '../models/playlist-list/playlistListElement';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PlaylistListService {

  constructor(private http: HttpClient) { }

}
