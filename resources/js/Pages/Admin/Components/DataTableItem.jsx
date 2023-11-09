import React from "react";

export default ({ ...props }) => {
     return (<td className="px-2 py-1 transition duration-150 ease-in-out border-b border-b-slate-200 text-slate-700">
          {props.children}
     </td>);
}