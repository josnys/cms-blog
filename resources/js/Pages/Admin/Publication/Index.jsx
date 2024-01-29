import AdminLayout from '@/Layouts/AdminLayout';
import { Head, usePage, useForm } from '@inertiajs/react';
import DataTable from '@/Pages/Admin/Components/DataTable';
import DataTableItem from '@/Pages/Admin/Components/DataTableItem';
import Icon from '@/Components/Icon';
import AddButton from '@/Pages/Admin/Components/AddButton';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import Form from '@/Pages/Admin/Publication/Form';
import Dropdown from '@/Components/Dropdown';

export default function Index({ auth }) {
     const { info } = usePage().props;
     const publications = info.publications.data;
     
     const { data, setData } = useForm({
          openModal: false,
          publication: {}
     });

     const handleModal = (e) => {
          e.preventDefault();
          toggleModal();
     }

     const toggleModal = () => {
          setData('openModal', !data.openModal);
     }

     const handleEditModal = (e, publication) => {
          e.preventDefault();
          setData((data) => ({
               ...data,
               publication: publication,
               openModal: !data.openModal
          }));
     }

     return (
          <AdminLayout
               user={auth.user}
               header={<h2 className="font-semibold leading-tight text-md text-slate-700">Admin / <span className="text-slate-500">Publications</span></h2>}
          >
               <Head title="Admin Publication" />

               <section className="w-full">
                    <div className="p-4 bg-white">
                         <div className="w-full col-span-12">
                              <div className="flex justify-between p-2 mb-2 rounded bg-slate-50">
                                   <div className="flex justify-end">
                                        {info.authorize_to.create ? <AddButton link="#" onClick={handleModal}>Add New</AddButton> : null}
                                   </div>
                              </div>
                              <DataTable header={info.header} showNoData={publications.length}>
                                   {publications.map((publication, i) => {
                                        return <tr key={`publication${i}`} className="hover:bg-slate-50">
                                             <DataTableItem>{publication.name}</DataTableItem>
                                             <DataTableItem>{publication.website}</DataTableItem>
                                             <DataTableItem>{publication.city}</DataTableItem>
                                             <DataTableItem>{publication.country}</DataTableItem>
                                             <DataTableItem>
                                                  <span className={`w-full text-center ${publication.status.value ? 'text-green-700' : 'text-red-700'}`}>{publication.status.text}</span>
                                             </DataTableItem>
                                             <DataTableItem>
                                                  <Dropdown>
                                                       <Dropdown.Trigger>
                                                            <span className="inline-flex rounded-md">
                                                                 <button
                                                                      type="button"
                                                                      className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-slate-500 hover:text-slate-700 focus:outline-none"
                                                                 >
                                                                      <Icon name={'vertical-dots'} className={'w-4 h-4'} />
                                                                 </button>
                                                            </span>
                                                       </Dropdown.Trigger>

                                                       <Dropdown.Content>
                                                            {info.authorize_to.edit ? <Dropdown.Link href={'#'} onClick={e => handleEditModal(e, publication)}>
                                                                 <Icon className={`mr-2 w-4 h-4`} name={'edit'} />Edit
                                                            </Dropdown.Link> : null}
                                                       </Dropdown.Content>
                                                  </Dropdown>
                                             </DataTableItem>
                                        </tr>
                                   })}
                              </DataTable>
                         </div>
                    </div>
                    <Modal show={data.openModal}>
                         <h2 className="p-4 text-lg font-medium text-gray-900">
                              Create / Update Publication
                         </h2>

                         <Form formSuccess={toggleModal} publicationData={data.publication} />

                         <div className="flex p-4 mt-6">
                              <SecondaryButton onClick={(e) => setData('openModal', !data.openModal)}>Cancel</SecondaryButton>
                         </div>
                    </Modal>
               </section>
          </AdminLayout>
     );
}
