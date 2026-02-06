export interface Donation {
  id: string;
  animalId: string;
  userId: string;
  amount: number;
  message?: string;
  createdAt: string;
}