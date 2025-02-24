import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ShelterLocationComponent } from '../shelter-location/shelter-location.component';

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

}
