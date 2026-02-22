import { Store } from "../types/store";
import { Transaction } from "../types/transaction";

export const stores: Store[] = [
    {
        id: 'MOO1',
        name: 'Angre Djibi 1',
        location: 'Abidjan, Cocody'

    },
    {
        id: 'MOO2',
        name: 'Angre Djibi 2',
        location: 'Abidjan, Yopougon'
    },
    {
        id: 'MOO3',
        name: 'Angre Djibi 3',
        location: 'Abidjan, Plateau'
    },
    {
        id: 'MOO4',
        name: 'Angre Djibi 4',
        location: 'Abidjan, Marcory'
    },
    {
        id: 'MOO5',
        name: 'Angre Djibi 5',
        location: 'Abidjan, Port-Bouet'
    }
]

export const transactions: Transaction[] = [
    {
        id: 'TXN001',
        type: 'paiement_course',
        store: 'Angré Djibi 1',
        amount: 220,
        client: '+225 07 08 06 05 04',
        date: '20/01/2025, 10:20',
    },
    {
        id: 'TXN002',
        type: 'rendu_monnaie',
        store: 'Angré Djibi 1',
        amount: -220,
        client: '+225 07 08 06 05 04',
        date: '20/01/2025, 10:20',
    },
    {
        id: 'TXN003',
        type: 'rendu_monnaie',
        store: 'Angré Djibi 1',
        amount: 220,
        client: '+225 07 08 06 05 04',
        date: '20/01/2025, 10:20',
    },
    {
        id: 'TXN004',
        type: 'paiement_course',
        store: 'Angré Djibi 1',
        amount: 220,
        client: '+225 07 08 06 05 04',
        date: '20/01/2025, 10:20',
    },
    {
        id: 'TXN005',
        type: 'rendu_monnaie',
        store: 'Angré Djibi 1',
        amount: -220,
        client: '+225 07 08 06 05 04',
        date: '20/01/2025, 10:20',
    },
    {
        id: 'TXN006',
        type: 'rendu_monnaie',
        store: 'Angré Djibi 1',
        amount: -220,
        client: '+225 07 08 06 05 04',
        date: '20/01/2025, 10:20',
    },
    {
        id: 'TXN007',
        type: 'rendu_monnaie',
        store: 'Angré Djibi 1',
        amount: 220,
        client: '+225 07 08 06 05 04',
        date: '20/01/2025, 10:20',
    },
    {
        id: 'TXN008',
        type: 'paiement_course',
        store: 'Angré Djibi 1',
        amount: 220,
        client: '+225 07 08 06 05 04',
        date: '20/01/2025, 10:20',
    },
]