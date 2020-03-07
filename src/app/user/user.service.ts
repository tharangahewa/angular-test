import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = { username: 'Tharanga' };

  constructor() {
  }

  getUserData(): Promise<string> {
    return new Promise<string>(((resolve, reject) => {
      setTimeout(() => resolve('data'), 2000);
    }));
  }
}
