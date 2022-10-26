import { ComponentFixture, TestBed } from '@angular/core/testing';

import { addFriendsPageComponent } from './add-friends-page.component';

describe('addFriendsPageComponent', () => {
  let component: addFriendsPageComponent;
  let fixture: ComponentFixture<addFriendsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ addFriendsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(addFriendsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
