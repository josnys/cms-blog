import{q as u,W as j,a as e,b as f}from"./index-4af2f7f3.js";import{A as b}from"./AdminLayout-69a9ead5.js";import N from"./DataTable-e9141221.js";import s from"./DataTableItem-8c23813b.js";import{I as c}from"./Icon-5b0a4ec5.js";import g from"./AddButton-10dc1a92.js";import{M as w}from"./Modal-2ff20f47.js";import{S as M}from"./SecondaryButton-2a89fa69.js";import v from"./Form-cafbb8f7.js";import{D as i}from"./Dropdown-7d9b658b.js";import{P as D}from"./Pagination-53165587.js";import"./TopNavigation-c8233be5.js";import"./ApplicationLogo-1785afe5.js";import"./ResponsiveNavLink-473cdb48.js";import"./MainMenu-7d349470.js";import"./MainMenuItem-5ad67803.js";import"./index-511b6dee.js";import"./transition-03e7857e.js";import"./InputError-36cadade.js";import"./InputLabel-88f834c3.js";import"./PrimaryButton-0b2d3061.js";import"./TextInput-41c9dc8c.js";import"./Checkbox-d0de64a4.js";import"./FlashMessage-2fccb31c.js";function Q({auth:x}){const{info:n}=u().props,d=n.publications.data,{data:a,setData:r}=j({openModal:!1,publication:{}}),p=t=>{t.preventDefault(),m()},m=()=>{r("openModal",!a.openModal)},h=(t,l)=>{t.preventDefault(),r(o=>({...o,publication:l,openModal:!o.openModal}))};return e.jsxs(b,{user:x.user,header:e.jsxs("h2",{className:"font-semibold leading-tight text-md text-slate-700",children:["Admin / ",e.jsx("span",{className:"text-slate-500",children:"Publications"})]}),children:[e.jsx(f,{title:"Admin Publication"}),e.jsxs("section",{className:"w-full",children:[e.jsx("div",{className:"p-4 bg-white",children:e.jsxs("div",{className:"w-full col-span-12",children:[e.jsx("div",{className:"flex justify-between p-2 mb-2 rounded bg-slate-50",children:e.jsx("div",{className:"flex justify-end",children:n.authorize_to.create?e.jsx(g,{link:"#",onClick:p,children:"Add New"}):null})}),e.jsx(N,{header:n.header,showNoData:d.length,children:d.map((t,l)=>e.jsxs("tr",{className:"hover:bg-slate-50",children:[e.jsx(s,{children:t.name}),e.jsx(s,{children:t.website}),e.jsx(s,{children:t.city}),e.jsx(s,{children:t.country}),e.jsx(s,{children:e.jsx("span",{className:`w-full text-center ${t.status.value?"text-green-700":"text-red-700"}`,children:t.status.text})}),e.jsx(s,{children:e.jsxs(i,{children:[e.jsx(i.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsx("button",{type:"button",className:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-slate-500 hover:text-slate-700 focus:outline-none",children:e.jsx(c,{name:"vertical-dots",className:"w-4 h-4"})})})}),e.jsx(i.Content,{children:n.authorize_to.edit?e.jsxs(i.Link,{href:"#",onClick:o=>h(o,t),children:[e.jsx(c,{className:"mr-2 w-4 h-4",name:"edit"}),"Edit"]}):null})]})})]},`publication${l}`))}),e.jsx(D,{links:n.publications.meta.links})]})}),e.jsxs(w,{show:a.openModal,children:[e.jsx("h2",{className:"p-4 text-lg font-medium text-gray-900",children:"Create / Update Publication"}),e.jsx(v,{formSuccess:m,publicationData:a.publication}),e.jsx("div",{className:"flex p-4 mt-6",children:e.jsx(M,{onClick:t=>r("openModal",!a.openModal),children:"Cancel"})})]})]})]})}export{Q as default};
