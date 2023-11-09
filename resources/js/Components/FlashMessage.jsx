import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import classNames from 'classnames';

const IconSuccess = () => (
     <svg className="flex-shrink-0 w-6 h-6 ml-4 mr-2 text-green-50 fill-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
     </svg>
);

const IconDanger = () => (
     <svg className="flex-shrink-0 w-6 h-6 ml-4 mr-2 text-red-50 fill-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
     </svg>
);

const IconWarning = () => (
     <svg className="flex-shrink-0 w-6 h-6 ml-4 mr-2 text-yellow-50 fill-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
     </svg>

);

const IconInfo = () => (
     <svg className="flex-shrink-0 w-6 h-6 ml-4 mr-2 text-blue-50 fill-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
     </svg>

);

const ButtonClose = ({ color, onClick }) => {
     const className = classNames('block  w-2 h-2 fill-current', {
          'text-red-700 group-hover:text-red-800': color === 'red',
          'text-green-700 group-hover:text-green-800': color === 'green',
          'text-yellow-700 group-hover:text-yellow-800': color === 'yellow',
          'text-blue-700 group-hover:text-blue-800': color === 'blue'
     });
     return (
          <button
               onClick={onClick}
               type="button"
               className="p-2 mr-2 focus:outline-none group"
          >
               <svg
                    className={className}
                    xmlns="http://www.w3.org/2000/svg"
                    width="235.908"
                    height="235.908"
                    viewBox="278.046 126.846 235.908 235.908"
               >
                    <path d="M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z" />
               </svg>
          </button>
     );
};

export default () => {
     const [visible, setVisible] = useState(true);
     const { flash, errors } = usePage().props;
     const numOfErrors = Object.keys(errors).length;

     useEffect(() => {
          setVisible(true);
     }, [flash, errors]);

     return (
          <div>
               {flash.success && visible && (
                    <div className="flex items-center justify-between max-w-3xl mx-auto bg-green-500 rounded">
                         <div className="flex items-center">
                              <IconSuccess />
                              <div className="py-4 text-sm font-medium text-white">
                                   {flash.success}
                              </div>
                         </div>
                         <ButtonClose onClick={() => setVisible(false)} color="green" />
                    </div>
               )}
               {(flash.error || numOfErrors > 0) && visible && (
                    <div className="flex items-center justify-between max-w-3xl mx-auto bg-red-500 rounded">
                         <div className="flex items-center">
                              <IconDanger />
                              <div className="py-4 text-sm font-medium text-white">
                                   {flash.error && flash.error}
                                   {numOfErrors === 1 && 'There is one form error'}
                                   {numOfErrors > 1 && `There are ${numOfErrors} form errors.`}
                              </div>
                         </div>
                         <ButtonClose onClick={() => setVisible(false)} color="red" />
                    </div>
               )}
               {flash.warning && visible && (
                    <div className="flex items-center justify-between max-w-3xl mx-auto bg-yellow-500 rounded">
                         <div className="flex items-center">
                              <IconWarning />
                              <div className="py-4 text-sm font-medium text-yellow-700">
                                   {flash.warning && flash.warning}
                                   {numOfErrors === 1 && 'There is one form error'}
                                   {numOfErrors > 1 && `There are ${numOfErrors} form errors.`}
                              </div>
                         </div>
                         <ButtonClose onClick={() => setVisible(false)} color="yellow" />
                    </div>
               )}
               {flash.info && visible && (
                    <div className="flex items-center justify-between max-w-3xl mx-auto bg-blue-200 rounded">
                         <div className="flex items-center">
                              <IconInfo />
                              <div className="py-4 text-sm font-medium text-blue-700">
                                   {flash.info}
                              </div>
                         </div>
                         <ButtonClose onClick={() => setVisible(false)} color="blue" />
                    </div>
               )}
          </div>
     );
};
