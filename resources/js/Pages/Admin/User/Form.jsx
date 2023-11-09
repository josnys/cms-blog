import AdminLayout from '@/Layouts/AdminLayout';
import { Head, usePage, useForm, Link } from '@inertiajs/react'; 
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import TextAreaInput from '@/Components/TextAreaInput';
import Checkbox from '@/Components/Checkbox';
import FlashMessage from '@/Components/FlashMessage';
import CancelButton from '@/Components/CancelButton';

export default function Form({ auth }) {
     const { info } = usePage().props;
     const user = info.user.data;

     const { data, setData, patch, errors, processing } = useForm({
          firstname: user.related.person.firstname || '',
          lastname: user.related.person.lastname || '',
          dob: user.related.person.dob || '',
          bio: user.related.person.bio || '',
          suspended: user.status.suspended.value || false,
          banned: user.status.banned.value || false
     });

     const submit = (e) => {
          e.preventDefault();

          patch(route('admin.user.update', user.username));
     };

     return (
          <AdminLayout
               user={auth.user}
               header={<h2 className="font-semibold leading-tight text-md text-slate-700">Admin / <Link href={route('admin.user.index')} className="text-slate-700">Users</Link> / <span className="text-slate-500">Edit</span></h2>}
          >
               <Head title="Dashboard" />

               <section className="w-full">
                    <FlashMessage />
                    <div className="flex w-full col-span-12 p-4 overflow-hidden">
                         <div className="w-1/2"></div>
                         <div className="w-1/2 p-4 bg-white rounded-md">
                              <form onSubmit={submit} className="mt-6 space-y-6">
                                   <div>
                                        <InputLabel htmlFor="name" value="First Name" />
                                        <TextInput
                                             id="id_firstname"
                                             name="firstname"
                                             value={data.firstname}
                                             className="block w-full mt-1"
                                             autoComplete="firstname"
                                             isFocused={true}
                                             onChange={(e) => setData('firstname', e.target.value)}
                                             required
                                        />
                                        <InputError message={errors.firstname} className="mt-2" />
                                   </div>

                                   <div className="mt-4">
                                        <InputLabel htmlFor="lastname" value="Last Name" />
                                        <TextInput
                                             id="id_lastname"
                                             name="lastname"
                                             value={data.lastname}
                                             className="block w-full mt-1"
                                             autoComplete="lastname"
                                             isFocused={false}
                                             onChange={(e) => setData('lastname', e.target.value)}
                                        />
                                        <InputError message={errors.lastname} className="mt-2" />
                                   </div>

                                   <div className="mt-4">
                                        <InputLabel htmlFor="dob" value="Date of Birth" />
                                        <TextInput
                                             id="id_dob"
                                             name="dob"
                                             type="date"
                                             value={data.dob}
                                             className="block w-full mt-1"
                                             autoComplete="dob"
                                             isFocused={false}
                                             onChange={(e) => setData('dob', e.target.value)}
                                        />
                                        <InputError message={errors.dob} className="mt-2" />
                                   </div>

                                   <div>
                                        <InputLabel htmlFor="bio" value="Bio" />
                                        <TextAreaInput
                                             id="id_bio"
                                             name="bio"
                                             value={data.bio}
                                             className="block w-full mt-1"
                                             isFocused={false}
                                             onChange={(e) => setData('bio', e.target.value)}
                                        />
                                        <InputError message={errors.bio} className="mt-2" />
                                   </div>

                                   <div className="block mt-4">
                                        <label className="flex items-center">
                                             <Checkbox
                                                  name="suspended"
                                                  checked={data.suspended}
                                                  onChange={(e) => setData('suspended', e.target.checked)}
                                             />
                                             <span className="ml-2 text-sm text-gray-600">Suspend User</span>
                                        </label>
                                   </div>

                                   <div className="block mt-4">
                                        <label className="flex items-center">
                                             <Checkbox
                                                  name="banned"
                                                  checked={data.banned}
                                                  onChange={(e) => setData('banned', e.target.checked)}
                                             />
                                             <span className="ml-2 text-sm text-gray-600">Ban User</span>
                                        </label>
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
