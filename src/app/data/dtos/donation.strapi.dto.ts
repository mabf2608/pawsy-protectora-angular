import { StrapiEntityDto } from "./strapi-response.dto";

// Lo que Strapi espera en POST: { data: { ... } }
export interface DonationStrapiCreateDataDto {
  amount: number;
  message?: string;

  animal: number;
  user: number;
}

export interface StrapiCreateBodyDto<T> {
  data: T;
}

// Lo que devuelve Strapi al crear: { data: { id, attributes } }
export interface DonationStrapiAttributesDto {
  amount: number;
  message?: string | null;
  createdAt: string;
}

export interface DonationStrapiSingleResponseDto {
  data: StrapiEntityDto<DonationStrapiAttributesDto>;
}