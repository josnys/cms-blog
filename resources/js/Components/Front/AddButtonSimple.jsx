import Icon from "@/Components/Icon";
import { Link } from "@inertiajs/react";

export default function AddButtonSimple({ link, children, ...props }) {
     return (
          <Link
               {...props}
               className={
                    `inline-flex items-center px-4 py-2 bg-white border border-slate-200 rounded-full font-semibold text-xs text-slate-600 uppercase tracking-widest hover:bg-slate-100 active:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 transition ease-in-out duration-150 `}
               href={link}
          >
               <Icon name={'plus-small'} className={'mr-2 w-4 h-4 stroke-slate-600'} />
               {children}
          </Link>
     );
}
