'use client';
import { Store } from "@/app/types/store";
import { Button } from "../../button";
import Image from "next/image";
import { MapPinIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

type Props = {
    store: Store;
}

export default function StoreItem({ store }: Props) {
    const { name, location, id } = store;
    const router = useRouter();

    const redirectToStoreDetails = () => {
        router.push(`/stores/${store.id}`);
    }

    return (<div className="relative overflow-hidden flex flex-col bg-white rounded-4xl p-6 w-[250px] h-[200px] group hover:bg-[radial-gradient(104.5%_149.38%_at_-2.6%_-7.25%,#FFBDC4_0%,#E0001A_49.04%)] hover:cursor-pointer hover:text-white transition-all duration-300">
         <div className="relative z-20 flex items-center justify-between">
            <div className="bg-gray-200 rounded-lg p-1.5 group-hover:bg-pink-custom">
                <Image src='/assets/store.svg' className="group-hover:brightness-0 group-hover:invert transition-all duration-300" alt={name} width={20} height={20} />
            </div>

            <Button variant="ghost" size="icon" onClick={redirectToStoreDetails}>
                <Image src='/assets/details.svg' alt={name} width={20} height={20} className="group-hover:brightness-0 group-hover:invert transition-all duration-300" />
            </Button>

        </div>
        <div className="relative z-20 flex flex-col gap-1 mt-auto group-hover:text-white">
            <span className="text-lg font-bold">{name}</span>
            <div className="flex gap-1 items-center text-xs text-muted-foreground group-hover:text-white">
                <span className="mr-2">{id}</span>
                <MapPinIcon size={16} weight="bold" color='currentColor' />
                <span>{location}</span>
            </div>
        </div>
    </div>);

}