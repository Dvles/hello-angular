import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { ShelterService} from '../shelter.service';
import { ShelterLocation } from '../shelter-location';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img
        class="listing-photo"
        [src]="shelterLocation?.photo"
        alt="shelterLocation?.name"
      />
      
      <section class="listing-description">
        <h2 class="listing-heading">{{ shelterLocation?.name }}</h2>
        <p class="listing-location">{{ shelterLocation?.adress }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this shelter location</h2>
        <ul>
          <li>Contact methods: {{ shelterLocation?.contact_methods }}</li>
          <li>Does this location have wifi: {{ shelterLocation?.wifi }}</li>
          <li>Does this location have laundry: {{ shelterLocation?.laundry }}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Apply now to volonteer here </h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName" />
          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName" />
          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email" />
          <button type="submit" class="primary">Apply now</button>
        </form>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  shelterService = inject(ShelterService);
  shelterLocation: ShelterLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });


  constructor() {
    const shelterLocationId = parseInt(this.route.snapshot.params['id'], 10);    
    this.shelterService.getShelterLocationById(shelterLocationId).then((shelterLocation) => {      
      this.shelterLocation = shelterLocation;  
    });
  }

  submitApplication() {
    this.shelterService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }

}


