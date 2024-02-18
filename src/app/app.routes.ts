import { Routes } from '@angular/router';
import { PlaylistListComponent } from './components/playlist-list/playlist-list.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { 
        path: 'list', 
        loadComponent: () => 
            import('./components/playlist-list/playlist-list.component')
                .then(mod => mod.PlaylistListComponent) 
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
    },
];
