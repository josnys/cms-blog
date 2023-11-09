import AdminLayout from '@/Layouts/AdminLayout';
import { Head, usePage, useForm, Link } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import FlashMessage from '@/Components/FlashMessage';
import CancelButton from '@/Components/CancelButton';

export default function Form({ auth }) {
     const { info } = usePage().props;
     const user = info.user.data;

     const { data, setData, patch, errors, processing } = useForm({
          password: '',
          password_confirmation: '',
     });

     const submit = (e) => {
          e.preventDefault();

          patch(route('admin.user.password.update', user.username));
     };

     return (
          <AdminLayout
               user={auth.user}
               header={<h2 className="font-semibold leading-tight text-md text-slate-700">Admin / <Link href={route('admin.user.index')} className="text-slate-700">Users</Link> / <span className="text-slate-500">Reset Password</span></h2>}
          >
               <Head title="Dashboard" />

               <section className="w-full">
                    <FlashMessage />
                    <div className="flex w-full col-span-12 p-4 overflow-hidden">
                         <div className="w-1/2"></div>
                         <div className="w-1/2 p-4 bg-white rounded-md">
                              <form onSubmit={submit} className="mt-6 space-y-6">
                                   <div className="mt-4">
                                        <InputLabel htmlFor="password" value="Password" is_required={true} />
                                        <TextInput
                                             id="id_password"
                                             type="password"
                                             name="password"
                                             value={data.password}
                                             className="block w-full mt-1"
                                             autoComplete="new-password"
                                             onChange={(e) => setData('password', e.target.value)}
                                             required
                                        />
                                        <InputError message={errors.password} className="mt-2" />
                                   </div>

                                   <div className="mt-4">
                                        <InputLabel htmlFor="password_confirmation" value="Confirm Password" is_required={true} />
                                        <TextInput
                                             id="id_password_confirmation"
                                             type="password"
                                             name="password_confirmation"
                                             value={data.password_confirmation}
                                             className="block w-full mt-1"
                                             autoComplete="new-password"
                                             onChange={(e) => setData('password_confirmation', e.target.value)}
                                             required
                                        />
                                        <InputError message={errors.password_confirmation} className="mt-2" />
                                   </div>
                                   <div className="flex justify-between">
                                        <CancelButton link={route('admin.user.index')}>Cancel</CancelButton>
                                        <PrimaryButton disabled={processing}>Update</PrimaryButton>
                                   </div>
                              </form>
                         </div>
                    </div>
               </section>
          </AdminLayout>
     );
}
