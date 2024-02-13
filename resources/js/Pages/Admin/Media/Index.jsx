import AdminLayout from '@/Layouts/AdminLayout';
import { Head, usePage, useForm, Link } from '@inertiajs/react';
import AddButton from '@/Pages/Admin/Components/AddButton';
import Modal from '@/Components/Modal';
import Form from '@/Pages/Admin/Media/Form';
import SecondaryButton from '@/Components/SecondaryButton';
import Pagination from '@/Components/Pagination';

export default function Index({ auth }) {
     const { info } = usePage().props;
     
     const { data, setData } = useForm({
          openModal: false,
          media: {}
     });
     
     const handleModal = (e) => {
          e.preventDefault();
          toggleModal();
     }

     const toggleModal = () => {

          setData((data) => ({
               ...data,
               openModal: !data.openModal,
               media: data.openModal ? data.media : {}
          }));
     }

     const handleEditModal = (e, media) => {
          e.preventDefault();
          
          if (!info.authorize_to.edit){
               return;
          }

          setData((data) => ({
               media: media,
               openModal: !data.openModal
          }));
     }

     return (
          <AdminLayout
               user={auth.user}
               header={<h2 className="font-semibold leading-tight text-md text-slate-800">Admin / Media / <span className="text-slate-500">Dashboard</span></h2>}
          >
               <Head title="Admin Blogs" />

               <section className="w-full">
                    <div className="overflow-hidden bg-white">
                         <div className="flex justify-between p-2 mb-2 rounded bg-slate-50">
                              <div className="flex items-center">
                                   {info.authorize_to.gallery ?<Link href={route('admin.media.gallery.index')} className="p-1 rounded bg-slate-200 hover:bg-slate-300 text-slate-700" >Galleries</Link>:null}
                              </div>
                              <div className="flex justify-end">
                                   {info.authorize_to.create ? <AddButton link="#" onClick={handleModal}>Add New</AddButton> : null}
                              </div>
                         </div>
                         
                         <div className="grid grid-cols-6 gap-2 p-2">
                              {info.medias.data.map((media, i) => {
                                   return <div className={`p-2 border rounded bg-slate-50 border-slate-100 hover:shadow-md ${info.authorize_to.edit ?'cursor-pointer':''}`} key={`media${i}`} onClick={e => handleEditModal(e,media)}>
                                        <img className="object-cover w-full h-32" loading='egaer' src={ media.url.external ? media.url.external : media.url.small} alt={ media.name } />
                                        <div className="w-full mt-1 text-xs text-slate-500">
                                             <h4 className="flex items-center font-semibold">{media.name} <span className={`w-2 h-2 rounded-full ml-2 ${media.status.value?'bg-green-500':'bg-red-500'}`}></span></h4>
                                             <p className="mt-2 font-normal line-clamp-2">{media.description}</p>
                                        </div>
                                   </div>
                              })}
                         </div>
                         <Pagination links={info.medias.meta.links} />
                    </div>
               </section>
               <Modal show={data.openModal}>
                    <h2 className="p-4 text-lg font-medium text-gray-900">
                         Manage Media
                    </h2>

                    <Form formSuccess={toggleModal} mediaData={data.media} types={info.types} />

                    <div className="flex p-4">
                         <SecondaryButton onClick={(e) => setData('openModal', !data.openModal)}>Cancel</SecondaryButton>
                    </div>
               </Modal>
          </AdminLayout>
     );
}
