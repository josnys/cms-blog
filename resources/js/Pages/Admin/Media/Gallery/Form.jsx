import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, usePage, Link, Head } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Checkbox from '@/Components/Checkbox';
import FlashMessage from '@/Components/FlashMessage';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Form({ auth }) {
     const { info } = usePage().props;
     const galleryObj = info.gallery?.data || []
     const { data, setData, put, post, errors, processing, transform } = useForm({
          medias: info.medias.data,
          name: galleryObj.name || '',
          description: galleryObj.description || '',
          status: galleryObj.status?.value || false,
          details: galleryObj.medias?.data || []
     });

     const handleAddImage = (e, index) => {
          e.preventDefault();
          let medias = data.medias;
          let details = data.details;
          let media = medias[index];
          details.push(media);
          medias.splice(index, 1);

          setData((data) => ({
               ...data,
               medias: medias,
               details: details
          }));
     }

     const handleRemoveImage = (e, index) => {
          e.preventDefault();
          let medias = data.medias;
          let details = data.details;
          let media = details[index];
          medias.push(media);
          details.splice(index, 1);

          setData((data) => ({
               ...data,
               medias: medias,
               details: details
          }));
     }

     const submit = (e) => {
          e.preventDefault();
          transform((data) => ({
               ...data,
               medias : []
          }));
          if (!galleryObj.slug) {
               post(route('admin.media.gallery.store'));
          } else {
               put(route('admin.media.gallery.update', galleryObj.slug));
          }
     };

     return (
          <AdminLayout
               user={auth.user}
               header={<h2 className="font-semibold leading-tight text-md text-slate-800">Admin / <Link href={route('admin.media.index')}>Media</Link> / <Link href={route('admin.media.gallery.index')}>Galleries</Link> / <span className="text-slate-500">Create / Update</span></h2>}
          >
               <Head title="Admin Gallery" />

               <section className="w-full p-4">
                    <FlashMessage />
                    <div className="w-full col-span-12 p-1 bg-white rounded-md">
                         <div className="grid grid-cols-2 gap-1">
                              <div className="w-full p-4">
                                   <form onSubmit={submit} className="w-full space-y-6">
                                        <div>
                                             <InputLabel htmlFor="name" value="Title" />
                                             <TextInput
                                                  id="name"
                                                  name="name"
                                                  value={data.name}
                                                  className="block w-full mt-1"
                                                  autoComplete="name"
                                                  isFocused={true}
                                                  onChange={(e) => setData('name', e.target.value)}
                                             />
                                             <InputError message={errors.name} className="mt-2" />
                                        </div>

                                        <div className="block mt-4">
                                             <InputLabel htmlFor="description" value="Description" />
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
                                        <div className="w-full">
                                             <h4>Selected Images</h4>
                                             <div className="grid grid-cols-4 gap-2">
                                                  {data.details.map((media, i) => {
                                                       return <img key={`det${i}`} className="object-cover w-full h-32" onClick={e => handleRemoveImage(e, i)} loading='egaer' src={media.url.external ? media.url.external : media.url.small} alt={media.name} />
                                                  })}
                                             </div>
                                             <InputError message={errors.details} className="mt-2" />
                                        </div>
                                        <div className="flex justify-end">
                                             <PrimaryButton disabled={processing}>{!info.gallery.slug ? 'Save' : 'Update'}</PrimaryButton>
                                        </div>
                                   </form>
                              </div>
                              <div className="grid grid-cols-4 gap-2">
                                   {data.medias.map((media, i) => {
                                        return <img key={`img${i}`} className="object-cover w-full h-32" onClick={e => handleAddImage(e, i)} loading='egaer' src={media.url.external ? media.url.external : media.url.small} alt={media.name} />
                                   })}
                              </div>
                         </div>
                    </div>
               </section>
          </AdminLayout>
     );
}
