import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderSubServicesComponent } from './provider-sub-services.component';

describe('ProviderSubServicesComponent', () => {
  let component: ProviderSubServicesComponent;
  let fixture: ComponentFixture<ProviderSubServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderSubServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderSubServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
