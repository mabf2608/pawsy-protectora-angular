import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Animal } from "../../domain/models/animal.model";
import { AnimalsRepository } from "../../domain/repositories/animals.repository";

@Injectable ({
    providedIn : 'root'
})

export class AnimalsMockRepository implements AnimalsRepository {

    getAll(): Observable<Animal[]> {

        return of ([]);

    }

    getById(id: string): Observable<Animal | null> {

        return of (null);
        
    }
}