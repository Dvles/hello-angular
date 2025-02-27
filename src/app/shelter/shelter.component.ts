import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShelterLocationComponent } from '../shelter-location/shelter-location.component';
import { ShelterLocation } from '../shelter-location';
import { ShelterService } from '../shelter.service';

@Component({
  selector: 'app-shelter',
  imports: [CommonModule, ShelterLocationComponent],
  template: `
    <section>
      <form>
        <input #filter type="text" placeholder="Filter by region" />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <!-- Only show results once data is available -->
      <app-shelter-location
        *ngFor="let shelterLocation of filteredLocationList"
        [shelterLocation]="shelterLocation">
      </app-shelter-location>
    </section>
  `,
  styleUrls: ['./shelter.component.css'],
})
export class ShelterComponent {
  shelterLocationList: ShelterLocation[] = [];
  shelterService: ShelterService = inject(ShelterService);
  filteredLocationList: ShelterLocation[] = [];
  isLoading = true;  // For loading check

  constructor() {
    this.shelterService.getAllShelterLocations().then((shelterLocationList: ShelterLocation[]) => {
      this.shelterLocationList = shelterLocationList;
      this.filteredLocationList = shelterLocationList;
      this.isLoading = false;  // Set loading to false after data is loaded
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.shelterLocationList;
      return;
    }
    this.filteredLocationList = this.shelterLocationList.filter((shelterLocation) =>
      shelterLocation?.region.toLowerCase().includes(text.toLowerCase())
    );
  }
}
