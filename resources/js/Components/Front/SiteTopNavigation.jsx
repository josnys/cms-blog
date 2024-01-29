import { Link, usePage } from '@inertiajs/react';
import Dropdown from '@/Components/Dropdown';
import Icon from '@/Components/Icon';

const SiteTopNavigation = () => {
     const { menu, auth } = usePage().props;
     const { url } = usePage();
     const link = window.location.pathname;
     
     return (<>
          <ul className="flex-col hidden gap-2 sm:flex sm:mb-0 sm:mt-0 sm:flex-row sm:items-center sm:gap-6">
               {menu.map((item, i) => {
                    let isActive = false;
                    let _route = route('site.page', item.url);
                    let href = (item.url == '/') ? '/' : _route;
                    if (link == href) {
                         isActive = true;
                    } else {
                         isActive = (link == _route.replace(window.location.origin, '')) ? true : false;
                    }
                    
                    return <li key={`top-nav-${i}`} className={`p-1 ${isActive ? 'text-yellow-700 hover:text-yellow-900 focus:outline-slate-500' : 'text-slate-600 hover:text-slate-900 focus:outline-slate-500'} focus:outline focus:outline-2 focus:rounded-sm`}>
                         <Link className="flex items-center" href={item.is_id ? `#${item.url}` : href}>{item.caption}</Link>
                    </li>
               })}
               {auth.user ? (<Link
                    href={route('user.dashboard')}
                    className="text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-slate-500"
               >
                    Dashboard
               </Link>) : (<>
                    <Link
                         href={route('login')}
                         className="text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-slate-500"
                    >
                         Log in
                    </Link>
                    <Link
                         href={route('register')}
                         className="text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-slate-500"
                    >
                         Register
                    </Link>
               </>)
               }
          </ul>
          <div className="p-2 bg-white shadow-md md:hidden shadow-slate-100">
               <Dropdown>
                    <Dropdown.Trigger>
                         <span className="inline-flex rounded-md">
                              <button
                                   type="button"
                                   className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-slate-500 hover:text-slate-700 focus:outline-none"
                              >
                                   <Icon name={'bars-3'} className={'w-4 h-4'} />
                              </button>
                         </span>
                    </Dropdown.Trigger>

                    <Dropdown.Content>
                         {menu.map((item, i) => {
                              let _route = route('site.page', item.url);
                              let href = (item.url == '/') ? '/' : _route;
                              return <Dropdown.Link key={`m-menu-${i}`} href={item.is_id ? `#${item.url}` : href}>
                                   {item.caption}
                              </Dropdown.Link>
                         })}
                         
                         {auth.user ? <Dropdown.Link href={route('user.dashboard')} >
                              Dashboard
                         </Dropdown.Link> : null}
                         {!auth.user ? <Dropdown.Link href={route('login')} >
                              Login
                         </Dropdown.Link> : null}
                         {!auth.user ? <Dropdown.Link href={route('register')} >
                              Register
                         </Dropdown.Link> : null}
                    </Dropdown.Content>
               </Dropdown>
          </div>
     </>);
}

export default SiteTopNavigation;