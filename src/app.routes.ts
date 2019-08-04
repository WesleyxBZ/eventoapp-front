import {Routes} from '@angular/router';
import {ListaEventosComponent} from './app/components/lista-eventos/lista-eventos.component';
import {EventoComponent} from './app/components/evento/evento/evento.component';
import {CadastrarEventoComponent} from './app/components/cadastrar-evento/cadastrar-evento.component';

export const AppRoutes: Routes = [
  {path: '', component: ListaEventosComponent},
  {path: 'evento/:id', component: EventoComponent},
  {path: 'cadastar-evento', component: CadastrarEventoComponent}
];
