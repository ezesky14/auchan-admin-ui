'use client';

import { useState } from 'react';
import { InputSearch } from '@/app/components/input-search';
import { Dropdown } from '@/app/components/dropdown';
import StoreList from '@/app/components/store-list/store-list';
import { Button } from '@/app/components/button';
import { PlusIcon } from '@phosphor-icons/react';
import { stores } from '@/app/mock/db';

const communeOptions = [
  { label: 'Cocody', value: 'cocody' },
  { label: 'Yopougon', value: 'yopougon' },
  { label: 'Plateau', value: 'plateau' },
  { label: 'Marcory', value: 'marcory' },
  { label: 'Port-Bouet', value: 'port-bouet' },
  { label: 'Abobo', value: 'abobo' },
];

export default function Stores() {
  const [commune, setCommune] = useState<string>('');

  return (
    <div className="py-6">
      <div className="relative z-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-7">
        <h1 className="text-3xl font-bold">{'Magasins'}</h1>
        <InputSearch
          className="w-80"
          placeholder="Nom du magasin, code magasin,Commune"
        />
        <Dropdown
          options={communeOptions}
          value={commune}
          onChange={setCommune}
          placeholder="Commune"
          className="*:data-[slot=button]:h-9"
          bgClassName="bg-input-foreground "
        />

        <Button size="sm" className="ml-auto h-12 rounded-xl px-2">
          <PlusIcon size={16} weight="bold" className="mr-2" color="#FFFFFF" />
          <span className="text-sm font-medium">{'Ajouter un magasin'}</span>
        </Button>
      </div>

      <StoreList stores={stores} />
    </div>
  );
}
