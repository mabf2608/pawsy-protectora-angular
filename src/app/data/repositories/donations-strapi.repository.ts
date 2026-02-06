import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

import { environment } from "src/environments/environment";
import { ApiClientService } from "../http/api-client.service";

import { DonationsRepository } from "src/app/domain/repositories/donations.repository";
import { Donation } from "src/app/domain/models/donation.model";
import { DonationCreate } from "src/app/domain/models/donation-create.model";

import {
  DonationStrapiSingleResponseDto,
  StrapiCreateBodyDto,
} from "../dtos/donation.strapi.dto";
import { mapDonationCreateToStrapiData, mapDonationFromStrapiEntity } from "../mappers/donation.mapper";

@Injectable({ providedIn: "root" })
export class DonationsStrapiRepository implements DonationsRepository {
  private readonly baseUrl = `${environment.apiBaseUrl}${environment.apiPrefix}`;

  private readonly endpoint = "donations";

  constructor(private readonly api: ApiClientService) {}

  create(input: DonationCreate): Observable<Donation> {
    const url = `${this.baseUrl}/${this.endpoint}`;
    const body: StrapiCreateBodyDto<ReturnType<typeof mapDonationCreateToStrapiData>> = {
      data: mapDonationCreateToStrapiData(input),
    };

    return this.api.post<DonationStrapiSingleResponseDto>(url, body).pipe(
      map((res) => mapDonationFromStrapiEntity(res.data, input.animalId, input.userId))
    );
  }
}