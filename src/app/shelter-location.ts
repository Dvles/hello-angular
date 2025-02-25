import { ContactMethod } from "./models/contact-method.enum";

export interface ShelterLocation {
    id: number;
    name: string;
    region: string;
    telephone: string;
    contact_methods: ContactMethod; 
    photo: string;
    adress: string;
    wifi: boolean;
    laundry: boolean;
    breakfast: boolean;
  }