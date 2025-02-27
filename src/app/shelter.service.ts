import { Injectable } from '@angular/core';
import { ShelterLocation } from './shelter-location';
//import { ContactMethod } from './models/contact-method.enum';

@Injectable({
  providedIn: 'root'
})
export class ShelterService {

    url = 'http://localhost:3000/locations';

    async getAllShelterLocations(): Promise<ShelterLocation[]> {    
      const data = await fetch(this.url);    
      return (await data.json()) ?? [];  
    }  
    
    async getShelterLocationById(id: number): Promise<ShelterLocation | undefined> {    
      const data = await fetch(`${this.url}/${id}`);    
      return (await data.json()) ?? {}; 
    }  
    
    submitApplication(firstName: string, lastName: string, email: string) {    // tslint:disable-next-line   
    console.log(firstName, lastName, email);  }


}