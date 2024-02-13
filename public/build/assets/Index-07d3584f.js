import{q as u,W as j,a as e,d as f,b as g}from"./index-4af2f7f3.js";import{A as N}from"./AdminLayout-69a9ead5.js";import b from"./DataTable-e9141221.js";import a from"./DataTableItem-8c23813b.js";import{I as d}from"./Icon-5b0a4ec5.js";import w from"./AddButton-10dc1a92.js";import{M as v}from"./Modal-2ff20f47.js";import{S as M}from"./SecondaryButton-2a89fa69.js";import _ from"./Form-5cb4ed71.js";import{D as n}from"./Dropdown-7d9b658b.js";import{P as D}from"./Pagination-53165587.js";import"./TopNavigation-c8233be5.js";import"./ApplicationLogo-1785afe5.js";import"./ResponsiveNavLink-473cdb48.js";import"./MainMenu-7d349470.js";import"./MainMenuItem-5ad67803.js";import"./index-511b6dee.js";import"./transition-03e7857e.js";import"./InputError-36cadade.js";import"./InputLabel-88f834c3.js";import"./PrimaryButton-0b2d3061.js";import"./TextInput-41c9dc8c.js";import"./Checkbox-d0de64a4.js";import"./FlashMessage-2fccb31c.js";function V({auth:x}){const{info:s}=u().props,m=s.pages.data,{data:l,setData:r}=j({openModal:!1,page:{}}),h=t=>{t.preventDefault(),c()},c=()=>{r("openModal",!l.openModal)},p=(t,o)=>{t.preventDefault(),r(i=>({page:o,openModal:!i.openModal}))};return e.jsxs(N,{user:x.user,header:e.jsxs("h2",{className:"font-semibold leading-tight text-md text-slate-700",children:["Admin / ",e.jsx(f,{href:route("admin.blog.index"),className:"text-slate-700",children:"Blog"})," / ",e.jsx("span",{className:"text-slate-500",children:"Pages"})]}),children:[e.jsx(g,{title:"Admin Pages"}),e.jsxs("section",{className:"w-full",children:[e.jsx("div",{className:"p-4 bg-white",children:e.jsxs("div",{className:"w-full col-span-12",children:[e.jsx("div",{className:"p-2 mb-2 rounded bg-slate-50",children:e.jsx("div",{className:"flex justify-end",children:s.authorize_to.create?e.jsx(w,{link:"#",onClick:h,children:"Add New"}):null})}),e.jsx(b,{header:s.header,showNoData:m.length,children:m.map((t,o)=>e.jsxs("tr",{className:"hover:bg-slate-50",children:[e.jsx(a,{children:t.name}),e.jsx(a,{children:t.slug}),e.jsx(a,{children:e.jsx("span",{className:`w-full text-center ${t.show_main_menu.value?"text-green-700":"text-red-700"}`,children:t.show_main_menu.text})}),e.jsx(a,{children:e.jsx("span",{className:`w-full text-center ${t.access_by_id.value?"text-green-700":"text-red-700"}`,children:t.access_by_id.text})}),e.jsx(a,{children:e.jsx("span",{className:`w-full text-center ${t.status.value?"text-green-700":"text-red-700"}`,children:t.status.text})}),e.jsx(a,{children:e.jsxs(n,{children:[e.jsx(n.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsx("button",{type:"button",className:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-slate-500 hover:text-slate-700 focus:outline-none",children:e.jsx(d,{name:"vertical-dots",className:"w-4 h-4"})})})}),e.jsxs(n.Content,{children:[s.authorize_to.edit?e.jsxs(n.Link,{href:"#",onClick:i=>p(i,t),children:[e.jsx(d,{className:"mr-2 w-4 h-4",name:"edit"}),"Edit"]}):null,s.authorize_to.details?e.jsxs(n.Link,{href:route("admin.blog.page.detail.create",t.slug),children:[e.jsx(d,{className:"mr-2 w-4 h-4",name:"news-paper"}),"Details"]}):null]})]})})]},`page${o}`))}),e.jsx(D,{links:s.pages.meta.links})]})}),e.jsxs(v,{show:l.openModal,children:[e.jsx("h2",{className:"p-4 text-lg font-medium text-gray-900",children:"Create Page"}),e.jsx(_,{formSuccess:c,pageData:l.page}),e.jsx("div",{className:"flex p-4 mt-6",children:e.jsx(M,{onClick:t=>r("openModal",!l.openModal),children:"Cancel"})})]})]})]})}export{V as default};
