import {Component} from '@angular/core';
import {ShelterComponent} from './shelter/shelter.component';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ShelterComponent, RouterModule],
  template: `
        <main>      
          <header class="brand-name">        
            <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" style="height:50px; width:auto;" />     
          </header>
          <section class="content">          
            <!-- <app-shelter></app-shelter>  -->
          <router-outlet></router-outlet>    
          </section>    
        </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shelters';
}
