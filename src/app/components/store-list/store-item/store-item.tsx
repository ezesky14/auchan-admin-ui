import { Store } from "@/app/types/store";
import { Button } from "../../button";
import Image from "next/image";

type Props = {
    store: Store;
}

export default function StoreItem({ store }: Props) {
    const { name, location, id } = store;
    //  const { name, address, phone, email } = store;
    return (<div className="flex flex-col bg-white rounded-3xl p-6 w-[250px] h-[200px]">
        <div className="flex items-center justify-between">
            <div className="bg-gray-200 rounded-full p-2">
                <Image src='/assets/store.svg' alt={name} width={20} height={20} />
            </div>

            <Button variant="ghost" size="icon">
                <Image src='/assets/details.svg' color="primary" alt={name} width={20} height={20} />
            </Button>

        </div>
        <div className="flex flex-col gap-2 mt-auto">
            <p className="text-lg font-bold">{name}</p>
            <p className="text-sm text-gray-500">{location}</p>
        </div>
    </div>);

}