import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/shared-utils/header/header.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import {ListaEventosComponent} from './components/lista-eventos/lista-eventos.component';
import {EventoService} from './service/evento.service';
import {RouterModule} from '@angular/router';
import {AppRoutes} from '../app.routes';
import {ConvidadoService} from './service/convidado.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedUtilsModule} from './components/shared-utils/shared-utils.module';
import {CadastrarEventoModule} from './components/cadastrar-evento/cadastrar-evento.module';
import {EventoModule} from './components/evento/evento.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaEventosComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    FormsModule,
    ReactiveFormsModule,
    SharedUtilsModule,
    CadastrarEventoModule,
    EventoModule
  ],
  providers: [
    EventoService,
    ConvidadoService
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
