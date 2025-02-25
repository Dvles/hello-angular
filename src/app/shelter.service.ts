import { Injectable } from '@angular/core';
import { ShelterLocation } from './shelter-location';
import { ContactMethod } from './models/contact-method.enum';

@Injectable({
  providedIn: 'root'
})
export class ShelterService {

    protected shelterLocationList: ShelterLocation[] = 
    [
      {
        id: 1,
        name: "Centre d'Accueil Saint-Pierre",
        region: "Brussels-City",
        telephone: "02/219.36.50",
        contact_methods: [ContactMethod.Email, ContactMethod.Phone],
        photo: "https://centredaccueil.fr/wp-content/uploads/2018/12/saintpierre.jpg",
        adress: "Rue de la Providence, 16 — 1210 BRUXELLES",
        wifi: true,
        laundry: true,
        breakfast: true
      },
      {
        id: 2,
        name: "Le Samusocial",
        region: "Brussels-City",
        telephone: "02/512.34.55",
        contact_methods: [ContactMethod.Phone, ContactMethod.InPerson],
        photo: "https://samusocial.be/wp-content/uploads/2019/02/DSC_3426-HeaderMODO-640x320.png",
        adress: "Rue des Quatre Vents, 7 — 1000 BRUXELLES",
        wifi: true,
        laundry: true,
        breakfast: true
      },
      {
        id: 3,
        name: "Centre d'Accueil d'Urgence ARIANE",
        region: "Forest",
        telephone: "02/346.66.60",
        contact_methods: [ContactMethod.Email, ContactMethod.Phone],
        photo: "https://maisondariane.ca/wp-content/uploads/2023/05/Design-sans-titre-3.png",
        adress: "Avenue du Pont de Luttre, 132 — 1190 FOREST",
        wifi: true,
        laundry: false,
        breakfast: false
      },
      {
        id: 4,
        name: "La Maison de l'Accueil",
        region: "Molenbeek",
        telephone: "02/420.23.89",
        contact_methods: [ContactMethod.Email, ContactMethod.InPerson],
        photo: "https://monument.heritage.brussels/medias/500/buildings/10801259/10801259_0062_P01.jpg",
        adress: "Avenue de la Libération, 56 — 1080 MOLEENBEEK",
        wifi: false,
        laundry: false,
        breakfast: true
      },
      {
        id: 5,
        name: "Refuge Solidarité",
        region: "Saint-Josse",
        telephone: "02/219.65.47",
        contact_methods: [ContactMethod.Phone, ContactMethod.Email],
        photo: "https://sjtn.brussels/sites/default/files/styles/l480_h320/public/news/maison-accueil-sociale.jpg?itok=a3uyPhCf",
        adress: "Rue de l'Alliance, 23 — 1210 SAINT-JOSSE",
        wifi: true,
        laundry: true,
        breakfast: false
      }
    ]

  

  getAllHousingLocations(): ShelterLocation[] {
    return this.shelterLocationList;
  }
  getHousingLocationById(id: number): ShelterLocation | undefined {
    return this.shelterLocationList.find((shelterLocation) => shelterLocation.id === id);
  }
}