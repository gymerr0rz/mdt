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
  businesses: any[];
  properties: any[];
  criminal_history: any[];
  licences: any[];
  weapons: any[];
}

export interface Vehicle {
  vehicle_name: string;
  plate: string;
  warrant_active: boolean;
}
