import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEventosComponent } from './lista-eventos.component';

describe('ListaEventosComponent', () => {
  let component: ListaEventosComponent;
  let fixture: ComponentFixture<ListaEventosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEventosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
