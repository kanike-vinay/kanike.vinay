import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModemInfoUpdatePageComponent } from './modem-info-update-page.component';

describe('ModemInfoUpdatePageComponent', () => {
  let component: ModemInfoUpdatePageComponent;
  let fixture: ComponentFixture<ModemInfoUpdatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModemInfoUpdatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModemInfoUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
