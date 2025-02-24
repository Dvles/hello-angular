import { Component } from '@angular/core';

@Component({
  selector: 'app-shelter',
  imports: [],
  template: `
    <section>      <form>        <input type="text" placeholder="Filter by region" />        <button class="primary" type="button">Search</button>      </form>    </section>
  `,
    styleUrls: ['./shelter.component.css'],
})
export class ShelterComponent {

}
