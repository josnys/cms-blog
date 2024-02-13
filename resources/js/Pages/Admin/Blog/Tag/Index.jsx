import AdminLayout from '@/Layouts/AdminLayout';
import { Head, usePage, Link, useForm } from '@inertiajs/react';
import AddButton from '@/Pages/Admin/Components/AddButton';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import Form from '@/Pages/Admin/Blog/Tag/Form';
import Pagination from '@/Components/Pagination';

export default function Index({ auth }) {
     const { info } = usePage().props;
     const tags = info.tags.data;

     const { data, setData } = useForm({
          openModal: false,
          tag: {}
     });

     const handleModal = (e) => {
          e.preventDefault();
          toggleModal();
     }

     const toggleModal = () => {
          setData('openModal', !data.openModal);
     }

     const handleEditModal = (e, tag) => {
          e.preventDefault();
          setData((data) => ({
               tag: tag,
               openModal: !data.openModal
          }));
     }

     return (
          <AdminLayout
               user={auth.user}
               header={<h2 className="font-semibold leading-tight text-md text-slate-700">Admin / <Link href={route('admin.blog.index')} className="text-slate-700">Blog</Link> / <Link href={route('admin.blog.category.index')} className="text-slate-700">Categories, Sub-Categories & Tag</Link> / <span className="text-slate-500">Tags</span></h2>}
          >
               <Head title="Admin Tags" />

               <section className="w-full">
                    <div className="p-4 bg-white">
                         <div className="w-full col-span-12">
                              <div className="p-2 mb-2 rounded bg-slate-50">
                                   <div className="flex justify-end">
                                        {info.authorize_to.create ? <AddButton link="#" onClick={handleModal}>Add New</AddButton> : null}
                                   </div>
                              </div>
                              <div className="grid grid-cols-6 gap-2">
                                   {tags.map((tag, i) => {
                                        return <Link key={`tag${i}`} href='#' onClick={e=>handleEditModal(e, tag)} className="w-full p-2 rounded bg-slate-50 hover:bg-slate-100 text-slate-600">
                                             <div className="w-full font-medium">{tag.name}</div>
                                             <div className="flex items-center justify-between w-full text-sm">Status <span className={`w-2 h-2 rounded-full ${tag.status.value?'bg-green-500':'bg-red-500'}`}></span></div>
                                        </Link>
                                   })}
                              </div>
                              <Pagination links={info.tags.meta.links} />
                         </div>
                    </div>
                    <Modal show={data.openModal}>
                         <h2 className="p-4 text-lg font-medium text-gray-900">
                              Create Tag
                         </h2>

                         <Form formSuccess={toggleModal} tagData={data.tag}/>

                         <div className="flex p-4 mt-6">
                              <SecondaryButton onClick={(e) => setData('openModal', !data.openModal)}>Cancel</SecondaryButton>
                         </div>
                    </Modal>
               </section>
          </AdminLayout>
     );
}
