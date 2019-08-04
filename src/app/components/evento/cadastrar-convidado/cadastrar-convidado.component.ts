import {Component, OnInit} from '@angular/core';
import {ConvidadoService} from '../../../service/convidado.service';
import {Convidado} from '../../../model/convidado';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Evento} from '../../../model/evento';

@Component({
  selector: 'app-cadastrar-convidado',
  templateUrl: './cadastrar-convidado.component.html',
  styleUrls: ['./cadastrar-convidado.component.css']
})
export class CadastrarConvidadoComponent implements OnInit {

  convidado: Convidado;
  evento: Evento;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private convidadoService: ConvidadoService, private formBuilder: FormBuilder) {
    this.convidado = new Convidado();
    this.evento = new Evento();
    this.convidado.evento = this.evento;
  }

  ngOnInit() {
    this.evento.id = this.route.snapshot.params['id'];

    this.form = this.formBuilder.group({
      nome: this.formBuilder.control(this.convidado.nome,
        [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      rg: this.formBuilder.control(this.convidado.rg,
        [Validators.required, Validators.minLength(5), Validators.maxLength(12)]),
      evento: this.formBuilder.group({
        id: this.evento.id
      })
    });
  }

  verifyValidTouched(inputName: string) {
    return !this.form.get(inputName).valid && (!this.form.get(inputName).untouched && this.form.get(inputName).dirty);
  }

  // Faz a verificação de todos os campos do formulário
  verifyValidForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(input => {
      const control = formGroup.get(input);
      control.markAsDirty();
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.verifyValidForm(control);
      }
    });
  }

  save() {
    if (this.form.valid) {
      this.convidadoService.createOrUpdate(this.convidado).subscribe(result => {
        if (this.convidado) {
          console.log('Convidado cadastrado com sucesso');
          this.form.reset();
        } else {
          console.log('Convidado não cadastrado');
        }
      });
    } else {
      this.verifyValidForm(this.form);
    }
  }

}
