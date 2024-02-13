import AdminLayout from '@/Layouts/AdminLayout';
import { Head, usePage, Link, useForm } from '@inertiajs/react';
import DataTable from '@/Pages/Admin/Components/DataTable';
import DataTableItem from '@/Pages/Admin/Components/DataTableItem';
import Icon from '@/Components/Icon';
import AddButton from '@/Pages/Admin/Components/AddButton';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import Form from '@/Pages/Admin/Blog/Category/Subs/Form';
import Dropdown from '@/Components/Dropdown';
import Pagination from '@/Components/Pagination';

export default function Index({ auth }) {
     const { info } = usePage().props;
     const subcategories = info.subcategories.data;

     const { data, setData } = useForm({
          openModal: false,
          subcategory: {}
     });

     const handleModal = (e) => {
          e.preventDefault();
          toggleModal();
     }

     const toggleModal = () => {
          setData('openModal', !data.openModal);
     }

     const handleEditModal = (e, subcategory) => {
          e.preventDefault();
          setData((data) => ({
               subcategory: subcategory,
               openModal: !data.openModal
          }));
     }

     return (
          <AdminLayout
               user={auth.user}
               header={<h2 className="font-semibold leading-tight text-md text-slate-700">Admin / <Link href={route('admin.blog.index')} className="text-slate-700">Blog</Link> / <Link href={route('admin.blog.category.index')} className="text-slate-700">Categories, Sub-Categories & Tags</Link> / <span className="text-slate-500">Sub-Categories</span></h2>}
          >
               <Head title="Admin Sub-Categories" />

               <section className="w-full">
                    <div className="p-4 bg-white">
                         <div className="w-full col-span-12">
                              <div className="flex items-center justify-between p-2 mb-2 rounded bg-slate-50">
                                   <div className="font-semibold text-slate-600">
                                       {`Category : ${info.category.name}`} 
                                   </div>
                                   <div className="flex justify-end">
                                        {info.authorize_to.create ? <AddButton link="#" onClick={handleModal}>Add New</AddButton> : null}
                                   </div>
                              </div>
                              <DataTable header={info.header} showNoData={subcategories.length}>
                                   {subcategories.map((subcategory, i) => {
                                        return <tr key={`subcategory${i}`} className="hover:bg-slate-50">
                                             <DataTableItem>{subcategory.name}</DataTableItem>
                                             <DataTableItem>{subcategory.slug}</DataTableItem>
                                             <DataTableItem>
                                                  <span className={`w-full text-center ${subcategory.show_main_menu.value ? 'text-green-700' : 'text-red-700'}`}>{subcategory.show_main_menu.text}</span>
                                             </DataTableItem>
                                             <DataTableItem>
                                                  <span className={`w-full text-center ${subcategory.status.value ? 'text-green-700' : 'text-red-700'}`}>{subcategory.status.text}</span>
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
                                                            {info.authorize_to.edit ? <Dropdown.Link href={'#'} onClick={e=>handleEditModal(e, subcategory)}>
                                                                 <Icon className={`mr-2 w-4 h-4`} name={'edit'} />Edit
                                                            </Dropdown.Link> : null}
                                                       </Dropdown.Content>
                                                  </Dropdown>
                                             </DataTableItem>
                                        </tr>
                                   })}
                              </DataTable>
                              <Pagination links={info.subcategories.meta.links} />
                         </div>
                    </div>
                    <Modal show={data.openModal}>
                         <h2 className="p-4 text-lg font-medium text-slate-900">
                              Create Sub-Category for <span className="italic font-light text-slate-700">{info.category.name}</span>
                         </h2>

                         <Form formSuccess={toggleModal} categoryData={info.category} subcategoryData={data.subcategory}/>

                         <div className="flex p-4 mt-6">
                              <SecondaryButton onClick={(e) => setData('openModal', !data.openModal)}>Cancel</SecondaryButton>
                         </div>
                    </Modal>
               </section>
          </AdminLayout>
     );
}
