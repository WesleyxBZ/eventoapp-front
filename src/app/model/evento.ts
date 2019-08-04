import {Time} from '@angular/common';

export class Evento {

  id: number;
  nome: string;
  local: string;
  data: Date;
  horario: Time;

  constructor() {
  }
}
