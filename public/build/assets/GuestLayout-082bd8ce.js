import{q as m,a as e,d as a,e as u}from"./index-4af2f7f3.js";import{A as x}from"./ApplicationLogo-1785afe5.js";import{D as d}from"./Dropdown-7d9b658b.js";import{I as h}from"./Icon-5b0a4ec5.js";const p=()=>{const{menu:l,auth:r}=m().props,o=window.location.pathname;return e.jsxs(e.Fragment,{children:[e.jsxs("ul",{className:"flex-col hidden gap-2 sm:flex sm:mb-0 sm:mt-0 sm:flex-row sm:items-center sm:gap-6",children:[l.map((s,t)=>{let n=!1,i=route("site.page",s.url),c=s.url=="/"?"/":i;return o==c?n=!0:n=o==i.replace(window.location.origin,""),e.jsx("li",{className:`p-1 ${n?"text-yellow-700 hover:text-yellow-900 focus:outline-slate-500 font-semibold":"text-slate-600 hover:text-slate-900 focus:outline-slate-500"} focus:outline focus:outline-2 focus:rounded-sm`,children:e.jsx(a,{className:"flex items-center",href:s.is_id?`#${s.url}`:c,children:s.caption})},`top-nav-${t}`)}),r.user?e.jsx(a,{href:route("user.dashboard"),className:"text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-slate-500",children:"Dashboard"}):e.jsx(e.Fragment,{children:e.jsx(a,{href:route("login"),className:"text-gray-600 hover:text-gray-900 focus:outline focus:outline-2 focus:rounded-sm focus:outline-slate-500",children:"Log in"})})]}),e.jsx("div",{className:"p-2 bg-white shadow-md md:hidden shadow-slate-100",children:e.jsxs(d,{children:[e.jsx(d.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsx("button",{type:"button",className:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-slate-500 hover:text-slate-700 focus:outline-none",children:e.jsx(h,{name:"bars-3",className:"w-4 h-4"})})})}),e.jsxs(d.Content,{children:[l.map((s,t)=>{let n=route("site.page",s.url),i=s.url=="/"?"/":n;return e.jsx(d.Link,{href:s.is_id?`#${s.url}`:i,children:s.caption},`m-menu-${t}`)}),r.user?e.jsx(d.Link,{href:route("user.dashboard"),children:"Dashboard"}):null,r.user?null:e.jsx(d.Link,{href:route("login"),children:"Login"})]})]})})]})},g=p;function w({appData:l,copyrightYear:r}){function o(s){let t={logo:"",bg:""};switch(s.toLowerCase()){case"twitter":t={logo:"stroke-white",bg:""};break;case"facebook":t={logo:"fill-white stroke-blue-900",bg:"bg-blue-900 p-2"};break;case"instagram":t={logo:"stroke-white stroke-1",bg:""};break;case"tiktok":t={logo:"fill-white",bg:""};break;case"youtube":t={logo:"fill-red-700",bg:"bg-gray-100 p-2"};break;default:t={logo:"stroke-slate-500",bg:""};break}return t}return e.jsx("footer",{className:"w-full p-2 bg-white md:p-8",children:e.jsxs("div",{className:"w-full border-t md:container md:mx-auto border-slate-200",children:[e.jsxs("div",{className:"w-full pt-4 md:grid md:grid-cols-3 md:gap-1 md:pt-8",children:[e.jsx("h1",{className:"font-bold text-yellow-700 uppercase",children:l.name}),e.jsxs("div",{className:"hidden md:flex md:justify-between text-slate-600",children:[e.jsx(a,{href:route("site.page","we-are-hiring"),className:"w-full md:w-auto hover:underline",children:"Enpak Social Internship Program"}),e.jsx(a,{href:route("site.page","terms-of-use"),className:"w-full md:w-auto hover:underline",children:"Terms of use"}),e.jsx("a",{target:"_blank",href:route("site.download","Enpak-Media-Press-Kit-1.pdf"),className:"w-full md:w-auto hover:underline",children:"Enpak Media Kit"})]}),e.jsxs("ul",{className:"block mt-4 md:hidden",children:[e.jsx("li",{children:e.jsx(a,{href:route("site.page","we-are-hiring"),className:"w-full md:w-auto hover:underline",children:"Enpak Social Internship Program"})}),e.jsx("li",{children:e.jsx(a,{href:route("site.page","terms-of-use"),className:"w-full md:w-auto hover:underline",children:"Terms of use"})}),e.jsx("li",{children:e.jsx("a",{target:"_blank",href:route("site.download","Enpak-Media-Press-Kit-1.pdf"),className:"w-full md:w-auto hover:underline",children:"Enpak Media Kit"})})]}),e.jsxs("div",{className:"",children:[e.jsx("p",{className:"text-sm font-thin text-right text-yellow-800",children:"Social Media Connect"}),l.socials.length?e.jsx("ul",{className:"flex justify-end mt-4 space-x-4",children:l.socials.map((s,t)=>e.jsx("li",{className:`flex items-center justify-center rounded ${o(s.name).bg}`,children:e.jsx("a",{href:s.value,target:"_blank",children:e.jsx(h,{name:s.name.toLowerCase(),className:`stroke-1 fill-none w-4 md:w-6 h-4 md:h-6 ${o(s.name).logo}`})})},`social${t}`))}):null]})]}),e.jsxs("div",{className:"w-full p-4 mt-4 text-sm text-center md:mt-6 text-slate-400",children:["© ",r," ",l.name," - All rights reserved"]})]})})}function v({children:l}){const{app:r,additional:o}=m().props,s=r.data,[t,n]=u.useState(!1),i=u.useRef();return u.useEffect(()=>{const c=()=>{const f=i.current.clientHeight;n(window.scrollY>=f)};return window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c)},[]),e.jsxs("div",{className:"min-h-screen bg-white sm:pt-0",children:[e.jsxs("div",{ref:i,className:`flex items-center justify-between w-full sm:px-4 sm:py-4 bg-white ${t?"fixed top-0 left-0 z-50 transition ease-in-out duration-700 shadow shadow-slate-300":""}`,children:[e.jsx(a,{className:"p-4 md:pl-10",href:"/",children:e.jsx(x,{logo:s.logo,name:s.name,showName:!1,logoClass:"w-20 md:w-36 mr-4"})}),e.jsx(g,{})]}),e.jsx("div",{className:"w-full col-span-full",children:l}),e.jsx(w,{appData:r.data,copyrightYear:o.current_year})]})}export{v as G};
