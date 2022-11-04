import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductChangeComponent } from './product-change.component';

describe('ProductChangeComponent', () => {
  let component: ProductChangeComponent;
  let fixture: ComponentFixture<ProductChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
