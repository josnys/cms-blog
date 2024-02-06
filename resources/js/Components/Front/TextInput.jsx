import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({ type = 'text', className = '', isFocused = false, ...props }, ref) {
     const input = ref ? ref : useRef();

     useEffect(() => {
          if (isFocused) {
               input.current.focus();
          }
     }, []);

     return (
          <input
               {...props}
               type={type}
               className={
                    'border-gray-300 focus:border-yellow-700 focus:ring-yellow-700 rounded-full ' +
                    className
               }
               ref={input}
          />
     );
});
