import { Observable } from "rxjs";
import { DonationCreate } from "../models/donation-create.model";
import { Donation } from "../models/donation.model";

export interface DonationsRepository {
  create(input: DonationCreate): Observable<Donation>;
}