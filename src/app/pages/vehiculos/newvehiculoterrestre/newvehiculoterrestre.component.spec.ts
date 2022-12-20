import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewvehiculoterrestreComponent } from './newvehiculoterrestre.component';

describe('NewvehiculoterrestreComponent', () => {
  let component: NewvehiculoterrestreComponent;
  let fixture: ComponentFixture<NewvehiculoterrestreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewvehiculoterrestreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewvehiculoterrestreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
