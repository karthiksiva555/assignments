import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesShowComponent } from './pipes-show.component';

describe('PipesShowComponent', () => {
  let component: PipesShowComponent;
  let fixture: ComponentFixture<PipesShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
