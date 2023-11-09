import AdminLayout from '@/Layouts/AdminLayout';
import { Head, usePage, useForm, Link } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import Checkbox from '@/Components/Checkbox';
import FlashMessage from '@/Components/FlashMessage';
import CancelButton from '@/Components/CancelButton';

export default function Permission({ auth }) {
     const { info } = usePage().props;
     const user = info.user.data;

     const { data, setData, post, errors, processing } = useForm({
          permissions: info.permissions || []
     });

     const handleChange = (e, i) => {
          e.preventDefault();
          let permissions = data.permissions;
          let permission = permissions[i];
          permission.is_checked = !permission.is_checked;
          permissions[i] = permission;
          setData((data) => ({
               ...data,
               permissions: permissions
          }));
     }

     const submit = (e) => {
          e.preventDefault();

          post(route('admin.user.permission.store', user.username));
     };

     return (
          <AdminLayout
               user={auth.user}
               header={<h2 className="font-semibold leading-tight text-md text-slate-700">Admin / <Link href={route('admin.user.index')} className="text-slate-700">Users</Link> / <span className="text-slate-500">Assign Permissions</span></h2>}
          >
               <Head title="Dashboard" />

               <section className="w-full">
                    <FlashMessage />
                    <div className="flex w-full col-span-12 p-4 overflow-hidden">
                         <div className="w-1/3"></div>
                         <div className="w-2/3 p-4 bg-white rounded-md">
                              <form onSubmit={submit} className="mt-6 space-y-6">
                                   <h2 className="text-lg font-medium text-gray-900">
                                        Assign Perimissions to User <b>{user.related.person.fullname}</b>
                                   </h2>
                                   {info.display_permission ? <p className="mt-1 text-sm text-gray-600"><b>Already have : </b>{info.display_permission}</p> : null}
                                   <FlashMessage />
                                   {data.permissions.length ? <div className="grid grid-cols-4 p-4 space-x-2 space-y-4 bg-slate-50">
                                        {data.permissions.map((permission, i) => {
                                             return <div key={`perms${i}`} className="block">
                                                  <label className="flex items-center">
                                                       <Checkbox
                                                            id="permissions[]"
                                                            name="permissions[]"
                                                            checked={permission.is_checked}
                                                            onChange={(e) => handleChange(e, i)}
                                                       />
                                                       <span className="ml-2 text-sm text-gray-600">{permission.display_name}</span>
                                                  </label>
                                             </div>
                                        })}
                                   </div>: <div className="p-2 text-xs text-center text-yellow-700 bg-yellow-200 border-yellow-400 rounded">This user already have all permissions through role(s).</div>}
                                   <div className="flex justify-between">
                                        <CancelButton link={route('admin.user.index')}>Cancel</CancelButton>
                                        <PrimaryButton disabled={processing}>Save</PrimaryButton>
                                   </div>
                              </form>
                         </div>
                    </div>
               </section>
          </AdminLayout>
     );
}
