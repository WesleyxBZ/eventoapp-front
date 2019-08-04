import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Evento} from '../../../model/evento';
import {EventoService} from '../../../service/evento.service';
import {ConvidadoService} from '../../../service/convidado.service';
import {Convidado} from '../../../model/convidado';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {

  evento: Evento;

  constructor(private route: ActivatedRoute, private eventoService: EventoService) {
    this.evento = new Evento();
  }

  ngOnInit() {
    const idEvento: number = this.route.snapshot.params['id'];

    this.eventoService.findById(idEvento).subscribe(evento => {
      if (evento) {
        this.evento = evento;
      }
    });
  }

}
