import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, usePage, Link, Head } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import FileInputPreview from '@/Components/FileInputPreview';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import FlashMessage from '@/Components/FlashMessage';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Form({ auth }) {
     const { info } = usePage().props;
     const settingObj = info.setting?.data || [];
     const { data, setData, put, post, errors, processing, transform } = useForm({
          name: settingObj.name || '',
          slogan: settingObj.slogan || '',
          description: settingObj.description || '',
          email: settingObj.email || '',
          phone: settingObj.phone || '',
          address: settingObj.address || '',
          socials: settingObj.socials || [],
          logo: null,
          selectedLogo: null,
          social_name: '',
          social_link: ''
     });

     function handleFileChange(file, path) {
          setData((data) => ({
               ...data,
               logo: file,
               selectedLogo: path
          }))
     }

     function handleAddKeys(e) {
          e.preventDefault();
          let _key = data.social_name;
          let _value = data.social_link;

          if (_key !== null && _value !== null) {
               let key_val = {
                    name: _key,
                    value: _value
               };

               let socials = data.socials;
               socials.push(key_val);
               setData((data) => ({
                    ...data,
                    socials: socials,
                    social_name: '',
                    social_link: ''
               }));
          }
          return;
     }

     function handleEditKeys(e, i) {
          e.preventDefault();
          let socials = data.socials;
          let key_val = socials[i];

          socials.splice(i, 1);

          setData((data) => ({
               ...data,
               socials: socials,
               social_name: key_val.name,
               social_link: key_val.value
          }))
     }

     const submit = (e) => {
          e.preventDefault();
          post(route('admin.setting.store'));
     };

     return (
          <AdminLayout
               user={auth.user}
               header={<h2 className="font-semibold leading-tight text-md text-slate-800">Admin / <Link href={route('admin.setting.index')}>Settings</Link> / <span className="text-slate-500">Update</span></h2>}
          >
               <Head title="Admin Setting" />

               <section className="w-full p-4">
                    <FlashMessage />
                    <div className="w-full col-span-12 p-1 bg-white rounded-md">
                         <div className="flex items-center justify-center w-full">
                              <div className="w-1/2 p-4">
                                   <form onSubmit={submit} className="w-full space-y-6">
                                        <div className="flex w-full">
                                             <div className={`${settingObj.url ? 'w-2/3' : 'w-full'}`}>
                                                  <InputLabel htmlFor="logo" value="Upload File" />
                                                  <FileInputPreview
                                                       id="id_logo"
                                                       name="logo"
                                                       className="block w-full mt-1"
                                                       accept="image/.jpg,.jpeg,.png"
                                                       value={data.logo}
                                                       onChange={handleFileChange}
                                                  />
                                                  <InputError message={errors.file} className="mt-2" />
                                             </div>
                                             {settingObj.logo ? <img className="object-cover w-full" loading='egaer' src={settingObj.logo} /> : null}
                                        </div>
                                        <div>
                                             <InputLabel htmlFor="name" value="Site Name" />
                                             <TextInput
                                                  id="id_name"
                                                  name="name"
                                                  value={data.name}
                                                  className="block w-full mt-1"
                                                  autoComplete="name"
                                                  isFocused={true}
                                                  onChange={(e) => setData('name', e.target.value)}
                                             />
                                             <InputError message={errors.name} className="mt-2" />
                                        </div>

                                        <div>
                                             <InputLabel htmlFor="slogan" value="Site Slogan" />
                                             <TextInput
                                                  id="id_slogan"
                                                  name="sogan"
                                                  value={data.sogan}
                                                  className="block w-full mt-1"
                                                  autoComplete="slogan"
                                                  isFocused={false}
                                                  onChange={(e) => setData('slogan', e.target.value)}
                                             />
                                             <InputError message={errors.slogan} className="mt-2" />
                                        </div>

                                        <div className="block mt-4">
                                             <InputLabel htmlFor="description" value="Site Description" />
                                             <CKEditor
                                                  editor={ClassicEditor}
                                                  data={data.description}
                                                  onChange={(event, editor) => setData('description', editor.getData())}
                                                  onReady={(editor) => {
                                                       editor.editing.view.change((writer) => {
                                                            writer.setStyle(
                                                                 "height",
                                                                 "100px",
                                                                 editor.editing.view.document.getRoot()
                                                            );
                                                       });
                                                  }}
                                             />
                                             <InputError message={errors.description} className="mt-2" />
                                        </div>
                                        <div>
                                             <InputLabel htmlFor="email" value="Site Email" />
                                             <TextInput
                                                  id="id_email"
                                                  name="email"
                                                  type="email"
                                                  value={data.email}
                                                  className="block w-full mt-1"
                                                  autoComplete="email"
                                                  isFocused={false}
                                                  onChange={(e) => setData('email', e.target.value)}
                                             />
                                             <InputError message={errors.email} className="mt-2" />
                                        </div>
                                        <div>
                                             <InputLabel htmlFor="phone" value="Site Phone" />
                                             <TextInput
                                                  id="id_phone"
                                                  name="phone"
                                                  value={data.phone}
                                                  className="block w-full mt-1"
                                                  autoComplete="phone"
                                                  isFocused={false}
                                                  onChange={(e) => setData('phone', e.target.value)}
                                             />
                                             <InputError message={errors.phone} className="mt-2" />
                                        </div>
                                        <div>
                                             <InputLabel htmlFor="address" value="Site Address" />
                                             <TextInput
                                                  id="id_address"
                                                  name="address"
                                                  value={data.address}
                                                  className="block w-full mt-1"
                                                  autoComplete="address"
                                                  isFocused={false}
                                                  onChange={(e) => setData('address', e.target.value)}
                                             />
                                             <InputError message={errors.address} className="mt-2" />
                                        </div>
                                        <div className="p-1 mt-4 space-x-2 rounded bg-slate-50">
                                             <InputLabel htmlFor="address" value="Site Social" />
                                             <div className="flex justify-between">
                                                  <div>
                                                       <InputLabel htmlFor="social_name" value="Name" />
                                                       <TextInput
                                                            id="id_social_name"
                                                            name="social_name"
                                                            value={data.social_name}
                                                            className="block w-full mt-1"
                                                            autoComplete="social_name"
                                                            isFocused={false}
                                                            onChange={(e) => setData('social_name', e.target.value)}
                                                       />
                                                  </div>
                                                  <div>
                                                       <InputLabel htmlFor="social_link" value="Link" />
                                                       <TextInput
                                                            id="id_social_link"
                                                            name="social_link"
                                                            value={data.social_link}
                                                            className="block w-full mt-1"
                                                            autoComplete="social_link"
                                                            isFocused={false}
                                                            onChange={(e) => setData('social_link', e.target.value)}
                                                       />
                                                  </div>
                                                  <Link href='' onClick={handleAddKeys} className="inline-flex p-2 mt-4 rounded bg-slate-100 hover:bg-slate-200 text-slate-500">Add</Link>
                                             </div>
                                        </div>
                                        {data.socials.length ? <div className="col-span-12 p-2 mt-4 rounded bg-slate-100">
                                             {data.socials.map((social, i) => {
                                                  return <div key={`kp${i}`} onClick={e => handleEditKeys(e, i)} className="flex justify-between w-full p-1 mt-1 text-sm bg-slate-200 hover:bg-slate-100">
                                                       <span className="text-slate-500">{social.name}</span>
                                                       <span>{social.value}</span>
                                                       <span className="cursor-pointer hover:underline">Edit</span>
                                                  </div>
                                             })}
                                        </div> : null}
                                        
                                        <div className="flex justify-end">
                                             <PrimaryButton disabled={processing}>{!settingObj.id ? 'Save' : 'Update'}</PrimaryButton>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
               </section>
          </AdminLayout>
     );
}
