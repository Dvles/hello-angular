import {Routes} from '@angular/router';
import { ShelterComponent } from './shelter/shelter.component';
import {DetailsComponent} from './details/details.component';
const routeConfig: Routes = [
  {
    path: '',
    component: ShelterComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
];
export default routeConfig;