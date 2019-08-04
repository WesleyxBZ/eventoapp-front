import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CadastrarEventoComponent} from './cadastrar-evento.component';
import {SharedUtilsModule} from '../shared-utils/shared-utils.module';

@NgModule({
  declarations: [
    CadastrarEventoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedUtilsModule
  ]
})
export class CadastrarEventoModule {
}
