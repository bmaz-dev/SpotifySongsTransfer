import { formatDate } from "@angular/common";
import { PlaylistListElement } from "../models/models/playlist-list/playlistListElement";

export class CSVHelper {
    static convertPlaylistsToCSV(array: Object[]): string {
        const separator = ';';
        
        var result: string = Object.keys(array[0]).join(',') + '\n';
        var row: string = "";
        array.forEach(p => {
            result = result.concat(Object.values(p).join(','), '\n');
        })
        return result.concat(result);
    }
}
