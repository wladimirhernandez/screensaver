import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreensaverPage } from './screensaver.page';

describe('ScreensaverPage', () => {
  let component: ScreensaverPage;
  let fixture: ComponentFixture<ScreensaverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreensaverPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreensaverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
