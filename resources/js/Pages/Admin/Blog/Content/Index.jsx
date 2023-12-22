import AdminLayout from '@/Layouts/AdminLayout';
import { Head, Link, usePage, useForm } from '@inertiajs/react';
import AddButton from '@/Pages/Admin/Components/AddButton';
import Modal from '@/Components/Modal';
import Form from '@/Pages/Admin/Blog/Content/Form';
import SecondaryButton from '@/Components/SecondaryButton';

export default function Index({ auth }) {
     const { info } = usePage().props;
     
     const { data, setData } = useForm({
          openModal: false,
          content: {}
     });

     const handleModal = (e) => {
          e.preventDefault();
          toggleModal();
     }

     const toggleModal = () => {

          setData((data) => ({
               ...data,
               openModal: !data.openModal,
               content: data.openModal ? data.content : {}
          }));
     }

     const handleEditModal = (e, content) => {
          e.preventDefault();

          if (!info.authorize_to.edit) {
               return;
          }

          setData((data) => ({
               content: content,
               openModal: !data.openModal
          }));
     }

     return (
          <AdminLayout
               user={auth.user}
               header={<h2 className="font-semibold leading-tight text-md text-slate-700">Admin / <Link href={route('admin.blog.index')} className="text-slate-700">Blog</Link> / <span className="text-slate-500">Contents</span></h2>}
          >
               <Head title="Admin Blogs" />

               <section className="w-full">
                    <div className="overflow-hidden bg-white">
                         <div className="w-full p-2 m-2 rounded bg-slate-50">
                              <div className="flex justify-end">
                                   {info.authorize_to.create ? <AddButton link="#" onClick={handleModal}>Add New</AddButton> : null}
                              </div>
                         </div>

                         <div className="grid grid-cols-4 gap-2 p-2">
                              {info.contents.data.map((content, i) => {
                                   return <div className={`p-2 border rounded bg-slate-50 border-slate-100 hover:shadow-md ${info.authorize_to.edit ? 'cursor-pointer' : ''}`} key={`content${i}`} onClick={e => handleEditModal(e, content)}>
                                        <div className="w-full mt-1 text-sm text-slate-500">
                                             {content.cover ? <img src={content.cover.url.external ?? content.cover.url.small} className="object-cover object-center w-full h-24" alt={content.cover.name} /> : null}
                                             <h4 className="flex items-center mt-2 font-semibold text-md">{content.title} <span className={`w-2 h-2 rounded-full ml-2 ${content.status.value ? 'bg-green-500' : 'bg-red-500'}`}></span></h4>
                                             <div className="mt-2 font-normal text-justify line-clamp-3" dangerouslySetInnerHTML={{ __html: content.intro }}></div>
                                             <p className="flex justify-between p-2 mt-2 font-medium border-t border-t-slate-400">
                                                  <span>By: {content.user.username}</span>
                                                  <span className="text-right">Published: {content.published.text}</span>
                                             </p>
                                        </div>
                                   </div>
                              })}
                         </div>
                    </div>
               </section>
               <Modal show={data.openModal} maxWidth='4xl'>
                    <h2 className="p-4 text-lg font-medium text-gray-900">
                         Create / Update Content
                    </h2>

                    <Form formSuccess={toggleModal} contentData={data.content} assetsData={info.assets} />

                    <div className="flex p-4">
                         <SecondaryButton onClick={(e) => setData('openModal', !data.openModal)}>Cancel</SecondaryButton>
                    </div>
               </Modal>
          </AdminLayout>
     );
}
