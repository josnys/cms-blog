import { forwardRef, useState, useRef } from 'react';

export default forwardRef(function SelectInput({ name, className, must, errors=[], children, ...props }, ref) {
     const input = ref ? ref : useRef();

     return (<select
          id={name}
          name={name}
          {...props}
          ref={input}
          className={`form-input shadow-none appearance-none border border-slate-300 text-slate-600 text-sm rounded-lg w-full p-2 leading-tight placeholder:italic placeholder:text-slate-400 focus:outline-none focus:shadow focus:border-none focus:ring-1 ${errors.length ? 'border border-red-500' : ''}`}
     >
          {children}
     </select>)
});