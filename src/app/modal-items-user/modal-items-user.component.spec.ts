import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalItemsUserComponent } from './modal-items-user.component';

describe('ModalItemsUserComponent', () => {
  let component: ModalItemsUserComponent;
  let fixture: ComponentFixture<ModalItemsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalItemsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalItemsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
