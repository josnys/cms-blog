import AdminLayout from '@/Layouts/AdminLayout';
import { useForm, usePage, Link, Head } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Checkbox from '@/Components/Checkbox';
import SelectInput from '@/Components/SelectInput';
import FlashMessage from '@/Components/FlashMessage';
import SecondaryButton from '@/Components/SecondaryButton';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Form({ auth }) {
     const { info } = usePage().props;
     console.log(info.page);
     const { data, setData, post, errors, processing, transform } = useForm({
          type: '',
          gallery: '',
          content: '',
          order: '',
          status: true,
          block_display: info.page.block_display || [],
          blocks: [],
     });

     const handleAdd = (e) => {
          e.preventDefault();
          if (isEmpty(data.type) && (isEmpty(data.content) || isEmpty(data.gallery))){
               return;
          }

          let block = data.content ? info.contents.find((c) => c.id == data.content) : info.galleries.find((g) => g.id == data.gallery);
          let block_display = data.block_display;
          // Don't allow duplication.
          block_display.push({
               type: data.type,
               block: block,
               order: data.order == "" ? (block_display.length + 1) : data.order,
               status: data.status
          });

          setData((data) =>({
               ...data,
               type: '',
               gallery: '',
               content: '',
               order: '',
               status: true,
               block_display: block_display,
          }));
     }

     const handleRemove = (e, i) => {
          e.preventDefault();
          let block_display = data.block_display;
          block_display.splice(i,1);
          setData('block_display', block_display);
     }

     const isEmpty = (str) => {
          return !str.trim().length;
     }

     const submit = (e) => {
          e.preventDefault();
          let blocks = [];
          let block_display = data.block_display;
          for (let i = 0; i < block_display.length; i++){
               blocks.push({
                    type: block_display[i].type,
                    block_id: block_display[i].block.id,
                    order: block_display[i].order,
                    status: block_display[i].status
               });
          }

          transform((data) => ({
               ...data,
               type: '',
               gallery: '',
               content: '',
               order: '',
               status: false,
               block_display: [],
               blocks: blocks
          }));
          
          post(route('admin.blog.page.detail.store', info.page.slug));
     };

     return (
          <AdminLayout
               user={auth.user}
               header={<h2 className="font-semibold leading-tight text-md text-slate-800">Admin / <Link href={route('admin.blog.index')}>Blog</Link> / <Link href={route('admin.blog.page.index')}>Pages</Link> / <span className="text-slate-500">Details</span></h2>}
          >
               <Head title="Admin Gallery" />

               <section className="w-full p-4">
                    <FlashMessage />
                    <div className="flex col-span-12 p-1 bg-white rounded-md">
                         <div className="w-full p-2">
                              <form onSubmit={submit} className="flex w-full space-y-6">
                                   <div className="w-1/2 p-4">
                                        <h3 className="font-semibold text-slate-400">Page <span className="italic text-slate-600">{info.page.name}</span></h3>
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
                                                  {info.types.map((type, i) => {
                                                       return <option key={`tip${i}`} value={type}>{type}</option>
                                                  })}
                                             </SelectInput>
                                             <InputError message={errors.type} className="mt-2" />
                                        </div>
                                        {data.type == 'Content' ? <div>
                                             <InputLabel htmlFor="content" value="Contents" />
                                             <SelectInput
                                                  id="id_content"
                                                  name="content"
                                                  className="block w-full mt-1"
                                                  value={data.content}
                                                  errors={errors.content}
                                                  onChange={e => setData('content', e.target.value)}
                                             >
                                                  <option key={`con-start`} value="">Select Content</option>
                                                  {info.contents.map((content, i) => {
                                                       return <option key={`tip${i}`} value={content.id}>{content.name}</option>
                                                  })}
                                             </SelectInput>
                                             <InputError message={errors.content} className="mt-2" />
                                        </div>:null}
                                        {data.type == 'Gallery' ? <div>
                                             <InputLabel htmlFor="gallery" value="Galleries" />
                                             <SelectInput
                                                  id="id_gallery"
                                                  name="gallery"
                                                  className="block w-full mt-1"
                                                  value={data.gallery}
                                                  errors={errors.gallery}
                                                  onChange={e => setData('gallery', e.target.value)}
                                             >
                                                  <option key={`gal-start`} value="">Select Gallery</option>
                                                  {info.galleries.map((gallery, i) => {
                                                       return <option key={`tip${i}`} value={gallery.id}>{gallery.name}</option>
                                                  })}
                                             </SelectInput>
                                             <InputError message={errors.gallery} className="mt-2" />
                                        </div>:null}
                                        <div className="mt-2">
                                             <InputLabel htmlFor="order" value="Block Order" />
                                             <TextInput
                                                  id="id_order"
                                                  name="order"
                                                  value={data.order}
                                                  className="block w-full mt-1"
                                                  type="number"
                                                  isFocused={false}
                                                  onChange={(e) => setData('order', e.target.value)}
                                             />
                                             <InputError message={errors.order} className="mt-2" />
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
                                             <SecondaryButton onClick={handleAdd}>Add</SecondaryButton>
                                        </div>
                                   </div>
                                   <div className="w-1/2 p-2 rounded bg-blue-50">
                                        <ul className="w-full list-none">
                                             {data.block_display.map((block, i) => {
                                                  return <li key={`dis${i}`} className="flex justify-between w-full p-1 mt-1 border border-blue-100 rounded bg-slate-50">
                                                       <div>{`${block.order} - ${block.type} : ${block.block.name}`}</div>
                                                       <div className="flex justify-end">
                                                            <span className="p-1 text-red-500 bg-red-300 rounded cursor-pointer" onClick={e => handleRemove(e, i)}>X</span>
                                                       </div>
                                                  </li>
                                             })}
                                        </ul>
                                        <div className="flex justify-end mt-4">
                                             <PrimaryButton disabled={processing}>Save</PrimaryButton>
                                        </div>
                                   </div>
                              </form>
                         </div>
                    </div>
               </section>
          </AdminLayout>
     );
}
