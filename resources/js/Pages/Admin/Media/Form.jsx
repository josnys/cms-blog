import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Checkbox from '@/Components/Checkbox';
import FileInputPreview from '@/Components/FileInputPreview';
import TextAreaInput from '@/Components/TextAreaInput';
import FlashMessage from '@/Components/FlashMessage';
import SelectInput from '@/Components/SelectInput';

export default function Form({ auth, formSuccess, mediaData, types }) {
     const url = (mediaData.url?.external) ? mediaData.url.external : mediaData.url?.name;
     const { data, setData, post, errors, processing, reset } = useForm({
          name: mediaData.name || '',
          url: url || '',
          file: null,
          selectedFile: null,
          type: mediaData.type || '',
          description: mediaData.description || '',
          external: mediaData.external?.value || false,
          status: mediaData.status?.value || false,
     });
     console.log(errors);
     function handleFileChange(file, path) {
          setData((data) => ({
               ...data,
               file: file,
               selectedFile: path
          }))
     }

     const submit = (e) => {
          e.preventDefault();
          if (!mediaData.slug) {
               post(route('admin.media.store'), {
                    onSuccess: () => {
                         reset();
                         formSuccess();
                    }
               });
          } else {
               post(route('admin.media.update', mediaData.slug), {
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
                              <div className="block mt-4">
                                   <label className="flex items-center">
                                        <Checkbox
                                             name="external"
                                             checked={data.external}
                                             onChange={(e) => setData('external', !data.external)}
                                        />
                                        <span className="ml-2 text-sm text-gray-600">External Media</span>
                                        <InputError message={errors.external} className="mt-2" />
                                   </label>
                              </div>

                              {data.external ? <div>
                                   <InputLabel htmlFor="url" value="Media URL" />
                                   <TextInput
                                        id="id_url"
                                        name="url"
                                        value={data.url}
                                        className="block w-full mt-1"
                                        isFocused={false}
                                        onChange={(e) => setData('url', e.target.value)}
                                        required
                                   />
                                   <InputError message={errors.url} className="mt-2" />
                              </div> : null}

                              {!data.external ? <div className="flex w-full">
                                   <div className={`${mediaData.url?'w-2/3':'w-full'}`}>
                                        <InputLabel htmlFor="file" value="Upload File" />
                                        <FileInputPreview
                                             id="id_file"
                                             name="file"
                                             className="block w-full mt-1"
                                             accept="image/.jpg,.jpeg,.png"
                                             value={data.file}
                                             onChange={handleFileChange}
                                        />
                                        <InputError message={errors.file} className="mt-2" />
                                   </div>
                                   {mediaData.url ? <img className="object-cover w-full" loading='egaer' src={mediaData.url.external ? mediaData.url.external : mediaData.url.small} alt={mediaData.name} />:null}
                              </div> : null}

                              <div>
                                   <InputLabel htmlFor="type" value="Type" />
                                   <SelectInput
                                        id="id_type"
                                        name="type"
                                        className="block w-full mt-1"
                                        value={data.type}
                                        errors={errors.type}
                                        onChange={e => setData('type', e.target.value)}
                                   >
                                        <option key={`tip-start`} value="">Select Type</option>
                                        {types.map((type, i) => {
                                             return <option key={`tip${i}`} value={type}>{type}</option>
                                        })}
                                   </SelectInput>
                                   <InputError message={errors.type} className="mt-2" />
                              </div>

                              <div>
                                   <InputLabel htmlFor="name" value="Media Name/Title" />
                                   <TextInput
                                        id="id_name"
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

                              <div>
                                   <InputLabel htmlFor="description" value="Description" />
                                   <TextAreaInput
                                        id="id_description"
                                        name="description"
                                        value={data.description}
                                        className="block w-full mt-1"
                                        isFocused={false}
                                        onChange={(e) => setData('description', e.target.value)}
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
                              <div className="flex justify-end">
                                   <PrimaryButton disabled={processing}>{!mediaData.slug ? 'Save' : 'Update'}</PrimaryButton>
                              </div>
                         </form>
                    </div>
               </div>
          </section>
     );
}
