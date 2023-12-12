import AdminLayout from '@/Layouts/AdminLayout';
import { Head, usePage, useForm, Link } from '@inertiajs/react';
import DataTable from '@/Pages/Admin/Components/DataTable';
import DataTableItem from '@/Pages/Admin/Components/DataTableItem';
import Dropdown from '@/Components/Dropdown';
import Icon from '@/Components/Icon';
import AddButton from '@/Pages/Admin/Components/AddButton';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import Form from '@/Pages/Admin/User/Role/Form';

export default function Index({ auth }) {
     const { info } = usePage().props;
     const { data, setData } = useForm({
          openModal: false,
          role: {}
     });

     const handleModal = (e) => {
          e.preventDefault();
          toggleModal();
     }

     const toggleModal = () => {
          setData('openModal', !data.openModal);
     }

     const handleEditModal = (e, role) => {
          e.preventDefault();
          setData((data) => ({
               role: role,
               openModal: !data.openModal
          }));
     }

     const roles = info.roles.data;

     return (
          <AdminLayout
               user={auth.user}
               header={<h2 className="font-semibold leading-tight text-md text-slate-700">Admin / <Link href={route('admin.user.index')}>Users</Link> / <span className="text-slate-500">Roles</span></h2>}
          >
               <Head title="Admin Roles" />

               <section className="w-full h-full overflow-visible">
                    <div className="p-4 bg-white">
                         <div className="w-full col-span-12">
                              <div className="p-2 mb-2 rounded bg-slate-50">
                                   <div className="flex justify-end">
                                        {info.authorize_to.add_new ? <AddButton link="#" onClick={handleModal}>Add New</AddButton> : null}
                                   </div>
                              </div>
                              <DataTable header={info.header} showNoData={roles.length}>
                                   {roles.map((role, i) => {
                                        return <tr key={`role${i}`} className="hover:bg-slate-50">
                                             <DataTableItem>{role.display_name}</DataTableItem>
                                             <DataTableItem>{role.slug}</DataTableItem>
                                             <DataTableItem>{role.status.text}</DataTableItem>
                                             <DataTableItem>
                                                  <Dropdown>
                                                       <Dropdown.Trigger>
                                                            <span className="inline-flex rounded-md">
                                                                 <button
                                                                      type="button"
                                                                      className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-slate-500 hover:text-slate-700 focus:outline-none"
                                                                 >
                                                                      Actions <Icon name={'vertical-dots'} className={'w-4 h-4'} />
                                                                 </button>
                                                            </span>
                                                       </Dropdown.Trigger>

                                                       <Dropdown.Content>
                                                            {info.authorize_to.edit ? <Dropdown.Link href="#" onClick={(e) => handleEditModal(e, role)}>
                                                                 <Icon className={`mr-2 w-4 h-4`} name={'edit'} />Edit
                                                            </Dropdown.Link> : null}
                                                            {info.authorize_to.assign_permission ? <Dropdown.Link href={route('admin.role.permission.create', role.slug)}>
                                                                 <Icon className={`mr-2 w-4 h-4`} name={'key'} />Assign Permissions
                                                            </Dropdown.Link>: null}
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
                              Create Role
                         </h2>

                         <Form formSuccess={toggleModal} roleData={data.role} />

                         <div className="flex p-4 mt-6">
                              <SecondaryButton onClick={(e) => setData('openModal', !data.openModal)}>Cancel</SecondaryButton>
                         </div>
                    </Modal>
               </section>
          </AdminLayout>
     );
}
