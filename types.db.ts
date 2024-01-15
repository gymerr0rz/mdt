export interface Vehicle {
  vehicle_model: string;
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
  vehicles: Vehicle[];
  apartment: Apartment;
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
