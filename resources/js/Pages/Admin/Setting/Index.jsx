import AdminLayout from '@/Layouts/AdminLayout';
import { Head, usePage, Link } from '@inertiajs/react';

export default function Show({ auth }) {
     const { info } = usePage().props;
     const settingObj = info.setting.data ?? [];
     
     return (
          <AdminLayout
               user={auth.user}
               header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Profile</h2>}
          >
               <Head title="Admin Setting" />

               <div className="py-12">
                    <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
                         <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
                              <Link href={route('admin.setting.create')} className="float-right text-blue-400 hover:text-blue-600 hover:underline">Edit</Link>
                              {settingObj.logo ? <div className="flex justify-center w-full">
                                   <img src={settingObj.logo.large} className="w-40" />
                              </div>:null}
                              <h1 className="text-2xl font-semibold text-center text-slate-700">{settingObj.name}</h1>
                              {settingObj.slogan ? <h3 className="text-lg text-center text-slate-500">{settingObj.slogan}</h3>:null}
                              {settingObj.address ? <h4 className="text-center text-slate-400">{settingObj.address}</h4>:null}
                              {settingObj.phone ? <h4 className="text-center text-slate-400">{settingObj.phone}</h4> : null}
                              {settingObj.email ? <h4 className="text-center text-slate-400">{settingObj.email}</h4> : null}
                              {settingObj.description ? <div className="mt-4 prose text-slate-600" dangerouslySetInnerHTML={{ __html: settingObj.description }}></div>:null}
                              {settingObj.socials.length ? <div className="mt-2">
                                   <ul className="flex space-x-4 list-disc list-inside">
                                        {settingObj.socials.map((social, i) => {
                                             return <li key={`soc${i}`}>{social.name}</li>
                                        })}
                                   </ul>
                              </div>:null}
                              <Link href={route('admin.setting.create')} className="float-right text-blue-400 hover:text-blue-600 hover:underline">Edit</Link>
                         </div>
                    </div>
               </div>
          </AdminLayout>
     );
}
