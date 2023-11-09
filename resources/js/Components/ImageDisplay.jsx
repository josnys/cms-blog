import React from "react";
import Icon from "@/Components/Icon";

export default function ImageDisplay({image}) {
     return (
          <div className="w-full">
               {!image ? <Icon name={'user'} className={`stroke-slate-300 stroke-1`} /> : nul}
          </div>
     );
}