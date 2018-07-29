import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../interfaces/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {
  readonly URL = 'http://localhost:3001'
  constructor(private http: HttpClient) { }

  public searchUser(user: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.URL}/users?searchText=${user}`);
  }
}
