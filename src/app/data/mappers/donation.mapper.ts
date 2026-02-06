import { Donation } from "src/app/domain/models/donation.model";
import { DonationCreate } from "src/app/domain/models/donation-create.model";
import { StrapiEntityDto } from "../dtos/strapi-response.dto";
import { DonationStrapiAttributesDto, DonationStrapiCreateDataDto } from "../dtos/donation.strapi.dto";

export function mapDonationCreateToStrapiData(input: DonationCreate): DonationStrapiCreateDataDto {
  return {
    amount: input.amount,
    message: input.message,
    animal: Number(input.animalId),
    user: Number(input.userId),
  };
}

export function mapDonationFromStrapiEntity(
  entity: StrapiEntityDto<DonationStrapiAttributesDto>,
  animalId: string,
  userId: string
): Donation {
  return {
    id: String(entity.id),
    animalId,
    userId,
    amount: entity.attributes.amount,
    message: entity.attributes.message ?? undefined,
    createdAt: entity.attributes.createdAt,
  };
}