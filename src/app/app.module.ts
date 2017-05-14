import { AppRouting } from './app-routing';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SpotifyService } from 'app/spotify.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRouting
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
