import AdminLayout from '@/Layouts/AdminLayout';
import { Head, usePage, Link, useForm } from '@inertiajs/react';
import DataTable from '@/Pages/Admin/Components/DataTable';
import DataTableItem from '@/Pages/Admin/Components/DataTableItem';
import Icon from '@/Components/Icon';
import AddButton from '@/Pages/Admin/Components/AddButton';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import Form from '@/Pages/Admin/Blog/Category/Form';
import Dropdown from '@/Components/Dropdown';

export default function Index({ auth }) {
     const { info } = usePage().props;
     const categories = info.categories.data;

     const { data, setData } = useForm({
          openModal: false,
          category: {}
     });

     const handleModal = (e) => {
          e.preventDefault();
          toggleModal();
     }

     const toggleModal = () => {
          setData('openModal', !data.openModal);
     }

     const handleEditModal = (e, category) => {
          e.preventDefault();
          setData((data) => ({
               category: category,
               openModal: !data.openModal
          }));
     }

     return (
          <AdminLayout
               user={auth.user}
               header={<h2 className="font-semibold leading-tight text-md text-slate-700">Admin / <Link href={route('admin.blog.index')} className="text-slate-700">Blog</Link> / <span className="text-slate-500">Categories, Sub-Categories & Tags</span></h2>}
          >
               <Head title="Admin Categories" />

               <section className="w-full">
                    <div className="p-4 bg-white">
                         <div className="w-full col-span-12">
                              <div className="flex justify-between p-2 mb-2 rounded bg-slate-50">
                                   <div className="flex items-center">
                                        <Link href={route('admin.blog.tag.index')} className="p-1 rounded bg-slate-200 hover:bg-slate-300 text-slate-700" >Tags</Link>
                                   </div>
                                   <div className="flex justify-end">
                                        {info.authorize_to.create ? <AddButton link="#" onClick={handleModal}>Add New</AddButton> : null}
                                   </div>
                              </div>
                              <DataTable header={info.header} showNoData={categories.length}>
                                   {categories.map((category, i) => {
                                        return <tr key={`category${i}`} className="hover:bg-slate-50">
                                             <DataTableItem>{category.name}</DataTableItem>
                                             <DataTableItem>{category.slug}</DataTableItem>
                                             <DataTableItem>
                                                  <span className={`w-full text-center ${category.show_main_menu.value ? 'text-green-700' : 'text-red-700'}`}>{category.show_main_menu.text}</span>
                                             </DataTableItem>
                                             <DataTableItem>
                                                  <span className={`w-full text-center ${category.status.value ? 'text-green-700' : 'text-red-700'}`}>{category.status.text}</span>
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
                                                            {info.authorize_to.edit ? <Dropdown.Link href={'#'} onClick={e=>handleEditModal(e, category)}>
                                                                 <Icon className={`mr-2 w-4 h-4`} name={'edit'} />Edit
                                                            </Dropdown.Link> : null}
                                                            {info.authorize_to.subs ? <Dropdown.Link href={route('admin.blog.category.subcategory.index', category.slug)} >
                                                                 <Icon className={`mr-2 w-4 h-4`} name={'rectangle-stack'} />Sub-Categories
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
                              Create Category
                         </h2>

                         <Form formSuccess={toggleModal} categoryData={data.category}/>

                         <div className="flex p-4 mt-6">
                              <SecondaryButton onClick={(e) => setData('openModal', !data.openModal)}>Cancel</SecondaryButton>
                         </div>
                    </Modal>
               </section>
          </AdminLayout>
     );
}
