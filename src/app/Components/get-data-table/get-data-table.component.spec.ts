import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDataTableComponent } from './get-data-table.component';

describe('GetDataTableComponent', () => {
  let component: GetDataTableComponent;
  let fixture: ComponentFixture<GetDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDataTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
