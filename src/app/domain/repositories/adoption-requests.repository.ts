import { Observable } from "rxjs";
import { AdoptionRequestCreate } from "../models/adoption-request-create.model";

export interface AdoptionRequestsRepository {
  create(input: AdoptionRequestCreate): Observable<void>;
}