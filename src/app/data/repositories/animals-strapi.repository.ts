import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { AnimalsRepository } from 'src/app/domain/repositories/animals.repository';
import { Animal } from 'src/app/domain/models/animal.model';

import { ApiClientService } from 'src/app/data/http/api-client.service';
import { AnimalsStrapiResponseDto, AnimalStrapiAttributesDto, } from 'src/app/data/dtos/animal.strapi.dto';
import { StrapiSingleResponseDto } from 'src/app/data/dtos/strapi-single-response.dto';
import { mapAnimalFromStrapiEntity } from 'src/app/data/mappers/animal.mapper';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AnimalsStrapiRepository implements AnimalsRepository {
  private readonly baseUrl = `${environment.apiBaseUrl}${environment.apiPrefix}`;

  constructor(private readonly api: ApiClientService) {}

  getAll(): Observable<Animal[]> {
    const url = `${this.baseUrl}/animals?populate=photo`;

    return this.api.get<AnimalsStrapiResponseDto>(url).pipe(
      map((res) => res.data.map(mapAnimalFromStrapiEntity))
    );
  }

  getById(id: string): Observable<Animal | null> {
    const url = `${this.baseUrl}/animals/${id}?populate=photo`;

    return this.api.get<StrapiSingleResponseDto<AnimalStrapiAttributesDto>>(url).pipe(
      map((res) => {
        if (!res.data) return null;
        return mapAnimalFromStrapiEntity(res.data);
      })
    );
  }
}