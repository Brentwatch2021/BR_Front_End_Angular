import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistsComponent } from './artists/artists.component';
import { AddEditArtComponent } from './Artists/add-edit-art/add-edit-art.component';
import { ShowArtComponent } from './Artists/show-art/show-art.component';
import { AlbumsComponent } from './albums/albums.component';
import { AddEditAlbComponent } from './Albums/add-edit-alb/add-edit-alb.component';
import { ShowAlbComponent } from './Albums/show-alb/show-alb.component';
import { GenresComponent } from './genres/genres.component';
import { AddEditGenComponent } from './Genres/add-edit-gen/add-edit-gen.component';
import { ShowGenComponent } from './Genres/show-gen/show-gen.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistsComponent,
    AddEditArtComponent,
    ShowArtComponent,
    AlbumsComponent,
    AddEditAlbComponent,
    ShowAlbComponent,
    GenresComponent,
    AddEditGenComponent,
    ShowGenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
