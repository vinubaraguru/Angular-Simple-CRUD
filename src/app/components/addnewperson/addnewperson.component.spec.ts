import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewpersonComponent } from './addnewperson.component';

describe('AddnewpersonComponent', () => {
  let component: AddnewpersonComponent;
  let fixture: ComponentFixture<AddnewpersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewpersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
