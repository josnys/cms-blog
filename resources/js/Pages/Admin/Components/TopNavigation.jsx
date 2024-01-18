import React, { useState } from "react";
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import Icon from "@/Components/Icon";

export default ({user }) => {
     const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
     const { app } = usePage().props;

     return (<nav className="bg-white border-b border-slate-100">
          <div className="px-4 sm:px-6 lg:px-8">
               <div className="flex justify-between h-16">
                    <div className="flex">
                         <div className="flex items-center shrink-0">
                              <Link href="/">
                                   <ApplicationLogo name={app.data.name} logo={app.data.logo} logoClass={`h-14`} showName={false} className="block w-auto fill-current text-slate-800 h-9" />
                              </Link>
                         </div>

                         <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                              <NavLink href={route('admin.dashboard')} active={route().current('admin.dashboard')}>
                                   Dashboard
                              </NavLink>
                         </div>
                    </div>

                    <div className="hidden sm:flex sm:items-center sm:ml-6">
                         <div className="relative flex justify-center ml-3">
                              <div className="p-2 text-sm text-scale-400">{user.username}</div>
                              <Dropdown>
                                   <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                             <button
                                                  type="button"
                                                  className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-slate-500 hover:text-slate-700 focus:outline-none"
                                             >
                                                  {user.data.username}
                                                  <Icon name={'chevron-down'} className={'ml-2 -mr-0.5 h-4 w-4'} />
                                             </button>
                                        </span>
                                   </Dropdown.Trigger>

                                   <Dropdown.Content>
                                        <Dropdown.Link href={route('user.profile.edit')}>Profile</Dropdown.Link>
                                        <Dropdown.Link href={route('admin.to.user')}>Return Home</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">
                                             Log Out
                                        </Dropdown.Link>
                                   </Dropdown.Content>
                              </Dropdown>
                         </div>
                    </div>

                    <div className="flex items-center -mr-2 sm:hidden">
                         <button
                              onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                              className="inline-flex items-center justify-center p-2 transition duration-150 ease-in-out rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none focus:bg-slate-100 focus:text-slate-500"
                         >
                              <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                   <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                   />
                                   <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                   />
                              </svg>
                         </button>
                    </div>
               </div>
          </div>

          <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
               <div className="pt-2 pb-3 space-y-1">
                    <ResponsiveNavLink href={route('user.dashboard')} active={route().current('user.dashboard')}>
                         Dashboard
                    </ResponsiveNavLink>
               </div>

               <div className="pt-4 pb-1 border-t border-slate-200">
                    <div className="px-4">
                         <div className="text-base font-medium text-slate-800">{user.name}</div>
                         <div className="text-sm font-medium text-slate-500">{user.email}</div>
                    </div>

                    <div className="mt-3 space-y-1">
                         <ResponsiveNavLink href={route('user.profile.edit')}>Profile</ResponsiveNavLink>
                         <ResponsiveNavLink href={route('user.to.admin')}>Administration</ResponsiveNavLink>
                         <ResponsiveNavLink method="post" href={route('logout')} as="button">
                              Log Out
                         </ResponsiveNavLink>
                    </div>
               </div>
          </div>
     </nav>);
}