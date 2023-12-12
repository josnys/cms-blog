import AdminLayout from '@/Layouts/AdminLayout';
import { Head, usePage, useForm, Link } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import Checkbox from '@/Components/Checkbox';
import FlashMessage from '@/Components/FlashMessage';
import CancelButton from '@/Components/CancelButton';

export default function Role({ auth }) {
     const { info } = usePage().props;
     const user = info.user.data;
     const { data, setData, post, errors, processing } = useForm({
          roles: info.roles || []
     });

     const handleChange = (e, i) => {
          e.preventDefault();
          let roles = data.roles;
          let role = roles[i];
          role.is_checked = !role.is_checked;
          roles[i] = role;
          setData((data) => ({
               ...data,
               roles: roles
          }));
     }

     const submit = (e) => {
          e.preventDefault();

          post(route('admin.user.role.store', user.username));
     };

     return (
          <AdminLayout
               user={auth.user}
               header={<h2 className="font-semibold leading-tight text-md text-slate-700">Admin / <Link href={route('admin.user.index')} className="text-slate-700">Users</Link> / <span className="text-slate-500">Assign Roles</span></h2>}
          >
               <Head title="Admin Roles" />

               <section className="w-full">
                    <FlashMessage />
                    <div className="flex w-full col-span-12 p-4 overflow-hidden">
                         <div className="w-1/3"></div>
                         <div className="w-2/3 p-4 bg-white rounded-md">
                              <form onSubmit={submit} className="mt-6 space-y-6">
                                   <h2 className="text-lg font-medium text-gray-900">
                                        Assign Roles to user <b>{user.related.person.fullname}</b>
                                   </h2>
                                   {info.user_roles ? <p className="mt-1 text-sm text-gray-600"><b>Already have : </b>{info.user_roles}</p> : null}
                                   <FlashMessage />
                                   <div className="grid grid-cols-4 p-4 space-x-2 space-y-4 bg-slate-50">
                                        {data.roles.map((role, i) => {
                                             return <div key={`perms${i}`} className="block">
                                                  <label className="flex items-center">
                                                       <Checkbox
                                                            id="roles[]"
                                                            name="roles[]"
                                                            checked={role.is_checked}
                                                            onChange={(e) => handleChange(e, i)}
                                                       />
                                                       <span className="ml-2 text-sm text-gray-600">{role.display_name}</span>
                                                  </label>
                                             </div>
                                        })}
                                   </div>
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
