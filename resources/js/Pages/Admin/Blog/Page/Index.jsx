import AdminLayout from '@/Layouts/AdminLayout';
import { Head, usePage, Link, useForm } from '@inertiajs/react';
import DataTable from '@/Pages/Admin/Components/DataTable';
import DataTableItem from '@/Pages/Admin/Components/DataTableItem';
import Icon from '@/Components/Icon';
import AddButton from '@/Pages/Admin/Components/AddButton';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import Form from '@/Pages/Admin/Blog/Page/Form';
import Dropdown from '@/Components/Dropdown';

export default function Index({ auth }) {
     const { info } = usePage().props;
     const pages = info.pages.data;

     const { data, setData } = useForm({
          openModal: false,
          page: {}
     });

     const handleModal = (e) => {
          e.preventDefault();
          toggleModal();
     }

     const toggleModal = () => {
          setData('openModal', !data.openModal);
     }

     const handleEditModal = (e, page) => {
          e.preventDefault();
          setData((data) => ({
               page: page,
               openModal: !data.openModal
          }));
     }

     return (
          <AdminLayout
               user={auth.user}
               header={<h2 className="font-semibold leading-tight text-md text-slate-700">Admin / <Link href={route('admin.blog.index')} className="text-slate-700">Blog</Link> / <span className="text-slate-500">Pages</span></h2>}
          >
               <Head title="Admin Pages" />

               <section className="w-full">
                    <div className="p-4 bg-white">
                         <div className="w-full col-span-12">
                              <div className="p-2 mb-2 rounded bg-slate-50">
                                   <div className="flex justify-end">
                                        {info.authorize_to.create ? <AddButton link="#" onClick={handleModal}>Add New</AddButton> : null}
                                   </div>
                              </div>
                              <DataTable header={info.header} showNoData={pages.length}>
                                   {pages.map((page, i) => {
                                        return <tr key={`page${i}`} className="hover:bg-slate-50">
                                             <DataTableItem>{page.name}</DataTableItem>
                                             <DataTableItem>{page.slug}</DataTableItem>
                                             <DataTableItem>
                                                  <span className={`w-full text-center ${page.show_main_menu.value ? 'text-green-700' : 'text-red-700'}`}>{page.show_main_menu.text}</span>
                                             </DataTableItem>
                                             <DataTableItem>
                                                  <span className={`w-full text-center ${page.access_by_id.value ? 'text-green-700' : 'text-red-700'}`}>{page.access_by_id.text}</span>
                                             </DataTableItem>
                                             <DataTableItem>
                                                  <span className={`w-full text-center ${page.status.value ? 'text-green-700' : 'text-red-700'}`}>{page.status.text}</span>
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
                                                            {info.authorize_to.edit ? <Dropdown.Link href={'#'} onClick={e=>handleEditModal(e, page)}>
                                                                 <Icon className={`mr-2 w-4 h-4`} name={'edit'} />Edit
                                                            </Dropdown.Link> : null}
                                                            {info.authorize_to.edit ? <Dropdown.Link href={route('admin.blog.page.detail.create', page.slug)}>
                                                                 <Icon className={`mr-2 w-4 h-4`} name={'news-paper'} />Details
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
                              Create Page
                         </h2>

                         <Form formSuccess={toggleModal} pageData={data.page}/>

                         <div className="flex p-4 mt-6">
                              <SecondaryButton onClick={(e) => setData('openModal', !data.openModal)}>Cancel</SecondaryButton>
                         </div>
                    </Modal>
               </section>
          </AdminLayout>
     );
}
