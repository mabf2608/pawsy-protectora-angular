import { StrapiMediaDto } from './strapi-media.dto';

export interface UserStrapiDto {
  id: number;
  username: string;
  email: string;

  name: string;
  birthDate: string;
  phone: string;
  dni: string;
  residenceArea: string;

  photo?: StrapiMediaDto;
}