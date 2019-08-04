import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarConvidadoComponent } from './cadastrar-convidado.component';

describe('CadastrarConvidadoComponent', () => {
  let component: CadastrarConvidadoComponent;
  let fixture: ComponentFixture<CadastrarConvidadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarConvidadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarConvidadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
