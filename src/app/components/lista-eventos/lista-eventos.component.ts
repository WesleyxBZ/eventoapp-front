import {Component, OnInit} from '@angular/core';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {Evento} from '../../model/evento';
import {EventoService} from '../../service/evento.service';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.css']
})
export class ListaEventosComponent implements OnInit {

  faTrashAlt = faTrashAlt;

  eventos: Evento[];

  constructor(private eventoService: EventoService) {
    this.eventos = [];
  }

  ngOnInit() {
    this.eventoService.findAll().subscribe(eventos => {
      if (eventos) {
        this.eventos = eventos;
      }
    });
  }

  delete(id: number, i: number) {
    this.eventoService.delete(id).subscribe(
      () => console.log('Evento deletado')
    );
    this.eventos.splice(i, 1);
  }

}
