import Breadcrumb from '@/app/components/breadcrumb';
import { stores } from '@/app/mock/db';
import StoreDetails from '@/app/ui/stores/store-details/store-details';

type Params = Promise<{ id: string }>;

export default async function StorePage({ params }: { params: Params }) {
  const { id } = await params;

  const store = stores.find((store) => store.id === id);

  return (
    <div>
      <Breadcrumb
        items={[{ label: 'Magasins', href: '/stores' }, { label: 'Détails' }]}
      />

      {store && <StoreDetails store={store} />}
    </div>
  );
}
