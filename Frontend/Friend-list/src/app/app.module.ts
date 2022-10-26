import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { addFriendsPageComponent } from './add-friends-page/add-friends-page.component';
import { FriendTileComponent } from './friend-tile/friend-tile.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ListAllFriendsPageComponent } from './list-all-friends-page/list-all-friends-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    addFriendsPageComponent,
    FriendTileComponent,
    ListAllFriendsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
