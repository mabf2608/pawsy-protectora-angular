import { StrapiEntityDto } from './strapi-response.dto';

export interface StrapiMediaAttributesDto {
  url: string;
}

export interface StrapiMediaDto {
  data: StrapiEntityDto<StrapiMediaAttributesDto> | null;
}