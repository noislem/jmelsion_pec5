import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Jugador } from '../models/jugador.interface';

@Injectable({
  providedIn: 'root'
})
export class GoleadoresService {

  constructor(private http:HttpClient) { }

  getGoleadores(): Observable<Jugador[]> {
    const options = {
      headers: new HttpHeaders().append('X-Auth-Token', '9de27a16c41e4e76b509519fdeb890be')
    }
    return this.http.get<Jugador[]>('https://api.football-data.org/v2/competitions/SA/scorers',
      { headers: new HttpHeaders().set("X-Auth-Token", "9de27a16c41e4e76b509519fdeb890be")});
  }

  getJugadorById(id: String): Observable<Jugador> {
    const options = {
      headers: new HttpHeaders().append('X-Auth-Token', '9de27a16c41e4e76b509519fdeb890be')
    }
    return this.http.get<Jugador>('https://api.football-data.org/v2/players/' + id,
    { headers: new HttpHeaders().set("X-Auth-Token", "9de27a16c41e4e76b509519fdeb890be")});
  }
}