import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface User {
  id: string;
  name: string;
  role: string;
  pokemon: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[] = [
    { id: '1', name: 'Jane', role: 'Designer', pokemon: 'Blastoise' },
    { id: '2', name: 'Bob', role: 'Developer', pokemon: 'Charizard' }
  ];

  all(): Observable<User[]> {
    return of(this.users); // ✅ returns full user array
  }

  findOne(id: string): Observable<User | undefined> {
    const user = this.users.find((u: User) => u.id === id); // ✅ safe match
    return of(user); // ✅ wrapped in Observable
  }
}
