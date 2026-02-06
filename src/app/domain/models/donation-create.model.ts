export interface DonationCreate {
  animalId: string;
  userId: string;
  amount: number;
  message?: string;
}