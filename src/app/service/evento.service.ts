import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EVENTOAPP_API} from './abstract.service';
import {Evento} from '../model/evento';
import {Observable} from 'rxjs';

@Injectable()
export class EventoService {

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${EVENTOAPP_API}/evento`);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${EVENTOAPP_API}/evento/${id}`);
  }

  findById(id: number): Observable<Evento> {
    return this.http.get<Evento>(`${EVENTOAPP_API}/evento/${id}`);
  }

  createOrUpdate(evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(`${EVENTOAPP_API}/evento`, evento);
  }

}
