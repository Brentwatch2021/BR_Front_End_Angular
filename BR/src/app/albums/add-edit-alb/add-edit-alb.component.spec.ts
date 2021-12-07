import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAlbComponent } from './add-edit-alb.component';

describe('AddEditAlbComponent', () => {
  let component: AddEditAlbComponent;
  let fixture: ComponentFixture<AddEditAlbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAlbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditAlbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
