import{q as u,W as j,a as e,d as f,b as g}from"./index-a88fab1b.js";import{A as N}from"./AdminLayout-9956a516.js";import b from"./DataTable-5dd4b3cb.js";import s from"./DataTableItem-bbf35304.js";import{I as d}from"./Icon-3bda4456.js";import w from"./AddButton-292425b0.js";import{M as v}from"./Modal-9bfe8c60.js";import{S as M}from"./SecondaryButton-049c3fc4.js";import _ from"./Form-c5982705.js";import{D as n}from"./Dropdown-1d16aeaf.js";import"./TopNavigation-45dd717b.js";import"./ApplicationLogo-430792b9.js";import"./ResponsiveNavLink-b4ea249b.js";import"./MainMenu-776aade3.js";import"./MainMenuItem-74a6b35a.js";import"./index-9450f892.js";import"./transition-e02496c5.js";import"./TextInput-49dd63c8.js";import"./InputLabel-8b2ec9a2.js";import"./PrimaryButton-773b0282.js";import"./Checkbox-e1f5f34e.js";import"./FlashMessage-acf13ddb.js";function O({auth:x}){const{info:a}=u().props,m=a.pages.data,{data:l,setData:r}=j({openModal:!1,page:{}}),h=t=>{t.preventDefault(),c()},c=()=>{r("openModal",!l.openModal)},p=(t,o)=>{t.preventDefault(),r(i=>({page:o,openModal:!i.openModal}))};return e.jsxs(N,{user:x.user,header:e.jsxs("h2",{className:"font-semibold leading-tight text-md text-slate-700",children:["Admin / ",e.jsx(f,{href:route("admin.blog.index"),className:"text-slate-700",children:"Blog"})," / ",e.jsx("span",{className:"text-slate-500",children:"Pages"})]}),children:[e.jsx(g,{title:"Admin Pages"}),e.jsxs("section",{className:"w-full",children:[e.jsx("div",{className:"p-4 bg-white",children:e.jsxs("div",{className:"w-full col-span-12",children:[e.jsx("div",{className:"p-2 mb-2 rounded bg-slate-50",children:e.jsx("div",{className:"flex justify-end",children:a.authorize_to.create?e.jsx(w,{link:"#",onClick:h,children:"Add New"}):null})}),e.jsx(b,{header:a.header,showNoData:m.length,children:m.map((t,o)=>e.jsxs("tr",{className:"hover:bg-slate-50",children:[e.jsx(s,{children:t.name}),e.jsx(s,{children:t.slug}),e.jsx(s,{children:e.jsx("span",{className:`w-full text-center ${t.show_main_menu.value?"text-green-700":"text-red-700"}`,children:t.show_main_menu.text})}),e.jsx(s,{children:e.jsx("span",{className:`w-full text-center ${t.access_by_id.value?"text-green-700":"text-red-700"}`,children:t.access_by_id.text})}),e.jsx(s,{children:e.jsx("span",{className:`w-full text-center ${t.status.value?"text-green-700":"text-red-700"}`,children:t.status.text})}),e.jsx(s,{children:e.jsxs(n,{children:[e.jsx(n.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsx("button",{type:"button",className:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-slate-500 hover:text-slate-700 focus:outline-none",children:e.jsx(d,{name:"vertical-dots",className:"w-4 h-4"})})})}),e.jsxs(n.Content,{children:[a.authorize_to.edit?e.jsxs(n.Link,{href:"#",onClick:i=>p(i,t),children:[e.jsx(d,{className:"mr-2 w-4 h-4",name:"edit"}),"Edit"]}):null,a.authorize_to.details?e.jsxs(n.Link,{href:route("admin.blog.page.detail.create",t.slug),children:[e.jsx(d,{className:"mr-2 w-4 h-4",name:"news-paper"}),"Details"]}):null]})]})})]},`page${o}`))})]})}),e.jsxs(v,{show:l.openModal,children:[e.jsx("h2",{className:"p-4 text-lg font-medium text-gray-900",children:"Create Page"}),e.jsx(_,{formSuccess:c,pageData:l.page}),e.jsx("div",{className:"flex p-4 mt-6",children:e.jsx(M,{onClick:t=>r("openModal",!l.openModal),children:"Cancel"})})]})]})]})}export{O as default};