import { EventEmitter, Injectable } from '@angular/core';
import { Person } from '../_model/person';


@Injectable({
  providedIn: 'root',
})
export class PersonService {
 persons: Person[] = [
   {
     id: '5ff77821ee85d929b7aa01b0',
     name: 'Arafa',
     email: 'arafa@test.com',
     password: 'ahmedarafa',
     repeatedPassword: 'ahmedarafa'
   },
   {
     id: '5ff8c4ac73f4d75244531911',
     name: 'Mohammed',
     email: 'mohammed@test.com',
     password: 'H5xqvscG0Hs7pOH',
     repeatedPassword: 'H5xqvscG0Hs7pOH'
   },
   {
     id: '5ff77821ee85d929b7aa01c0',
     name: 'Mahmoud',
     email: 'mahmoud@test.com',
     password: 'XqHy0CfAkMwk4nb',
     repeatedPassword: 'XqHy0CfAkMwk4nb'
   }
 ];

  
  constructor() { }

  getPersonByEmail(email): Person {

    return this.persons.find(p => p.email === email);

  }

  getPersonById(id): Person {

    return this.persons.find(p => p.id === id); 

  }

}



