// shelter.service.ts
import { Injectable } from '@angular/core';
import { ShelterLocation } from './shelter-location';

@Injectable({
  providedIn: 'root'
})
export class ShelterService {

  private url = 'http://localhost:3000/locations';

  async getAllShelterLocations(): Promise<ShelterLocation[]> {
    const response = await fetch(this.url);
    const data = await response.json();
    return data ?? [];
  }

  async getShelterLocationById(id: number): Promise<ShelterLocation | undefined> {
    const response = await fetch(`${this.url}/${id}`);
    if (response.ok) {
      const data = await response.json();
      return data ?? undefined;
    }
    return undefined;
  }

  submitApplication(firstName: string, lastName: string, email: string) {    // tslint:disable-next-line   
    console.log(firstName, lastName, email);  }
}




