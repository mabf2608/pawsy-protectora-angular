import { AdoptionRequestCreate } from "src/app/domain/models/adoption-request-create.model";
import { AdoptionRequestStrapiCreateDataDto } from "../dtos/adoption-request.strapi.dto";

export function mapAdoptionRequestCreateToStrapiData(
  input: AdoptionRequestCreate
): AdoptionRequestStrapiCreateDataDto {
  return {
    fullName: input.fullName,
    phone: input.phone,
    city: input.city,
    housingType: input.housingType,
    hasOtherPets: input.hasOtherPets,
    experience: input.experience,
    reason: input.reason,
    animal: Number(input.animalId),
    user: Number(input.userId),
  };
}