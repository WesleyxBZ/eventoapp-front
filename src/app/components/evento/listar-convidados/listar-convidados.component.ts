import {Component, OnInit} from '@angular/core';
import {Convidado} from '../../../model/convidado';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {ConvidadoService} from '../../../service/convidado.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-listar-convidados',
  templateUrl: './listar-convidados.component.html',
  styleUrls: ['./listar-convidados.component.css']
})
export class ListarConvidadosComponent implements OnInit {

  convidados: Convidado[];
  faTrashAlt = faTrashAlt;

  constructor(private route: ActivatedRoute, private convidadoService: ConvidadoService) {
    this.convidados = [];
  }

  ngOnInit() {
    const idEvento: number = this.route.snapshot.params['id'];

    this.convidadoService.findConvidadosByEvento(idEvento).subscribe(convidados => {
      if (convidados) {
        this.convidados = convidados;
      }
    });

    ConvidadoService.emitirConvidadoSalvo.subscribe(
      convidado => this.convidados.push(convidado)
    );
  }

  deleteConvidado(id: number, i: number) {
    this.convidadoService.delete(id).subscribe(
      () => console.log('Convidado deletado')
    );
    this.convidados.splice(i, 1);
  }

}
