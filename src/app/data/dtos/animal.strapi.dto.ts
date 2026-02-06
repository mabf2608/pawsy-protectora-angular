import { StrapiResponseDto } from './strapi-response.dto';
import { StrapiMediaDto } from './strapi-media.dto';

export interface AnimalStrapiAttributesDto {
  name: string;
  estimatedAge: number;
  description: string;
  species: string;
  adoptionStatus: string;
  photo: StrapiMediaDto;
}

export type AnimalsStrapiResponseDto = StrapiResponseDto<AnimalStrapiAttributesDto>;