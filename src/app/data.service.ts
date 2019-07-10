import { Injectable } from '@angular/core';
import { User } from './user'; 
import { USER_DATA } from './user-data';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private dbPath = 'user';
  userRef: AngularFireObject<User> = null;

  constructor(private db: AngularFireDatabase) {
    this.userRef = db.object(this.dbPath);
  }
 
  getUser22() {
    return USER_DATA;
  }

  getUser(): AngularFireObject<User> {
    return this.userRef;
  }

  createUser(user: User = USER_DATA): void  {
   this.userRef.set(user);
 }

  handleError(error: any): void {
    console.error(error);
  }
}