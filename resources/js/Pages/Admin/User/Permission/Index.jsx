import AdminLayout from '@/Layouts/AdminLayout';
import { Head, usePage, useForm, Link } from '@inertiajs/react';
import DataTable from '@/Pages/Admin/Components/DataTable';
import DataTableItem from '@/Pages/Admin/Components/DataTableItem';
import Dropdown from '@/Components/Dropdown';
import Icon from '@/Components/Icon';
import AddButton from '@/Pages/Admin/Components/AddButton';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import Form from '@/Pages/Admin/User/Permission/Form';

export default function Index({ auth }) {
     const { info } = usePage().props;
     const { data, setData } = useForm({
          openModal: false,
          permission: {}
     });

     const handleModal = (e) => {
          e.preventDefault();
          toggleModal();
     }

     const toggleModal = () =>{
          setData('openModal', !data.openModal);
     }

     const handleEditModal = (e, permission) => {
          e.preventDefault();
          setData((data) => ({
               permission: permission,
               openModal: !data.openModal
          }));
     }
     
     const permissions = info.permissions.data;

     return (
          <AdminLayout
               user={auth.user}
               header={<h2 className="font-semibold leading-tight text-md text-slate-700">Admin / <Link href={route('admin.user.index')}>Users</Link> / <span className="text-slate-500">Permissions</span></h2>}
          >
               <Head title="Dashboard" />

               <section className="w-full">
                    <div className="p-4 overflow-hidden bg-white">
                         <div className="w-full col-span-12">
                              <div className="p-2 mb-2 rounded bg-slate-50">
                                   <div className="flex justify-end">
                                        {info.can.add_new ? <AddButton link="#" onClick={handleModal}>Add New</AddButton> : null}
                                   </div>
                              </div>
                              <DataTable header={info.header} showNoData={permissions.length}>
                                   {permissions.map((permission, i) => {
                                        return <tr key={`perm${i}`} className="hover:bg-slate-50">
                                             <DataTableItem>{permission.display_name}</DataTableItem>
                                             <DataTableItem>{permission.slug}</DataTableItem>
                                             <DataTableItem>{permission.status.text}</DataTableItem>
                                             <DataTableItem>
                                                  {info.can.edit  ? <Dropdown>
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
                                                            <Dropdown.Link href="#" onClick={(e) => handleEditModal(e, permission)}>
                                                                 <Icon className={`mr-2 w-4 h-4`} name={'edit'} />Edit
                                                            </Dropdown.Link>
                                                       </Dropdown.Content>
                                                  </Dropdown> : null}
                                             </DataTableItem>
                                        </tr>
                                   })}
                              </DataTable>
                         </div>
                    </div>
                    <Modal show={data.openModal}>
                         <h2 className="p-4 text-lg font-medium text-gray-900">
                              Create Permission
                         </h2>

                         <Form formSuccess={toggleModal} permissionData={data.permission} />

                         <div className="flex p-4 mt-6">
                              <SecondaryButton onClick={(e) => setData('openModal', !data.openModal)}>Cancel</SecondaryButton>
                         </div>
                    </Modal>
               </section>
          </AdminLayout>
     );
}
