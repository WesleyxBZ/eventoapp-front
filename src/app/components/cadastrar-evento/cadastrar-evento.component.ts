import {Component, OnInit} from '@angular/core';
import {Evento} from '../../model/evento';
import {EventoService} from '../../service/evento.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-cadastrar-evento',
  templateUrl: './cadastrar-evento.component.html',
  styleUrls: ['./cadastrar-evento.component.css']
})
export class CadastrarEventoComponent implements OnInit {

  evento: Evento;
  form: FormGroup;

  constructor(private eventoService: EventoService, private formBuilder: FormBuilder, private toastrService: ToastrService) {
    this.evento = new Evento();
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: this.formBuilder.control(this.evento.nome,
        [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
      local: this.formBuilder.control(this.evento.local,
        [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
      data: this.formBuilder.control(this.evento.data, [Validators.required, this.dateValidate]),
      horario: this.formBuilder.control(this.evento.horario, [Validators.required]),
    });
  }

  // Valida se data do evento não é passada
  dateValidate(control: FormControl) {
    // tslint:disable-next-line:one-variable-per-declaration
    const df = control.value || '', errorMessage = `data não pode ser data passada`;
    const dn = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
    return dn > df ? {invalidName: errorMessage} : null;
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
      this.eventoService.createOrUpdate(this.evento).subscribe(result => {
        if (result) {
          this.toastrService.success('Evento cadastrado!', 'Sucesso');
          this.form.reset();
        } else {
          this.toastrService.error('Evento não cadastrado!', 'Erro');
        }
      });
    } else {
      this.toastrService.error('Verifique os dados do formulário!', 'Dados inválidos');
      this.verifyValidForm(this.form);
    }
  }

}
