import { Metadata } from 'next';
import { nunito } from '@/app/ui/fonts';
import CustomersTable from '@/app/ui/customers/table'

export const metadata: Metadata = {
    title: 'Customers',
};

export default function Page() {
    return (
        <main>
            {/* <h1 className={`${nunito.className} mb-4 text-xl md:text-2xl`}>
                Customers
            </h1> */}
            <div className="flex w-full items-center justify-between">
                <CustomersTable customers={[]} />
            </div>
        </main >
    );
}