import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { ArtistComponent } from './artist/artist.component';

const routes = [
    { path: '', component: SearchComponent },
    { path: 'about', component: AboutComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: '**', component: NotFoundComponent }
];

export const AppRouting = RouterModule.forRoot(routes);
