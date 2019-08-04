import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Convidado} from '../model/convidado';
import {EVENTOAPP_API} from './abstract.service';

@Injectable()
export class ConvidadoService {

  static emitirConvidadoSalvo = new EventEmitter();

  constructor(private http: HttpClient) {
  }

  findConvidadosByEvento(id: number): Observable<Convidado[]> {
    return this.http.get<Convidado[]>(`${EVENTOAPP_API}/convidado/findConvidadosByEvento/${id}`);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${EVENTOAPP_API}/convidado/${id}`);
  }

  createOrUpdate(convidado: Convidado): Observable<Convidado> {
    ConvidadoService.emitirConvidadoSalvo.emit(convidado);
    return this.http.post<Convidado>(`${EVENTOAPP_API}/convidado`, convidado);
  }

}
