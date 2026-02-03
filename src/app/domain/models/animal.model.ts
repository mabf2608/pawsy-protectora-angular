export enum AdoptionStatus {
    AVAILABLE = 'available',
    ADOPTED = 'adopted',
    SPONSORED = 'sponsored'
}

export enum AnimalSpecies {
    DOG = 'dog',
    CAT = 'cat',
    RABBIT = 'rabbit',
    OTHER = 'other'
}

export interface Animal {
    id: string;
    name: string;
    age: number;

    species: AnimalSpecies;
    adoptionStatus: AdoptionStatus;

    description: string;
    photoUrl: string;
}