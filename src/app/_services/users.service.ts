import { User } from './../_model/users';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  // users: Users[] = [
  
  //   {
  //     _id: '5ff8c51fa4c6cf417005fd5e',
  //     userID: 'pclg_6759_7581',
  //     age: 33,
  //     name: {
  //       first: 'Elise',
  //       last: 'Mcdaniel',
  //     },
  //     userName: 'Mcdaniel33',
  //     email: 'mcdaniel33@hotmail.com',
  //     phone: '(890) 559-3337',
  //     img: 'http://placehold.it/32x32',
  //     address: [
  //       {
  //         postalCode: 99942,
  //         street: 'Alton Place',
  //         state: 'Mississippi',
  //         city: 'Cleary',
  //         country: 'Latvia',
  //         geoMap: {
  //           latitude: 42.89877,
  //           longitude: 177.65516,
  //         },
  //       },
  //     ],
  //     dateOfRegister: 'Friday, September 27, 2019 2:00 PM',
  //   },
  //   {
  //     _id: '5ff8c51fa4c6cf417005fd48',
  //     userID: 'wzpd_8443_8036',
  //     age: 19,
  //     name: {
  //       first: 'Tran',
  //       last: 'Patterson',
  //     },
  //     userName: 'Patterson19',
  //     email: 'patterson19@hotmail.com',
  //     phone: '(851) 455-3674',
  //     img: 'http://placehold.it/32x32',
  //     address: [
  //       {
  //         postalCode: 88327,
  //         street: 'Oriental Boulevard',
  //         state: 'Florida',
  //         city: 'Walton',
  //         country: 'Chad',
  //         geoMap: {
  //           latitude: 4.384027,
  //           longitude: -115.269477,
  //         },
  //       },
  //     ],
  //     dateOfRegister: 'Monday, September 28, 2020 3:36 PM',
  //   },
  //   {
  //     _id: '5ff8c51fa4c6cf417005fd62',
  //     userID: 'frql_5038_1285',
  //     age: 41,
  //     name: {
  //       first: 'Christa',
  //       last: 'Robbins',
  //     },
  //     userName: 'Robbins41',
  //     email: 'robbins41@gmail.com',
  //     phone: '(823) 528-3006',
  //     img: 'http://placehold.it/32x32',
  //     address: [
  //       {
  //         postalCode: 80183,
  //         street: 'Beadel Street',
  //         state: 'Maryland',
  //         city: 'Avoca',
  //         country: 'Central African Republic',
  //         geoMap: {
  //           latitude: -46.534354,
  //           longitude: 82.572566,
  //         },
  //       },
  //     ],
  //     dateOfRegister: 'Sunday, February 24, 2019 10:17 PM',
  //   },
  //   {
  //     _id: '5ff8c51fa4c6cf417005fd6a',
  //     userID: 'rvlv_7632_7252',
  //     age: 61,
  //     name: {
  //       first: 'Pollard',
  //       last: 'Gonzalez',
  //     },
  //     userName: 'Gonzalez61',
  //     email: 'gonzalez61@hotmail.com',
  //     phone: '(957) 493-2154',
  //     img: 'http://placehold.it/32x32',
  //     address: [
  //       {
  //         postalCode: 67879,
  //         street: 'Montague Street',
  //         state: 'Massachusetts',
  //         city: 'Westboro',
  //         country: 'Japan',
  //         geoMap: {
  //           latitude: 61.664923,
  //           longitude: 76.26505,
  //         },
  //       },
  //     ],
  //     dateOfRegister: 'Thursday, December 19, 2019 8:21 AM',
  //   },
  //   {
  //     _id: '5ff8c51fa4c6cf417005fd6f',
  //     userID: 'qrkd_7144_4017',
  //     age: 23,
  //     name: {
  //       first: 'Chambers',
  //       last: 'Stevens',
  //     },
  //     userName: 'Stevens23',
  //     email: 'stevens23@gmail.com',
  //     phone: '(908) 475-2079',
  //     img: 'http://placehold.it/32x32',
  //     address: [
  //       {
  //         postalCode: 49141,
  //         street: 'Plymouth Street',
  //         state: 'Idaho',
  //         city: 'Strong',
  //         country: 'Yugoslavia',
  //         geoMap: {
  //           latitude: 53.464224,
  //           longitude: -42.342339,
  //         },
  //       },
  //     ],
  //     dateOfRegister: 'Monday, February 11, 2019 6:22 PM',
  //   },
  //   {
  //     _id: '5ff8c51fa4c6cf417005fd79',
  //     userID: 't0oq_9403_5857',
  //     age: 65,
  //     name: {
  //       first: 'Sims',
  //       last: 'Rosa',
  //     },
  //     userName: 'Rosa65',
  //     email: 'rosa65@gmail.com',
  //     phone: '(976) 458-3661',
  //     img: 'http://placehold.it/32x32',
  //     address: [
  //       {
  //         postalCode: 35084,
  //         street: 'Hemlock Street',
  //         state: 'South Dakota',
  //         city: 'Jardine',
  //         country: 'Cambodia',
  //         geoMap: {
  //           latitude: 53.296185,
  //           longitude: -162.47567,
  //         },
  //       },
  //     ],
  //     dateOfRegister: 'Monday, April 23, 2018 6:42 AM',
  //   },
  //   {
  //     _id: '5ff8c51fa4c6cf417005fd4c',
  //     userID: '1ct7_4257_5212',
  //     age: 34,
  //     name: {
  //       first: 'Willa',
  //       last: 'White',
  //     },
  //     userName: 'White34',
  //     email: 'white34@gmail.com',
  //     phone: '(867) 448-2671',
  //     img: 'http://placehold.it/32x32',
  //     address: [
  //       {
  //         postalCode: 37454,
  //         street: 'Coffey Street',
  //         state: 'Montana',
  //         city: 'Madrid',
  //         country: 'Gibraltar',
  //         geoMap: {
  //           latitude: 42.844689,
  //           longitude: 40.610158,
  //         },
  //       },
  //     ],
  //     dateOfRegister: 'Friday, February 15, 2019 3:20 AM',
  //   },
  //   {
  //     _id: '5ff8c51fa4c6cf417005fd55',
  //     userID: 'do95_2103_2321',
  //     age: 57,
  //     name: {
  //       first: 'Gretchen',
  //       last: 'Sherman',
  //     },
  //     userName: 'Sherman57',
  //     email: 'sherman57@yahoo.com',
  //     phone: '(924) 456-2465',
  //     img: 'http://placehold.it/32x32',
  //     address: [
  //       {
  //         postalCode: 57959,
  //         street: 'Havemeyer Street',
  //         state: 'Marshall Islands',
  //         city: 'Harrison',
  //         country: 'Thailand',
  //         geoMap: {
  //           latitude: 7.144659,
  //           longitude: -146.021172,
  //         },
  //       },
  //     ],
  //     dateOfRegister: 'Saturday, October 26, 2019 6:35 PM',
  //   },
  //   {
  //     _id: '5ff8c51fa4c6cf417005fd57',
  //     userID: '0mwb_2217_1065',
  //     age: 40,
  //     name: {
  //       first: 'Margarita',
  //       last: 'Lowe',
  //     },
  //     userName: 'Lowe40',
  //     email: 'lowe40@yahoo.com',
  //     phone: '(883) 445-2436',
  //     img: 'http://placehold.it/32x32',
  //     address: [
  //       {
  //         postalCode: 63437,
  //         street: 'Elliott Walk',
  //         state: 'Puerto Rico',
  //         city: 'Winesburg',
  //         country: 'French Southern Territories',
  //         geoMap: {
  //           latitude: -70.456424,
  //           longitude: 72.969785,
  //         },
  //       },
  //     ],
  //     dateOfRegister: 'Sunday, November 19, 2017 6:06 PM',
  //   },
  //   {
  //     _id: '5ff8c51fa4c6cf417005fd5b',
  //     userID: '6ktk_6106_8858',
  //     age: 32,
  //     name: {
  //       first: 'Kitty',
  //       last: 'Trevino',
  //     },
  //     userName: 'Trevino32',
  //     email: 'trevino32@gmail.com',
  //     phone: '(980) 546-3951',
  //     img: 'http://placehold.it/32x32',
  //     address: [
  //       {
  //         postalCode: 66660,
  //         street: 'Wilson Street',
  //         state: 'Pennsylvania',
  //         city: 'Weedville',
  //         country: 'India',
  //         geoMap: {
  //           latitude: -9.61128,
  //           longitude: 18.490644,
  //         },
  //       },
  //     ],
  //     dateOfRegister: 'Wednesday, November 8, 2017 12:34 PM',
  //   },
  //   {
  //     _id: '5ff8c51fa4c6cf417005fd60',
  //     userID: 'b3er_3354_7970',
  //     age: 35,
  //     name: {
  //       first: 'Burt',
  //       last: 'Avila',
  //     },
  //     userName: 'Avila35',
  //     email: 'avila35@hotmail.com',
  //     phone: '(906) 526-2892',
  //     img: 'http://placehold.it/32x32',
  //     address: [
  //       {
  //         postalCode: 73478,
  //         street: 'Beaver Street',
  //         state: 'Texas',
  //         city: 'Maplewood',
  //         country: 'Hungary',
  //         geoMap: {
  //           latitude: 13.986479,
  //           longitude: 49.027143,
  //         },
  //       },
  //     ],
  //     dateOfRegister: 'Tuesday, March 31, 2020 3:56 AM',
  //   },
  //   {
  //     _id: '5ff8c51fa4c6cf417005fd7c',
  //     userID: '4o64_1880_8080',
  //     age: 50,
  //     name: {
  //       first: 'Mueller',
  //       last: 'Mcguire',
  //     },
  //     userName: 'Mcguire50',
  //     email: 'mcguire50@hotmail.com',
  //     phone: '(864) 449-3323',
  //     img: 'http://placehold.it/32x32',
  //     address: [
  //       {
  //         postalCode: 43048,
  //         street: 'Ebony Court',
  //         state: 'Iowa',
  //         city: 'Torboy',
  //         country: 'Liberia',
  //         geoMap: {
  //           latitude: -68.523248,
  //           longitude: -93.244229,
  //         },
  //       },
  //     ],
  //     dateOfRegister: 'Monday, April 1, 2019 1:17 AM',
  //   },
  //   {
  //     _id: '5ff8c51fa4c6cf417005fd4a',
  //     userID: 'px7j_3249_9471',
  //     age: 39,
  //     name: {
  //       first: 'Beasley',
  //       last: 'Beach',
  //     },
  //     userName: 'Beach39',
  //     email: 'beach39@yahoo.com',
  //     phone: '(996) 533-3788',
  //     img: 'http://placehold.it/32x32',
  //     address: [
  //       {
  //         postalCode: 54634,
  //         street: 'Kansas Place',
  //         state: 'Ohio',
  //         city: 'Hachita',
  //         country: 'Israel',
  //         geoMap: {
  //           latitude: -16.36793,
  //           longitude: -149.728456,
  //         },
  //       },
  //     ],
  //     dateOfRegister: 'Saturday, December 15, 2018 8:51 AM',
  //   },
  //   {
  //     _id: '5ff8c51fa4c6cf417005fd4f',
  //     userID: 'z2tj_9416_2583',
  //     age: 44,
  //     name: {
  //       first: 'Carrillo',
  //       last: 'Nicholson',
  //     },
  //     userName: 'Nicholson44',
  //     email: 'nicholson44@hotmail.com',
  //     phone: '(862) 479-3010',
  //     img: 'http://placehold.it/32x32',
  //     address: [
  //       {
  //         postalCode: 97046,
  //         street: 'Moffat Street',
  //         state: 'Oklahoma',
  //         city: 'Teasdale',
  //         country: 'Mali',
  //         geoMap: {
  //           latitude: 55.231232,
  //           longitude: -49.995738,
  //         },
  //       },
  //     ],
  //     dateOfRegister: 'Sunday, May 31, 2020 4:59 AM',
  //   },
  //   {
  //     _id: '5ff8c51fa4c6cf417005fd50',
  //     userID: 'bpvx_7490_9499',
  //     age: 53,
  //     name: {
  //       first: 'Mcfarland',
  //       last: 'Haynes',
  //     },
  //     userName: 'Haynes53',
  //     email: 'haynes53@gmail.com',
  //     phone: '(802) 459-3258',
  //     img: 'http://placehold.it/32x32',
  //     address: [
  //       {
  //         postalCode: 68746,
  //         street: 'Hinckley Place',
  //         state: 'Colorado',
  //         city: 'Stouchsburg',
  //         country: 'Swaziland',
  //         geoMap: {
  //           latitude: -36.48572,
  //           longitude: 170.49256,
  //         },
  //       },
  //     ],
  //     dateOfRegister: 'Monday, April 20, 2020 5:30 AM',
  //   },
  // ];
  
  constructor(private httpClient: HttpClient) { }
  baseUrl = 'http://localhost:3000/';

  getAllUsers(){
    return this.httpClient.get(`${this.baseUrl}users`);

  }

  getUserById(id: string){
    return this.httpClient.get(`${this.baseUrl}user/id/${id}`);

  }

  getUserByEmail(email: string){
    return this.httpClient.get(`${this.baseUrl}user/email/${email}`);

  }

  addUser(user: User) {
    const newUser = {
      userName: user.userName,
      email: user.email,
      password: user.password,
      repeatedPassword: user.repeatedPassword
    };

    this.httpClient.post(`${this.baseUrl}user/register`, newUser);


  }

  updateUser(user: User){

   const updatedUser = {
      _id: user._id,
      userName: user.userName,
      email: user.email,
      password: user.password,
      repeatedPassword: user.repeatedPassword,

    };
   this.httpClient.put(`${this.baseUrl}user`, updatedUser);
  }

  deleteUser(id: string) {
    this.httpClient.delete(`${this.baseUrl}user/${id}`);

  }
  signInWithGoogle(socialUser){
    console.log(socialUser);
    return this.httpClient.post(`${this.baseUrl}user/login/google`,socialUser)
  }
  signInWithFB(socialUser){
    console.log(socialUser);
    return this.httpClient.post(`${this.baseUrl}user/login/facebook`,socialUser)
  }
}
