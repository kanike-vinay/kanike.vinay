import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModemInfoAddPageComponent } from './modem-info-add-page.component';

describe('ModemInfoAddPageComponent', () => {
  let component: ModemInfoAddPageComponent;
  let fixture: ComponentFixture<ModemInfoAddPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModemInfoAddPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModemInfoAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
