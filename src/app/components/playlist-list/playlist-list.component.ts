import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { PlaylistListElement } from 'src/app/models/models/playlist-list/playlistListElement';
import { CSVHelper } from 'src/app/helpers/csvhelper';


@Component({
  selector: 'app-playlist-list',
  standalone: true,
  imports: [
    CommonModule, 
    MatButtonModule,
    MatTableModule,
  ],
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent {
  public playlists: PlaylistListElement[] = [
    { id: 1, title: "Distortion", created: "2023-10-07", songs: 1024, played: "1 day ago" },
    { id: 2, title: "Rock Mix", created: "2023-03-23", songs: 27, played: "2 days ago" },
    { id: 3, title: "What have I become?", created: "2023-06-17", songs: 33, played: "4 days ago" },
    { id: 4, title: "Psycho", created: "2023-07-21", songs: 55, played: "14 days ago" },
  ]

  columnsToDisplay = ['title', 'created', 'songs', 'played', 'download'];

  constructor() {
    CSVHelper.convertPlaylistsToCSV(this.playlists);
  }
}
