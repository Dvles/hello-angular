import {Component, Input} from '@angular/core';
import { ShelterLocation } from '../shelter-location';

@Component({
  selector: 'app-shelter-location',
  imports: [],
  template: `
    <p>
      shelter-location works!
    </p>
  `,
  styles: ``
})
export class ShelterLocationComponent {
  @Input() shelterLocation! : ShelterLocation;

  // The exclamation point is called the non-null assertion operator and it tells the TypeScript compiler that the value of this property won't be null or undefined.
}
