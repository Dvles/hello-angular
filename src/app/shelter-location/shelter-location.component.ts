import {Component, Input} from '@angular/core';
import { ShelterLocation } from '../shelter-location';

@Component({
  selector: 'app-shelter-location',
  imports: [],
  template: `
  <section class="listing">
        <img
          class="listing-photo"
          [src]="shelterLocation.photo"
          alt="Exterior photo of {{ shelterLocation.name }}"
          crossorigin
        />
        <h2 class="listing-heading">{{ shelterLocation.name }}</h2>
        <p class="listing-location">{{ shelterLocation.region }}, {{ shelterLocation.telephone }}</p>
  </section>
    `,
  styleUrls: ['./shelter-location.component.css'],
})
export class ShelterLocationComponent {
  @Input() shelterLocation! : ShelterLocation;

  // The exclamation point is called the non-null assertion operator and it tells the TypeScript compiler that the value of this property won't be null or undefined.
}

