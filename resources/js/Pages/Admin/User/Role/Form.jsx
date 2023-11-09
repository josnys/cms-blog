import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Checkbox from '@/Components/Checkbox';
import FlashMessage from '@/Components/FlashMessage';
import { createSlug } from '@/Pages/Admin/Components/Utils';

export default function Form({ auth, formSuccess, roleData }) {
     const { data, setData, patch, post, errors, processing, transform, reset } = useForm({
          display_name: roleData.display_name || '',
          is_active: roleData.is_active || true,
          slug: roleData.slug || '',
     });

     const handleBlur = (e) => {
          e.preventDefault();
          if (!roleData.slug) {
               setData('slug', createSlug(e.target.value));
          }
     }

     const submit = (e) => {
          e.preventDefault();
          if (!roleData.slug) {
               if (!data.crud) {
                    transform((data) => ({
                         ...data,
                         permissions: [{
                              'display_name': data.display_name,
                              'slug': data.slug,
                              'is_active': data.is_active
                         }]
                    }));
               }
               post(route('admin.role.store'), {
                    onSuccess: () => {
                         reset();
                         formSuccess();
                    }
               });
          } else {
               patch(route('admin.role.update', roleData.slug), {
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
                                   <InputLabel htmlFor="display_name" value="Display Name" />
                                   <TextInput
                                        id="display_name"
                                        name="display_name"
                                        value={data.display_name}
                                        className="block w-full mt-1"
                                        autoComplete="display_name"
                                        isFocused={true}
                                        onChange={(e) => setData('display_name', e.target.value)}
                                        onBlur={handleBlur}
                                        required
                                   />
                                   <InputError message={errors.display_name} className="mt-2" />
                              </div>

                              <div>
                                   <InputLabel htmlFor="slug" value="Slug" />
                                   <TextInput
                                        id="slug"
                                        name="slug"
                                        value={data.slug}
                                        className="block w-full mt-1"
                                        autoComplete="slug"
                                        isFocused={false}
                                        onChange={(e) => setData('slug', e.target.value)}
                                        disabled={true}
                                        required
                                   />
                                   <InputError message={errors.slug} className="mt-2" />
                              </div>

                              <div className="block mt-4">
                                   <label className="flex items-center">
                                        <Checkbox
                                             name="is_active"
                                             checked={data.is_active}
                                             onChange={(e) => setData('is_active', e.target.checked)}
                                        />
                                        <span className="ml-2 text-sm text-gray-600">Active</span>
                                   </label>
                              </div>
                              <div className="flex justify-end">
                                   <PrimaryButton disabled={processing}>{!roleData.slug ? 'Save' : 'Update'}</PrimaryButton>
                              </div>
                         </form>
                    </div>
               </div>
          </section>
     );
}
