import { Animal } from 'src/app/domain/models/animal.model';
import { AdoptionStatus } from 'src/app/domain/models/enums/adoption-status.enum';
import { AnimalSpecies } from 'src/app/domain/models/enums/animal-species.enum';

import { AnimalStrapiAttributesDto } from '../dtos/animal.strapi.dto';
import { StrapiEntityDto } from '../dtos/strapi-response.dto';

function mapSpeciesFromStrapi(value: string): AnimalSpecies {
  switch (value) {
    case 'DOG': return AnimalSpecies.DOG;
    case 'CAT': return AnimalSpecies.CAT;
    case 'RABBIT': return AnimalSpecies.RABBIT;
    case 'OTHER': return AnimalSpecies.OTHER;
    default:
      throw new Error(`Unknown species from Strapi: ${value}`);
  }
}

function mapAdoptionStatusFromStrapi(value: string): AdoptionStatus {
  switch (value) {
    case 'AVAILABLE': return AdoptionStatus.AVAILABLE;
    case 'ADOPTED': return AdoptionStatus.ADOPTED;
    case 'SPONSORED': return AdoptionStatus.SPONSORED;
    default:
      throw new Error(`Unknown adoptionStatus from Strapi: ${value}`);
  }
}

export function mapAnimalFromStrapiEntity(entity: StrapiEntityDto<AnimalStrapiAttributesDto>): Animal {
  const dto = entity.attributes;

  const photoUrl = dto.photo?.data?.attributes?.url;
  if(!photoUrl){
    throw new Error('Animal photo is missing or not populated');
  }

  return {
    id: String(entity.id),
    name: dto.name,
    age: dto.estimatedAge,
    species: mapSpeciesFromStrapi(dto.species),
    adoptionStatus: mapAdoptionStatusFromStrapi(dto.adoptionStatus),
    description: dto.description,
    photoUrl,
  };
}