import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Checkbox from '@/Components/Checkbox';
import FlashMessage from '@/Components/FlashMessage';

export default function Form({ auth, formSuccess, pageData }) {
     const { data, setData, patch, post, errors, processing, reset } = useForm({
          name: pageData.name || '',
          show_main_menu: pageData.show_main_menu?.value || false,
          access_by_id: pageData.access_by_id?.value || false,
          status: pageData.status?.value || false,
     });
     
     const submit = (e) => {
          e.preventDefault();
          if (!pageData.slug) {
               post(route('admin.blog.page.store'), {
                    onSuccess: () => {
                         reset();
                         formSuccess();
                    }
               });
          } else {
               patch(route('admin.blog.page.update', pageData.slug), {
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
                                             name="show_main_menu"
                                             checked={data.show_main_menu}
                                             onChange={(e) => setData('show_main_menu', !data.show_main_menu)}
                                        />
                                        <span className="ml-2 text-sm text-gray-600">Show in Main Menu</span>
                                        <InputError message={errors.show_main_menu} className="mt-2" />
                                   </label>
                              </div>

                              <div className="block mt-4">
                                   <label className="flex items-center">
                                        <Checkbox
                                             name="access_by_id"
                                             checked={data.access_by_id}
                                             onChange={(e) => setData('access_by_id', !data.access_by_id)}
                                        />
                                        <span className="ml-2 text-sm text-gray-600">Display on Home Page</span>
                                        <InputError message={errors.access_by_id} className="mt-2" />
                                   </label>
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
                                   <PrimaryButton disabled={processing}>{!pageData.slug ? 'Save' : 'Update'}</PrimaryButton>
                              </div>
                         </form>
                    </div>
               </div>
          </section>
     );
}
