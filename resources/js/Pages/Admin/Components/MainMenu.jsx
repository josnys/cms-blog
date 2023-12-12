import React from "react";
import MainMenuItem from "@/Pages/Admin/Components/MainMenuItem";

export default ({user, className}) => {
     return (
          <div className={className}>
               <MainMenuItem icon={'home'} link={'admin.dashboard'} text={'Dashboard'} />
               <MainMenuItem icon={'user-group'} link={'admin.user.index'} text={'Users'} />
               <MainMenuItem icon={'news-paper'} link={'admin.blog.index'} text={'Blog'} />
               <MainMenuItem icon={'photo'} link={'admin.media.index'} text={'Media'} />
          </div>
     );
}