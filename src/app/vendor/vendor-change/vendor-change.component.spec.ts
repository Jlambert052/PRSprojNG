import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorChangeComponent } from './vendor-change.component';

describe('VendorChangeComponent', () => {
  let component: VendorChangeComponent;
  let fixture: ComponentFixture<VendorChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
