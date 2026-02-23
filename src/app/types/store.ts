export type Store = {
  id: string;
  name: string;
  location: string;
  manager: string;
  caissiers: {
    id: string;
    name: string;
    contact: string;
  }[];
  transactions: {
    id: string;
    type: string; // paiement course, rendu monnaie, etc.
    amount: number;
    date: string;
    clientContact: string;
  }[];
  responsableCaisse: string;
};
