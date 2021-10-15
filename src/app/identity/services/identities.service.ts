import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface DidJwk {
  date: Date;
  did: string;
  jsonWebKey: { kid: string; publicKey?: string };
}
export interface ListIdentitiesResponse {
  didJwk: DidJwk[];
  xcorrelationId: string;
}

@Injectable({
  providedIn: 'root',
})
export class IdentitiesService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${environment.apiUrl}/ms-identity`;
  }

  getIdentities(userId: string) {
    //TODO usar userId del contexto
    const headers = new HttpHeaders().set('user-id', '1234567890');
    return this.http.get<ListIdentitiesResponse>(`${this.baseUrl}/identity`, { headers });
  }
}