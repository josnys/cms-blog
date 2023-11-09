import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import classNames from 'classnames';
import Icon from '@/Components/Icon';

export default ({ icon, link, text }) => {
     const { url } = usePage();
     const isActive = url.startsWith('/admin/' + link.split('.')[1]);

     const iconClasses = classNames('w-4 h-4 mr-2', {
          'stroke-slate-500 stroke-2 fill-none': isActive,
          'stroke-slate-700 stroke-2 fill-none hover:stroke-slate-800': !isActive
     });

     const textClasses = classNames({
          'text-xs text-slate-500 font-semibold': isActive,
          'text-xs text-slate-700 hover:text-slate-800 hover:font-semibold': !isActive
     });

     return (
          <div className="mb-2">
               <Link href={route(link)} className={`grid grid-cols-1 gap-1 place-content-center text-center place-items-center group p-1 ${isActive ? 'bg-slate-100 rounded' : ''}`}>
                    <Icon name={icon} className={iconClasses} />
                    <div className={textClasses}>{text}</div>
               </Link>
          </div>
     );
};
