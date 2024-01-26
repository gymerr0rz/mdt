export interface OwnedVehicles {
  vehicle_model: string;
  vehicle_plate: string;
  bolo: boolean;
}

export interface License {
  name: string;
  state: boolean;
}

export interface Apartment {
  location: string;
  property_number: number;
}

export interface CriminalHistory {
  title: string;
  incident_id: number;
}

export interface Tag {
  tag_name: string;
}

export interface Weapon {
  weapon_model: string;
  weapon_id: number;
}

export interface Person {
  id: string;
  name: string;
  profile_url: string;
  warrant: boolean;
  phone_number: string;
  fingerprint: string;
  dna: string;
  summary: string;
  job: string;
  tags: Tag[];
  vehicles: OwnedVehicles[];
  apartment: Apartment[];
  criminal_history: CriminalHistory[];
  licences: License[];
  weapons: Weapon[];
}

export interface Incident {
  incident_name: string;
  incident_id: number;
  incident_summary: string;
  evidence: { image_url: string };
}

export interface Vehicle {
  vehicle_plate: string;
  vehicle_owner: {
    owner_name: string;
    owner_warrant: boolean;
  };
  vehicle_image_url: string;
  vehicle_bolo: boolean;
  vehicle_points: number;
  vehicle_class: string;
  vehicle_model: string;
}

export interface Charges {
  title: string;
  severity: 'misdemenaor' | 'felony' | 'infraction';
  points: number;
  time: number;
  fine: number;
  description: string;
}

export interface SelectProps {
  value: string;
  label: string;
  fine?: number;
}
