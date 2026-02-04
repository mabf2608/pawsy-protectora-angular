import { InjectionToken } from "@angular/core";
import { AnimalsRepository } from "../../domain/repositories/animals.repository";

export const ANIMALS_REPOSITORY = new InjectionToken<AnimalsRepository>('ANIMALS_REPOSITORY'); 