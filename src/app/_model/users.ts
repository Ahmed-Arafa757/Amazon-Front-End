import { Address } from './address';

export interface Users {
  _id: string;
  userID: string;
  userName: string;
  email: string;
  name: { first: string; last: string };
  age: number;
  phone: string;
  img: string;
  dateOfRegister: string;
  address: Address[];
}
