import { Animal } from 'src/app/domain/models/animal.model';
import { AdoptionStatus } from 'src/app/domain/models/enums/adoption-status.enum';
import { AnimalSpecies } from 'src/app/domain/models/enums/animal-species.enum';
import { AnimalStrapiAttributesDto } from '../dtos/animal.strapi.dto';
import { StrapiEntityDto } from '../dtos/strapi-response.dto';

export function mapAnimalFromStrapiEntity(entity: StrapiEntityDto<AnimalStrapiAttributesDto>): Animal {
  const dto = entity.attributes;

  return {
    id: String(entity.id),
    name: dto.name,
    age: dto.age,
    species: dto.species as AnimalSpecies,
    adoptionStatus: dto.adoptionStatus as AdoptionStatus,
    description: dto.description,
    photoUrl: dto.photoUrl,
  };
}