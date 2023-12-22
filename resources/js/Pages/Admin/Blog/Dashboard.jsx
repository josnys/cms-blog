import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth }) {
     return (
          <AdminLayout
               user={auth.user}
               header={<h2 className="font-semibold leading-tight text-md text-slate-800">Admin / Blog / <span className="text-slate-500">Dashboard</span></h2>}
          >
               <Head title="Admin Blogs" />

               <section className="w-full">
                    <div className="overflow-hidden bg-white">
                         <div className="grid grid-cols-4 gap-2 p-2">
                              <Link href={route('admin.blog.page.index')} className="p-4 text-center rounded bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-500">Pages</Link>
                              <Link href={route('admin.blog.category.index')} className="p-4 text-center rounded bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-500">Categories, Sub-Categories & Tags</Link>
                              <Link href={route('admin.blog.content.index')} className="p-4 text-center rounded bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-500">Contents</Link>
                         </div>
                    </div>
               </section>
          </AdminLayout>
     );
}
