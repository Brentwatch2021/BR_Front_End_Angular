import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAlbComponent } from './show-alb.component';

describe('ShowAlbComponent', () => {
  let component: ShowAlbComponent;
  let fixture: ComponentFixture<ShowAlbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAlbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAlbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
