import { Address } from './address';

export interface User {
  _id?: string;
  userID?: string;
  userName?: string;
  email: string;
  name?: { first: string; last: string };
  age?: number;
  phone?: string;
  img?: string;
  dateOfRegister?: string;
  address?: Address[];
  password: string;
  repeatedPassword?: string;
  provider?: String;
}
