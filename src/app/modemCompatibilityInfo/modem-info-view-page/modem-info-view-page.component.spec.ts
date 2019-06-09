import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModemInfoViewPageComponent } from './modem-info-view-page.component';

describe('ModemInfoViewPageComponent', () => {
  let component: ModemInfoViewPageComponent;
  let fixture: ComponentFixture<ModemInfoViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModemInfoViewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModemInfoViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
