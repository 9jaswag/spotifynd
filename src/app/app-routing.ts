import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';

const routes = [
    { path: '', component: SearchComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: NotFoundComponent }
];

export const AppRouting = RouterModule.forRoot(routes);
