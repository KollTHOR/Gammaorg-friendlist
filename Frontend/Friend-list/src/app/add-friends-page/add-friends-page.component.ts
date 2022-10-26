import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IAddFriend } from '../models/IAddFriend';

@Component({
  selector: 'app-add-friends-page',
  templateUrl: './add-friends-page.component.html',
  styleUrls: ['./add-friends-page.component.scss']
})
export class addFriendsPageComponent {
  friendForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    comment: new FormControl('', [Validators.required]),
    favFood: new FormControl('', [Validators.required]),
    relationshipStatus: new FormControl('', [Validators.required])
})
  
 
}



