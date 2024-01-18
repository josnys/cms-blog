import { Link, usePage } from '@inertiajs/react';

const SiteTopNavigation = () => {
     const { menu, auth } = usePage().props;
     
     return (<ul className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          {menu.map((item, i) => {
               return <li key={`top-nav-${i}`} className="p-1 text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-slate-500">
                    <Link className="flex items-center" href={route('site.page', item.url)}>{item.caption}</Link>
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
     </ul>);
}

export default SiteTopNavigation;