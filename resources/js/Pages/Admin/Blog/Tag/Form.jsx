import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Checkbox from '@/Components/Checkbox';
import FlashMessage from '@/Components/FlashMessage';

export default function Form({ auth, formSuccess, tagData }) {
     const { data, setData, patch, post, errors, processing, reset } = useForm({
          name: tagData.name || '',
          status: tagData.status?.value || false,
     });
     
     const submit = (e) => {
          e.preventDefault();
          if (!tagData.id) {
               post(route('admin.blog.tag.store'), {
                    onSuccess: () => {
                         reset();
                         formSuccess();
                    }
               });
          } else {
               patch(route('admin.blog.tag.update', tagData.id), {
                    onSuccess: () => {
                         reset();
                         formSuccess();
                    }
               });
          }
     };

     return (
          <section className="w-full p-4">
               <FlashMessage />
               <div className="w-full col-span-12">
                    <div className="w-full p-4 bg-white rounded-md">
                         <form onSubmit={submit} className="w-full space-y-6">
                              <div>
                                   <InputLabel htmlFor="name" value="Page Name" />
                                   <TextInput
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        className="block w-full mt-1"
                                        autoComplete="name"
                                        isFocused={true}
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                   />
                                   <InputError message={errors.name} className="mt-2" />
                              </div>

                              <div className="block mt-4">
                                   <label className="flex items-center">
                                        <Checkbox
                                             name="status"
                                             checked={data.status}
                                             onChange={(e) => setData('status', !data.status)}
                                        />
                                        <span className="ml-2 text-sm text-gray-600">Is Active</span>
                                        <InputError message={errors.status} className="mt-2" />
                                   </label>
                              </div>
                              <div className="flex justify-end">
                                   <PrimaryButton disabled={processing}>{!tagData.id ? 'Save' : 'Update'}</PrimaryButton>
                              </div>
                         </form>
                    </div>
               </div>
          </section>
     );
}
