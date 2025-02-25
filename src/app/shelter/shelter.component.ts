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
    <section class="results">      <app-shelter-location></app-shelter-location>    </section>
  `,
    styleUrls: ['./shelter.component.css'],
})
export class ShelterComponent {

  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  shelterLocation: ShelterLocation = {

    id: 999,
    name: "CENTRE D'ACCUEIL D'URGENCE ARIANE",
    region: "Forest",
    telephone: "02/346.66.60",
    contact_methods: [ContactMethod.Email, ContactMethod.Phone],
    photo: "https://www.ama.be/wp-content/uploads/2017/10/centre-accueil-urgence-ariane.jpg",
    adress: "Avenue du Pont de Luttre, 132 — 1190 FOREST",
    wifi: true,
    laundry: false,
    breakfast: false

  }

}
