export interface StrapiCreateBodyDto<T> {
  data: T;
}

export interface AdoptionRequestStrapiCreateDataDto {
  fullName: string;
  phone: string;
  city: string;
  housingType: string;
  hasOtherPets: boolean;

  experience: string;
  reason: string;

  animal: number;
  user: number;
}