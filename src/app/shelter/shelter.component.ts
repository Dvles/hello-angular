import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ShelterLocationComponent } from '../shelter-location/shelter-location.component';
import { ShelterLocation } from '../shelter-location';
import { ContactMethod } from '../models/contact-method.enum';
import { ShelterService } from '../shelter.service';

@Component({
  selector: 'app-shelter',
  imports: [CommonModule, ShelterLocationComponent],
  template: `
    <section>      
    <form>       
         <input type="text" placeholder="Filter by region" />        
         <button class="primary" type="button"  (click)="filterResults(filter.value)">Search</button>     
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

  shelterLocationList: ShelterLocation[]=[];
  shelterService: ShelterService = inject(ShelterService);
  filteredLocationList: ShelterLocation[] = [];


  constructor(){
    this.shelterLocationList = this.shelterService.getAllShelterLocations();
  }
}
