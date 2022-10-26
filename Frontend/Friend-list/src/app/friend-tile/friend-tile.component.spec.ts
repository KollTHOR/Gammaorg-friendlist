import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendTileComponent } from './friend-tile.component';

describe('FriendTileComponent', () => {
  let component: FriendTileComponent;
  let fixture: ComponentFixture<FriendTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
