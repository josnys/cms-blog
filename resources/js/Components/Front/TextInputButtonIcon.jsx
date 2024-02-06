import { forwardRef, useEffect, useRef } from 'react';
import Icon from '@/Components/Icon';

export default forwardRef(function TextInputButtonIcon({ type = 'text', icon = '', className = '', isFocused = false, disabled = false, ...props }, ref) {
     const input = ref ? ref : useRef();

     useEffect(() => {
          if (isFocused) {
               input.current.focus();
          }
     }, []);

     return (
          <div className="flex items-center justify-center w-full p-1 space-x-2 bg-white border rounded-full border-slate-300">
               <input
                    {...props}
                    type={type}
                    className={
                         'appearance-none border-0 rounded-l-full w-4/5 focus:ring-0 ' +
                         className
                    }
                    ref={input}
               />
               <div className="flex justify-end w-1/5">
                    <button
                         {...props}
                         className={
                              `inline-flex justify-center items-center w-10 h-10 p-2 bg-yellow-800 border border-transparent rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-yellow-700 focus:bg-yellow-700 active:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition ease-in-out duration-150 ${disabled && 'opacity-25'
                              } ` + className
                         }
                         disabled={disabled}
                    >
                         <Icon name={icon} className={'w-4 h-4 stroke-white stroke-2'} />
                    </button>
               </div>
          </div>
     );
});
