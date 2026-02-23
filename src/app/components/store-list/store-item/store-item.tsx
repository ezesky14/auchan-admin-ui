'use client';
import { Store } from '@/app/types/store';
import { Button } from '../../button';
import Image from 'next/image';
import { MapPinIcon } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';

type Props = {
  store: Store;
};

export default function StoreItem({ store }: Props) {
  const { name, location, id } = store;
  const router = useRouter();

  const redirectToStoreDetails = () => {
    router.push(`/stores/${store.id}`);
  };

  return (
    <div className="group relative flex h-[200px] w-[250px] flex-col overflow-hidden rounded-4xl bg-white p-6 transition-all duration-300 hover:cursor-pointer hover:bg-[radial-gradient(104.5%_149.38%_at_-2.6%_-7.25%,#FFBDC4_0%,#E0001A_49.04%)] hover:text-white">
      <div className="relative z-20 flex items-center justify-between">
        <div className="group-hover:bg-pink-custom rounded-lg bg-gray-200 p-1.5">
          <Image
            src="/assets/store.svg"
            className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
            alt={name}
            width={20}
            height={20}
          />
        </div>

        <Button variant="ghost" size="icon" onClick={redirectToStoreDetails}>
          <Image
            src="/assets/details.svg"
            alt={name}
            width={20}
            height={20}
            className="transition-all duration-300 group-hover:brightness-0 group-hover:invert"
          />
        </Button>
      </div>
      <div className="relative z-20 mt-auto flex flex-col gap-1 group-hover:text-white">
        <span className="text-lg font-bold">{name}</span>
        <div className="text-muted-foreground flex items-center gap-1 text-xs group-hover:text-white">
          <span className="mr-2">{id}</span>
          <MapPinIcon size={16} weight="bold" color="currentColor" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}
