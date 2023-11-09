import React, { useState, useEffect } from 'react';

export default function NetworkBoundary({ ...props }) {
     const [isOnline, setIsOnline] = useState(true);

     const onlineStatus = () => {
          setIsOnline(navigator.onLine);
     }

     useEffect(() => {
          window.addEventListener('online', onlineStatus);
          window.addEventListener('offline', onlineStatus);

          return () => {
               window.removeEventListener('online', onlineStatus);
               window.removeEventListener('offline', onlineStatus);
          }
     }, []);

     return (<>
          {(!isOnline) && <div className="flex flex-col items-center justify-center w-1/2 h-full m-auto">
               <h2 className="p-4 text-red-600 bg-red-100 rounded">Seems that you no longer have an internet connection.</h2>
               <p>{`Please, wait till your connection is back :)`}</p>
          </div>}

          {(isOnline) && props.children}
     </>);
}