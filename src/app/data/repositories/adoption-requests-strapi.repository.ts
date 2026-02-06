import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

import { environment } from "src/environments/environment";
import { ApiClientService } from "../http/api-client.service";

import { AdoptionRequestsRepository } from "src/app/domain/repositories/adoption-requests.repository";
import { AdoptionRequestCreate } from "src/app/domain/models/adoption-request-create.model";

import { StrapiCreateBodyDto } from "../dtos/adoption-request.strapi.dto";
import { mapAdoptionRequestCreateToStrapiData } from "../mappers/adoption-request.mapper";

@Injectable({ providedIn: "root" })
export class AdoptionRequestsStrapiRepository implements AdoptionRequestsRepository {
  private readonly baseUrl = `${environment.apiBaseUrl}${environment.apiPrefix}`;
  private readonly endpoint = "adoption-requests";

  constructor(private readonly api: ApiClientService) {}

  create(input: AdoptionRequestCreate): Observable<void> {
    const url = `${this.baseUrl}/${this.endpoint}`;
    const body: StrapiCreateBodyDto<ReturnType<typeof mapAdoptionRequestCreateToStrapiData>> = {
      data: mapAdoptionRequestCreateToStrapiData(input),
    };

    return this.api.post<unknown>(url, body).pipe(map(() => void 0));
  }
}