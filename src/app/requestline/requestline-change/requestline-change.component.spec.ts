import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestlineChangeComponent } from './requestline-change.component';

describe('RequestlineChangeComponent', () => {
  let component: RequestlineChangeComponent;
  let fixture: ComponentFixture<RequestlineChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestlineChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestlineChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
