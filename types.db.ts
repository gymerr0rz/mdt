export interface Person {
  id: string;
  name: string;
  profile_url: string;
  phone_number: string;
  fingerprint: string;
  dna: string;
  summary: string;
  tags: string[];
  vehicles: Vehicle[];
  job: string;
  apartment: Apartment;
  criminal_history: any[];
  licences: any[];
  weapons: any[];
}

export interface Vehicle {
  vehicle_name: string;
  plate: string;
  warrant_active: boolean;
}

export interface Apartment {
  location: string;
  property_number: number;
}

export interface Criminal {
  convinction: number;
  history: CriminalHistory[];
}

export interface CriminalHistory {
  officer: string;
  crime_name: string;
}
