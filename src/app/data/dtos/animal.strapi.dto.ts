import { StrapiResponseDto } from './strapi-response.dto';

export interface AnimalStrapiAttributesDto {
  name: string;
  age: number;
  description: string;
  species: string;
  adoptionStatus: string;
  photoUrl: string;
}

export type AnimalsStrapiResponseDto = StrapiResponseDto<AnimalStrapiAttributesDto>;