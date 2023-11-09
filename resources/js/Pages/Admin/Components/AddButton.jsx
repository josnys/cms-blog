import Icon from "@/Components/Icon";
import { Link } from "@inertiajs/react";

export default function AddButton({ link, children, ...props }) {
     return (
          <Link
               {...props}
               className={
                    `inline-flex items-center px-4 py-2 bg-slate-200 border border-transparent rounded-md font-semibold text-xs text-slate-600 uppercase tracking-widest hover:bg-slate-300 active:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 transition ease-in-out duration-150 `}
               href={link}
          >
               <Icon name={'plus-small'} className={'mr-2 w-4 h-4'} />
               {children}
          </Link>
     );
}
