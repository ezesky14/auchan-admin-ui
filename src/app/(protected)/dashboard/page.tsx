import BalanceOverview from '@/app/components/balance-overview';
import StatOverview from '@/app/components/stat-overview/stat-overview';
import StoreItem from '@/app/components/store-list/store-item/store-item';
import { stores } from '@/app/mock/db';
import { Button } from '@/app/components/button';
import TransactionTable from '@/app/components/transactions/transaction-table/transaction-table';

export default function DashboardPage() {
  return (
    <section>
      <div className="mt-8 flex flex-col gap-6 lg:flex-row">
        <BalanceOverview balanceDetails={{ amount: '9 231 000' }} />
        <div className="bg-pink-custom-2 flex w-full flex-col gap-2 rounded-3xl p-4">
          <div className="flex w-full items-center gap-2">
            <h3 className="text-foreground-secondary text-2xl font-bold">
              {'Les magasins qui transactent le plus'}
            </h3>
            <Button variant="outline" className="ml-auto">
              {'Tous les magasins >'}
            </Button>
          </div>

          <div className="relative mt-4">
            <div className="no-wrap flex w-full gap-4 overflow-x-auto">
              {stores.map((store) => (
                <div key={store.id}>
                  <StoreItem store={store} />
                </div>
              ))}
            </div>
            <div className="from-pink-custom-2 pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l to-transparent" />
          </div>
        </div>
      </div>
      <div className="mt-4 flex w-full flex-col gap-4 lg:flex-row">
        <div className="lg-w-auto w-full rounded-3xl bg-white">
          <TransactionTable />
        </div>
        <StatOverview />
      </div>
    </section>
  );
}
