import { Observable } from "rxjs";
import { Animal } from "../models/animal.model";

export interface AnimalsRepository {

    getAll() : Observable<Animal[]>;
    getById(id : string) : Observable<Animal | null>;
    
}