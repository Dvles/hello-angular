import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ShelterLocationComponent } from '../shelter-location/shelter-location.component';
import { ShelterLocation } from '../shelter-location';
import { ContactMethod } from '../models/contact-method.enum';

@Component({
  selector: 'app-shelter',
  imports: [CommonModule, ShelterLocationComponent],
  template: `
    <section>      
      <form>       
         <input type="text" placeholder="Filter by region" />        
         <button class="primary" type="button">Search</button>      
      </form>    
    </section>
    <section class="results">      
      <app-shelter-location 
      
      *ngFor="let shelterLocation of shelterLocationList" [shelterLocation]="shelterLocation"></app-shelter-location>    
    </section>
  `,
    styleUrls: ['./shelter.component.css'],
})
export class ShelterComponent {

/*   readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  photo: `${this.baseUrl}/example-house.jpg`, */

  shelterLocationList: ShelterLocation[] = 
  [
    {
      id: 1,
      name: "Centre d'Accueil Saint-Pierre",
      region: "Brussels-City",
      telephone: "02/219.36.50",
      contact_methods: [ContactMethod.Email, ContactMethod.Phone],
      photo: "https://www.example.com/centre-accueil-saint-pierre.jpg",
      address: "Rue de la Providence, 16 — 1210 BRUXELLES",
      wifi: true,
      laundry: true,
      breakfast: true
    },
    {
      id: 2,
      name: "Le Samusocial",
      region: "Brussels-City",
      telephone: "02/512.34.55",
      contact_methods: [ContactMethod.Phone, ContactMethod.InPerson],
      photo: "https://www.example.com/samusocial.jpg",
      address: "Rue des Quatre Vents, 7 — 1000 BRUXELLES",
      wifi: true,
      laundry: true,
      breakfast: true
    },
    {
      id: 3,
      name: "Centre d'Accueil d'Urgence ARIANE",
      region: "Forest",
      telephone: "02/346.66.60",
      contact_methods: [ContactMethod.Email, ContactMethod.Phone],
      photo: "https://www.ama.be/wp-content/uploads/2017/10/centre-accueil-urgence-ariane.jpg",
      address: "Avenue du Pont de Luttre, 132 — 1190 FOREST",
      wifi: true,
      laundry: false,
      breakfast: false
    },
    {
      id: 4,
      name: "La Maison de l'Accueil",
      region: "Molenbeek",
      telephone: "02/420.23.89",
      contact_methods: [ContactMethod.Email, ContactMethod.InPerson],
      photo: "https://www.example.com/maison-de-l-accueil.jpg",
      address: "Avenue de la Libération, 56 — 1080 MOLEENBEEK",
      wifi: false,
      laundry: false,
      breakfast: true
    },
    {
      id: 5,
      name: "Refuge Solidarité",
      region: "Saint-Josse",
      telephone: "02/219.65.47",
      contact_methods: [ContactMethod.Phone, ContactMethod.Email],
      photo: "https://www.example.com/refuge-solidarite.jpg",
      address: "Rue de l'Alliance, 23 — 1210 SAINT-JOSSE",
      wifi: true,
      laundry: true,
      breakfast: false
    }
  ]
  
  
  

}
