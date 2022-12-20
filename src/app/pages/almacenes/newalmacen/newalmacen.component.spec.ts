import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewalmacenComponent } from './newalmacen.component';

describe('NewalmacenComponent', () => {
  let component: NewalmacenComponent;
  let fixture: ComponentFixture<NewalmacenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewalmacenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewalmacenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
