export interface AdoptionRequestCreate {
  animalId: string;
  userId: string;

  fullName: string;
  phone: string;
  city: string;
  housingType: string;
  hasOtherPets: boolean;

  experience: string;
  reason: string;
}