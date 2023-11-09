import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Checkbox from '@/Components/Checkbox';
import FlashMessage from '@/Components/FlashMessage';
import { createSlug } from '@/Pages/Admin/Components/Utils';

export default function Form({ auth, formSuccess, permissionData }) {
     const { data, setData, patch, post, errors, processing, transform, reset } = useForm({
          display_name: permissionData.display_name || '',
          is_active: permissionData.is_active || true,
          slug: permissionData.slug || '',
          crud: false,
          cruds: ['Create', 'Read', 'Update', 'Delete'],
          permissions: [],
          permission: {}
     });

     const handleBlur = (e) => {
          e.preventDefault();
          if (!permissionData.slug){
               setData('slug', createSlug(e.target.value));
          }
     }

     const handleCRUD = (e) => {
          if(data.display_name == ''){
               return;
          }
          
          let crud = !data.crud;
          let cruds = data.cruds;
          let permissions = [];
          if(crud){
               cruds.forEach(action => {
                    permissions.push({
                         'display_name': `${action} ${data.display_name}`,
                         'slug': createSlug(`${action} ${data.display_name}`),
                         'is_active': data.is_active
                    });
               });
               
          }
          setData((data) => ({
               ...data,
               permissions: permissions,
               crud: crud
          }));
     }

     const handleUncheck = (e, i) => {
          e.preventDefault();
          let permissions = data.permissions;
          permissions.splice(i,1);
          setData('permissions', permissions);
     }

     const submit = (e) => {
          e.preventDefault();
          if (!permissionData.slug){
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
               post(route('admin.permission.store'), {
                    onSuccess: () => {
                         reset();
                         formSuccess();
                    }
               });
          }else{
               patch(route('admin.permission.update', permissionData.slug), {
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

                              {!data.crud ? <div>
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
                              </div> : null}

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

                              {!permissionData.slug ? <div className="block mt-4">
                                   <label className="flex items-center">
                                        <Checkbox
                                             id="crud"
                                             name="crud"
                                             checked={data.crud}
                                             onChange={(e) => handleCRUD(e)}
                                        />
                                        <span className="ml-2 text-sm text-gray-600">Make CRUD</span>
                                   </label>
                              </div> : null}

                              {data.crud ? <div className="block mt-4">
                                   {data.permissions.map((permiss, i) => {
                                        return <label key={`permlist${i}`} className="flex items-center mt-2">
                                             <Checkbox
                                                  name="permissions[]"
                                                  id="permissions[]"
                                                  checked={permiss.is_active}
                                                  onChange={(e) => handleUncheck(e, i)}
                                             />
                                             <span className="ml-2 text-sm text-gray-600">{permiss.display_name}</span>
                                        </label>
                                   })}
                              </div> : null}
                              <div className="flex justify-end">
                                   <PrimaryButton disabled={processing}>{!permissionData.slug ?'Save':'Update'}</PrimaryButton>
                              </div>
                         </form>
                    </div>
               </div>
          </section>
     );
}
