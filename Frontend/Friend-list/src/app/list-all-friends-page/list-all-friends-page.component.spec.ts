import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllFriendsPageComponent } from './list-all-friends-page.component';

describe('ListAllFriendsPageComponent', () => {
  let component: ListAllFriendsPageComponent;
  let fixture: ComponentFixture<ListAllFriendsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllFriendsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAllFriendsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
