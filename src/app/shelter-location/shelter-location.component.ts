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
}
