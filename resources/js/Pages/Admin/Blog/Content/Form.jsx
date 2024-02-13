import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Checkbox from '@/Components/Checkbox';
import FlashMessage from '@/Components/FlashMessage';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import DropDownImage from "@/Components/DropDownImage";
import SelectInput from "@/Components/SelectInput";

export default function Form({ auth, formSuccess, contentData, assetsData }) {
     
     let selectMedia = null;
     if (contentData.cover) {
          selectMedia = contentData.cover.url.external ?? contentData.cover?.url.small;
     }
     
     const { data, setData, patch, post, errors, processing, reset } = useForm({
          title: contentData.title || '',
          intro: contentData.intro || '',
          category: contentData.category?.id || '',
          subcategory: contentData.subcategory?.id || '',
          body: contentData.body || '',
          cover: contentData.cover?.id || '',
          selectedCover: selectMedia,
          status: contentData.status?.value || false,
          published: contentData.published?.data || '',
          subcategories: getSubcategories(contentData.category?.id)
     });

     function handleCover(e, media) {
          e.preventDefault();
          setData((data) => ({
               ...data,
               cover: media.id,
               selectedCover: media.url.external ?? media.url.small
          }));
     }

     function getSubcategories(categoryId) {
          if(!categoryId) {
               return [];
          }
          let category = assetsData.categories.data.find((category) => {
               if (category.id == categoryId) {
                    return category;
               }
          });

          return category.subcategories ?? [];
          
          
     }

     function handleCategory(e, value) {
          e.preventDefault();
          
          setData((data) => ({
               ...data,
               category: value,
               subcategories: getSubcategories(value)
          }));
     }

     const submit = (e) => {
          e.preventDefault();
          if (!contentData.slug) {
               post(route('admin.blog.content.store'), {
                    onSuccess: () => {
                         reset();
                         formSuccess();
                    }
               });
          } else {
               patch(route('admin.blog.content.update', contentData.slug), {
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
                                   <InputLabel htmlFor="category" value="Category" />
                                   <SelectInput
                                        id="id_category"
                                        name="category"
                                        className="block w-full mt-1"
                                        value={data.category}
                                        errors={errors.category}
                                        onChange={e => handleCategory(e, e.target.value)}
                                   >
                                        <option key={`tip-start`} value="">Select category</option>
                                        {assetsData.categories.data.map((category, i) => {
                                             return <option key={`tip${i}`} value={category.id}>{category.name}</option>
                                        })}
                                   </SelectInput>
                                   <InputError message={errors.category} className="mt-2" />
                              </div>
                              <div>
                                   <InputLabel htmlFor="subcategory" value="Sub-category" />
                                   <SelectInput
                                        id="id_subcategory"
                                        name="subcategory"
                                        className="block w-full mt-1"
                                        value={data.subcategory}
                                        errors={errors.subcategory}
                                        onChange={e => setData('subcategory', e.target.value)}
                                   >
                                        <option key={`tip-start`} value="">Select category</option>
                                        {data.subcategories.map((subcategory, i) => {
                                             return <option key={`tip${i}`} value={subcategory.id}>{subcategory.name}</option>
                                        })}
                                   </SelectInput>
                                   <InputError message={errors.subcategory} className="mt-2" />
                              </div>
                              <div>
                                   <InputLabel htmlFor="title" value="Title" />
                                   <TextInput
                                        id="title"
                                        name="title"
                                        value={data.title}
                                        className="block w-full mt-1"
                                        autoComplete="title"
                                        isFocused={true}
                                        onChange={(e) => setData('title', e.target.value)}
                                   />
                                   <InputError message={errors.title} className="mt-2" />
                              </div>

                              <div className="block mt-4">
                                   <InputLabel htmlFor="cover" value="Cover" />
                                   {data.selectedCover ? <img src={data.selectedCover} loading="eager" className="w-full" /> : null}
                                   <DropDownImage>
                                        <DropDownImage.Trigger>
                                             <span className="inline-flex rounded-md">
                                                  <button
                                                       type="button"
                                                       className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-slate-500 hover:text-slate-700 focus:outline-none"
                                                  >
                                                       Select Cover
                                                  </button>
                                             </span>
                                        </DropDownImage.Trigger>
                                        <DropDownImage.Content>
                                             <div className="grid w-full grid-cols-4 gap-2 overflow-y-auto h-96">
                                                  {assetsData.medias.data.map((media, i) => {
                                                       return <DropDownImage.Link key={`media${i}`} href="#" onClick={e => handleCover(e, media)}>
                                                            <img src={media.url.external ? media.url.external : media.url.small} loading="eager" className="w-full" />
                                                       </DropDownImage.Link>
                                                  })}
                                             </div>
                                        </DropDownImage.Content>
                                   </DropDownImage>
                                   <InputError message={errors.cover} className="mt-2" />
                              </div>

                              <div className="block mt-4">
                                   <InputLabel htmlFor="intro" value="Intro" />
                                   <CKEditor
                                        editor={ClassicEditor}
                                        data={data.intro}
                                        onChange={(event, editor) => setData('intro', editor.getData())}
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
                                   <InputError message={errors.intro} className="mt-2" />
                              </div>

                              <div className="block mt-4">
                                   <InputLabel htmlFor="body" value="Body" />
                                   <CKEditor
                                        editor={ClassicEditor}
                                        data={data.body}
                                        onChange={(event, editor) => setData('body', editor.getData())}
                                        onReady={(editor) => {
                                             editor.editing.view.change((writer) => {
                                                  writer.setStyle(
                                                       "height",
                                                       "200px",
                                                       editor.editing.view.document.getRoot()
                                                  );
                                             });
                                        }}
                                   />
                                   <InputError message={errors.body} className="mt-2" />
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

                              <div>
                                   <InputLabel htmlFor="published" value="Publishing Date" />
                                   <TextInput
                                        id="published"
                                        name="published"
                                        type="datetime-local"
                                        value={data.published}
                                        className="block w-full mt-1"
                                        autoComplete="published"
                                        isFocused={true}
                                        onChange={(e) => setData('published', e.target.value)}
                                   />
                                   <InputError message={errors.published} className="mt-2" />
                              </div>
                              <div className="flex justify-end">
                                   <PrimaryButton disabled={processing}>{!contentData.slug ? 'Save' : 'Update'}</PrimaryButton>
                              </div>
                         </form>
                    </div>
               </div>
          </section>
     );
}
