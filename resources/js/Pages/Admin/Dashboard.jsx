import AdminLayout from '@/Layouts/AdminLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
     return (
          <AdminLayout
               user={auth.user}
               header={<h2 className="font-semibold leading-tight text-md text-slate-800">Admin / Dashboard</h2>}
          >
               <Head title="Dashboard" />

               <section className="w-full">
                    <div className="overflow-hidden bg-white">
                         <div className="p-6 text-gray-900">You're logged in as an admin!</div>
                    </div>
               </section>
          </AdminLayout>
     );
}
