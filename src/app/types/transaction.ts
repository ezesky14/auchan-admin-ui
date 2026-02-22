export type TransactionType = 'paiement_course' | 'rendu_monnaie';

export type Transaction = {
    id: string;
    type: TransactionType;
    store: string;
    amount: number;
    client: string;
    date: string;
}
