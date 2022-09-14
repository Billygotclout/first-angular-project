import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDataTableComponent } from './post-data-table.component';

describe('PostDataTableComponent', () => {
  let component: PostDataTableComponent;
  let fixture: ComponentFixture<PostDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDataTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
