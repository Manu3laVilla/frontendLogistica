import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpedidoComponent } from './newpedido.component';

describe('NewpedidoComponent', () => {
  let component: NewpedidoComponent;
  let fixture: ComponentFixture<NewpedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewpedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
