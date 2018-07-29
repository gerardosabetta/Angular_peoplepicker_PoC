import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from '../interfaces/user';
import { Observable } from '../../../node_modules/rxjs';
@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  constructor(private http: HttpClient) { }

  public searchUser(user): Observable<User[]> {
    return this.http.get<User[]>(`http://127.0.0.1:3001/users?searchText=${user}`);
  }
}
