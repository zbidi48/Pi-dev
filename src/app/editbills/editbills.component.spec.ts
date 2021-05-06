import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbillsComponent } from './editbills.component';

describe('EditbillsComponent', () => {
  let component: EditbillsComponent;
  let fixture: ComponentFixture<EditbillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditbillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
