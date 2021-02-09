import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPopupConfirmComponent } from './general-popup-confirm.component';

describe('GeneralPopupConfirmComponent', () => {
  let component: GeneralPopupConfirmComponent;
  let fixture: ComponentFixture<GeneralPopupConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralPopupConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPopupConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
