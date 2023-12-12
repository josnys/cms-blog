import AdminLayout from '@/Layouts/AdminLayout';
import { Head, usePage } from '@inertiajs/react';
import DataTable from '@/Pages/Admin/Components/DataTable';
import DataTableItem from '@/Pages/Admin/Components/DataTableItem';
import Dropdown from '@/Components/Dropdown';
import Icon from '@/Components/Icon';

export default function Index({ auth }) {
     const { info } = usePage().props;
     const users = info.users.data;

     return (
          <AdminLayout
               user={auth.user}
               header={<h2 className="font-semibold leading-tight text-md text-slate-700">Admin / <span className="text-slate-500">Users</span></h2>}
          >
               <Head title="Admin User" />

               <section className="w-full">
                    <div className="p-4 bg-white">
                         <div className="w-full col-span-12">
                              <div className="p-2 mb-2 rounded bg-slate-50">
                                   <div className="flex justify-end">
                                        <Dropdown>
                                             <Dropdown.Trigger>
                                                  <span className="inline-flex rounded-md">
                                                       <button
                                                            type="button"
                                                            className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-slate-500 hover:text-slate-700 focus:outline-none"
                                                       >
                                                            <Icon name={'key'} className={'mr-2 h-4 w-4'} />Authorization <Icon name={'chevron-down'} className={'ml-2 -mr-0.5 h-4 w-4'} />
                                                       </button>
                                                  </span>
                                             </Dropdown.Trigger>

                                             <Dropdown.Content>
                                                  <Dropdown.Link href={route('admin.permission.index')}>Permissions</Dropdown.Link>
                                                  <Dropdown.Link href={route('admin.role.index')}>Roles</Dropdown.Link>
                                             </Dropdown.Content>
                                        </Dropdown>
                                   </div>
                              </div>
                              <DataTable header={info.header} showNoData={users.length}>
                                   {users.map(({ username, email, related, status }, i) => {
                                        return <tr key={`usr${i}`} className="hover:bg-slate-50">
                                             <DataTableItem>{related.person.code}</DataTableItem>
                                             <DataTableItem>{related.person.fullname}</DataTableItem>
                                             <DataTableItem>{username}</DataTableItem>
                                             <DataTableItem>{email}</DataTableItem>
                                             <DataTableItem>{related.roles}</DataTableItem>
                                             <DataTableItem>
                                                  <span className={`${!status.suspended.value ? 'text-green-700' : 'text-red-700'}`}>{status.suspended.text}</span> / <span className={`${!status.banned.value ? 'text-green-700' : 'text-red-700'}`}>{status.banned.text}</span>
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
                                                            {info.authorize_to.edit?<Dropdown.Link href={route('admin.user.edit', username)}>
                                                                 <Icon className={`mr-2 w-4 h-4`} name={'edit'} />Edit
                                                            </Dropdown.Link>:null}
                                                            {info.authorize_to.assign_role?<Dropdown.Link href={route('admin.user.role.create', username)}>
                                                                 <Icon className={`mr-2 w-4 h-4`} name={'finger-print'} />Assign Roles
                                                            </Dropdown.Link>:null}
                                                            {info.authorize_to.assign_permission?<Dropdown.Link href={route('admin.user.permission.create', username)}>
                                                                 <Icon className={`mr-2 w-4 h-4`} name={'finger-print'} />Assign Permissions
                                                            </Dropdown.Link>:null}
                                                            {info.authorize_to.change_password?<Dropdown.Link href={route('admin.user.password.edit', username)}>
                                                                 <Icon className={`mr-2 w-4 h-4`} name={'key'} />Change Password
                                                            </Dropdown.Link>:null}
                                                       </Dropdown.Content>
                                                  </Dropdown>
                                             </DataTableItem>
                                        </tr>
                                   })}
                              </DataTable>
                         </div>
                    </div>
               </section>
          </AdminLayout>
     );
}
