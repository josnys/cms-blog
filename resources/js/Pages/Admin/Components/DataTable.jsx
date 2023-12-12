import React from 'react';

const TableHeader = (header) => {
     return (<thead className={`bg-slate-200`}>
          <tr>
               {header.captions.map((caption, i) => {
                    return <th key={i} className={`px-2 py-1`}>{caption}</th>
               })}
          </tr>
     </thead>)
}

export default ({ header, headerClass, showNoData, ...props }) => {
     return (
          <table className="w-full col-span-12 text-sm table-auto">
               <TableHeader captions={header} />
               <tbody className="border border-slate-200">
                    {...props.children}
                    {!showNoData && (<tr>
                         <td colSpan={header.length} className="p-3 text-center text-blue-500 bg-blue-100">No data found.</td>
                    </tr>)}
               </tbody>
          </table>
     )
}
