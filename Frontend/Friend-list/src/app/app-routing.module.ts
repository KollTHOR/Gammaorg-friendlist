import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { addFriendsPageComponent } from './add-friends-page/add-friends-page.component';
import { ListAllFriendsPageComponent } from './list-all-friends-page/list-all-friends-page.component';

const routes: Routes = [
  {path: '', component:addFriendsPageComponent},
  //{path: '/list', component:ListAllFriendsPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
