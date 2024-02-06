import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextAreaInput({ className = '', isFocused = false, ...props }, ref) {
     const input = ref ? ref : useRef();

     useEffect(() => {
          if (isFocused) {
               input.current.focus();
          }
     }, []);

     return (
          <div className={className}>
               <textarea
                    {...props}
                    className={
                         'border-gray-300 focus:border-yellow-700 p-4 focus:ring-yellow-700 rounded-xl ' +
                         className
                    }
                    ref={input}
               ></textarea>
          </div>
     );
});