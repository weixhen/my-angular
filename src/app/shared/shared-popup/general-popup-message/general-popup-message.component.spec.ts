import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPopupMessageComponent } from './general-popup-message.component';

describe('GeneralPopupMessageComponent', () => {
  let component: GeneralPopupMessageComponent;
  let fixture: ComponentFixture<GeneralPopupMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralPopupMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPopupMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
