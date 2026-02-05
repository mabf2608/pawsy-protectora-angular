import { AdoptionStatus } from "./enums/adoption-status.enum";
import { AnimalSpecies } from "./enums/animal-species.enum";

export interface Animal {
    id: string;
    name: string;
    age: number;

    species: AnimalSpecies;
    adoptionStatus: AdoptionStatus;

    description: string;
    photoUrl: string;
}