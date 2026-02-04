import { Provider } from "@angular/core";

import { ANIMALS_REPOSITORY } from "../tokens/animals-repository.token";
import { BACKEND, BackendType } from "../tokens/backend.token";

import { AnimalsRepository } from "../../domain/repositories/animals.repository";
import { AnimalsMockRepository } from "../../data/repositories/animals-mock.repository";

export function animalsRepositoryFactory( backend: BackendType): AnimalsRepository {

    switch(backend) {
        case 'mock':
        case 'strapi':
        case 'firebase':

        degault: 
            return new AnimalsMockRepository();
    }

}

export const ANIMALS_REPOSITORY_PROVIDER: Provider = {

    provide: ANIMALS_REPOSITORY,
    useFactory: animalsRepositoryFactory,
    deps: [BACKEND]

}