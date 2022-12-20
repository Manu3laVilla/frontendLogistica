import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewvehiculomaritimoComponent } from './newvehiculomaritimo.component';

describe('NewvehiculomaritimoComponent', () => {
  let component: NewvehiculomaritimoComponent;
  let fixture: ComponentFixture<NewvehiculomaritimoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewvehiculomaritimoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewvehiculomaritimoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
