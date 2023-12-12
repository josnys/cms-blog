import { forwardRef, useState, useRef } from 'react';

export default forwardRef(function FileInputShowImage({ className, name, accept, onChange }, ref) {
     const fileInput = ref ? ref : useRef();
     const [file, setFile] = useState(null);
     const [path, setPath] = useState(null);

     function browse() {
          fileInput.current.click();
     }

     function remove(e) {
          e.preventDefault();
          setFile(null);
          setPath(null);
          onChange(null, null);
          fileInput.current.value = null;
     }

     function handleFileChange(e) {
          let file = e.target.files[0];
          let path = URL.createObjectURL(e.target.files[0]);
          setFile(file);
          setPath(path);
          onChange(file, path);
     }

     return (<div className="flex items-center space-x-6">
     {path && (<div className="shrink-0">
          <img className="object-cover w-16 h-16 rounded-full" src={path} alt="Current image" />
     </div>)}
     <label className="flex items-center justify-center space-x-4">
          <input
               className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-slate-200 file:text-slate-600 hover:file:bg-slate-100"
               id={name}
               ref={fileInput}
               accept={accept}
               type="file"
               onChange={handleFileChange}
          />
               {path && (<div className="text-sm italic text-red-500" onClick={(e) => remove(e)}>Clear</div>)}
     </label>
</div>);
});