import Modal from '@/Components/Modal';
import ImageDisplay from '@/Components/ImageDisplay'; 
import { useForm } from '@inertiajs/react';
import Icon from '@/Components/Icon';
import format from 'date-fns/format';
import Dropdown from '@/Components/Dropdown';
import UpdateProfileInformationForm from '@/Pages/Profile/Partials/UpdateProfileInformationForm';
import UpdatePasswordForm from '@/Pages/Profile/Partials/UpdatePasswordForm';
import DeleteUserForm from '@/Pages/Profile/Partials/DeleteUserForm';
import SecondaryButton from '@/Components/SecondaryButton';

export default function Profile({ profile, mustVerifyEmail, status }) {
     const _profile = profile.data;
     const { data, setData } = useForm({
          openProfileModal: false,
          openPasswordModal: false,
          openDeleteModal: false,
     });

     const handleModal = (e, option) => {
          e.preventDefault();
          setData((data) => ({
               ...data,
               [option]: !data[option]
          }));
     }
     
     return (
          <div className="w-full md:flex md:space-y-2">
               <div className="w-1/4 p-4 mx-auto rounded-full md:mx-0 bg-slate-50 ring-4 ring-slate-100 ring-offset-2">
                    <ImageDisplay image={_profile.related.person.avatar.small} />
               </div>
               <div className="w-full p-4 space-y-4 md:w-3/4">
                    <h1 className="w-full text-xl font-semibold text-center md:text-start md:text-3xl text-slate-600">
                         {_profile.related.person.fullname} • <span className="text-xl text-slate-400">{_profile.username}</span>
                         <div className="float-right">
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
                                        <Dropdown.Link href={'#'} onClick={(e) => handleModal(e, 'openProfileModal')}>
                                             <Icon className={`mr-2 w-4 h-4`} name={'edit'} />Edit
                                        </Dropdown.Link>
                                        <Dropdown.Link href={'#'} onClick={(e) => handleModal(e, 'openPasswordModal')}>
                                             <Icon className={`mr-2 w-4 h-4`} name={'key'} />Change Password
                                        </Dropdown.Link>
                                        <Dropdown.Link href={'#'} onClick={(e) => handleModal(e, 'openDeleteModal')} className="text-red-600 bg-red-200">
                                             <Icon className={`mr-2 w-4 h-4 text-red-600`} name={'key'} />Delete Account
                                        </Dropdown.Link>
                                   </Dropdown.Content>
                              </Dropdown>
                         </div>
                    </h1>
                    <div className="w-full p-2 text-sm italic rounded-lg bg-slate-100 md:rounded-none md:bg-transparent">
                         <span className="flex text-slate-600">
                              <Icon name={'mail'} className={'mr-2 w-4 h-4 stroke-slate-500 stroke-1'} />{_profile.email}
                         </span>
                         {_profile.related.person.dob ? <span className="flex mt-2 text-slate-600">
                              <Icon name={'cake'} className={'mr-2 w-4 h-4 stroke-slate-500 stroke-1'} />{format(new Date(_profile.related.person.dob), 'MMMM d, yyyy')}
                         </span> : null}
                         {_profile.related.roles ? <span className="flex mt-2 text-slate-600">
                              <Icon name={'key'} className={'mr-2 w-4 h-4 stroke-slate-500 stroke-1'} />{_profile.related.roles}
                         </span> : null}
                    </div>
                    <p className="text-lg text-slate-500">{_profile.related.person.bio}</p>
               </div>

               <Modal show={data.openProfileModal}>
                    <div className="p-4">
                         <UpdateProfileInformationForm
                              mustVerifyEmail={mustVerifyEmail}
                              status={status}
                              className="max-w-xl"
                              profile={profile}
                              formSuccess={(e) => setData('openProfileModal', !data.openProfileModal)}
                         />
                    </div>
                    
                    <div className="flex p-4 mt-6">
                         <SecondaryButton onClick={(e) => setData('openProfileModal', !data.openProfileModal)}>Cancel</SecondaryButton>
                    </div>
               </Modal>

               <Modal show={data.openPasswordModal}>
                    <div className="p-4">
                         <UpdatePasswordForm 
                              className="max-w-xl"
                              formSuccess={(e) => setData('openPasswordModal', !data.openPasswordModal)} 
                         />
                    </div>

                    <div className="flex p-4 mt-6">
                         <SecondaryButton onClick={(e) => setData('openPasswordModal', !data.openPasswordModal)}>Cancel</SecondaryButton>
                    </div>
               </Modal>

               <Modal show={data.openDeleteModal}>
                    <div className="p-4">
                         <DeleteUserForm 
                              className="max-w-xl"
                              formSuccess={(e) => setData('openDeleteModal', !data.openDeleteModal)} 
                         />
                    </div>

                    <div className="flex p-4 mt-6">
                         <SecondaryButton onClick={(e) => setData('openDeleteModal', !data.openDeleteModal)}>Cancel</SecondaryButton>
                    </div>
               </Modal>
          </div>
     );
}