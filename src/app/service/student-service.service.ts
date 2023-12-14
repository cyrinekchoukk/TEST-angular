import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  StudentTable=[  
    {  
      "id": 1,  
      "name": "Jack",  
      "email": "jack@gmail.com",  
      "gender": "male"  
    },  
    {  
      "id": 2,  
      "name": "Peter",  
      "email": "peter@gmail.com",  
      "gender": "male"  
    },  
    {  
      "id": 3,  
      "name": "Mary",  
      "email": "mary@gmail.com",  
      "gender": "female"  
    },  
    {  
      "id": 4,  
      "name": "Smith",  
      "email": "smith@gmail.com",  
      "gender": "male"  
    },  
    {  
      "id": 5,  
      "name": "John",  
      "email": "john@gmail.com",  
      "gender": "male"  
    }  
  ]

  constructor() { }
}
