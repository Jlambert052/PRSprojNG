import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestlineListComponent } from './requestline-list.component';

describe('RequestlineListComponent', () => {
  let component: RequestlineListComponent;
  let fixture: ComponentFixture<RequestlineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestlineListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestlineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
