import AdminLayout from '@/Layouts/AdminLayout';
import { Head, usePage, Link } from '@inertiajs/react';
import AddButton from '@/Pages/Admin/Components/AddButton';

export default function Index({ auth }) {
     const { info } = usePage().props;
     console.log(info.galleries.data);
     return (
          <AdminLayout
               user={auth.user}
               header={<h2 className="font-semibold leading-tight text-md text-slate-800">Admin / <Link href={route('admin.media.index')}>Media</Link> / <span className="text-slate-500">Galleries</span></h2>}
          >
               <Head title="Admin Blogs" />

               <section className="w-full">
                    <div className="overflow-hidden bg-white">
                         <div className="flex justify-between p-2 mb-2 rounded bg-slate-50">
                              <div></div>
                              <div className="flex justify-end">
                                   {info.authorize_to.create ? <AddButton link={route('admin.media.gallery.create')}>Add New</AddButton> : null}
                              </div>
                         </div>

                         <div className="grid grid-cols-6 gap-2 p-2">
                              {info.galleries.data.map((gallery, i) => {
                                   return <Link href={route('admin.media.gallery.edit', gallery.slug)} className={`p-2 border rounded bg-slate-50 border-slate-100 hover:shadow-md`} key={`gallery${i}`}>
                                        <img className="object-cover w-full h-32" loading='egaer' src={gallery.medias.data[0].url.external ? gallery.medias.data[0].url.external : gallery.medias.data[0].url.small} alt={gallery.medias.data[0].name} />
                                        <div className="w-full mt-1 text-xs text-slate-500">
                                             <h4 className="flex items-center font-semibold">{gallery.name} <span className={`w-2 h-2 rounded-full ml-2 ${gallery.status.value ? 'bg-green-500' : 'bg-red-500'}`}></span></h4>
                                             <div className="mt-2 font-normal line-clamp-2" dangerouslySetInnerHTML={{ __html: gallery.description }}></div>
                                        </div>
                                   </Link>
                              })}
                         </div>
                    </div>
               </section>
          </AdminLayout>
     );
}
