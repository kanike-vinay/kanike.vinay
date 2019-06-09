import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModemCompatibilityInfoHomePageComponent } from './modem-compatibility-info-home-page.component';

describe('ModemCompatibilityInfoHomePageComponent', () => {
  let component: ModemCompatibilityInfoHomePageComponent;
  let fixture: ComponentFixture<ModemCompatibilityInfoHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModemCompatibilityInfoHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModemCompatibilityInfoHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
