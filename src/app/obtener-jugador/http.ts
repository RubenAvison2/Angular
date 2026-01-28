import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class http {
  private apiUrl = 'https://api.football-data.org/v4';
  private apiKey = 'cf48b4785ac0402b9f111e4b43761310'; 
  constructor(private http: HttpClient) {}

  getJugador(id:number): Observable<any> {
    const headers = new HttpHeaders({
      'X-Auth-Token': this.apiKey,
      'X-Unfold-Goals': 'true' 
    });
    return this.http.get(`/api-futbol/v4/persons/${id}`, { headers });
  }
}