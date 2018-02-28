import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TestService {

  private api_url = environment.API_URL;

  constructor(private http: HttpClient) { }

  getGreeting() {
    return this.http.get(this.api_url + '/greeting');
  }

}
