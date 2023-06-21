import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterClassPage } from './register-class.page';

describe('RegisterClassPage', () => {
  let component: RegisterClassPage;
  let fixture: ComponentFixture<RegisterClassPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegisterClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
