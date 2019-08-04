import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CadastrarConvidadoComponent} from './cadastrar-convidado/cadastrar-convidado.component';
import {EventoComponent} from './evento/evento.component';
import {ListarConvidadosComponent} from './listar-convidados/listar-convidados.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedUtilsModule} from '../shared-utils/shared-utils.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    CadastrarConvidadoComponent,
    EventoComponent,
    ListarConvidadosComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    SharedUtilsModule
  ]
})
export class EventoModule { }
