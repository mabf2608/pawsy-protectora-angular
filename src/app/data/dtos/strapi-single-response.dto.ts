import { StrapiEntityDto } from './strapi-response.dto';

export interface StrapiSingleResponseDto<TAttributes> {
  data: StrapiEntityDto<TAttributes> | null;
}