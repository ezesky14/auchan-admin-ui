import BalanceOverview from "@/app/components/balance-overview";
import StatOverview from "@/app/components/stat-overview/stat-overview";
import StoreItem from "@/app/components/store-list/store-item/store-item";
import { stores } from "@/app/mock/db";
import { Button } from "@/app/components/button";
import TransactionTable from "@/app/components/transactions/transaction-table/transaction-table";

export default function DashboardPage() {
    return (
        <section>
            <div className="flex flex-col lg:flex-row mt-8 gap-6 ">
                <BalanceOverview balanceDetails={{ amount: '9 231 000' }} />
                <div className="flex flex-col gap-2 bg-pink-custom-2 rounded-3xl p-4 w-full">
                    <div className="flex gap-2 items-center w-full">
                        <h3 className="text-2xl font-bold text-foreground-secondary">{'Les magasins qui transactent le plus'}</h3>
                        <Button variant="outline" className="ml-auto" >{'Tous les magasins >'}</Button>
                    </div>

                    <div className="relative mt-4">
                        <div className="flex overflow-x-auto gap-4 w-full no-wrap">
                            {stores.map((store) => (
                                <div key={store.id}>
                                    <StoreItem store={store} />
                                </div>
                            ))}
                        </div>
                        <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-pink-custom-2 to-transparent" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 mt-4 w-full">
                <div className="bg-white rounded-3xl lg-w-auto w-full">
                    <TransactionTable />
                </div>
                <StatOverview />

            </div>

        </section>
    )
}