import { User } from 'src/app/domain/models/user.model';
import { UserStrapiDto } from '../dtos/user.strapi.dto';

export function mapUserFromStrapi(dto: UserStrapiDto): User {
  return {
    id: String(dto.id),
    username: dto.username,
    email: dto.email,

    name: dto.name,
    birthDate: dto.birthDate,
    phone: dto.phone,
    dni: dto.dni,
    residenceArea: dto.residenceArea,

    photoUrl: dto.photo?.data?.attributes?.url,
  };
}