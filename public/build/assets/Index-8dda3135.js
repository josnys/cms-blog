import{q as x,W as h,a as e,d as r,b as u}from"./index-4af2f7f3.js";import{A as g}from"./AdminLayout-69a9ead5.js";import f from"./AddButton-10dc1a92.js";import{M as j}from"./Modal-2ff20f47.js";import{S as N}from"./SecondaryButton-2a89fa69.js";import b from"./Form-197be02d.js";import{P as M}from"./Pagination-53165587.js";import"./TopNavigation-c8233be5.js";import"./ApplicationLogo-1785afe5.js";import"./Dropdown-7d9b658b.js";import"./transition-03e7857e.js";import"./ResponsiveNavLink-473cdb48.js";import"./Icon-5b0a4ec5.js";import"./MainMenu-7d349470.js";import"./MainMenuItem-5ad67803.js";import"./index-511b6dee.js";import"./InputError-36cadade.js";import"./InputLabel-88f834c3.js";import"./PrimaryButton-0b2d3061.js";import"./TextInput-41c9dc8c.js";import"./Checkbox-d0de64a4.js";import"./FlashMessage-2fccb31c.js";function J({auth:d}){const{info:a}=x().props,m=a.tags.data,{data:t,setData:l}=h({openModal:!1,tag:{}}),c=s=>{s.preventDefault(),n()},n=()=>{l("openModal",!t.openModal)},p=(s,o)=>{s.preventDefault(),l(i=>({tag:o,openModal:!i.openModal}))};return e.jsxs(g,{user:d.user,header:e.jsxs("h2",{className:"font-semibold leading-tight text-md text-slate-700",children:["Admin / ",e.jsx(r,{href:route("admin.blog.index"),className:"text-slate-700",children:"Blog"})," / ",e.jsx(r,{href:route("admin.blog.category.index"),className:"text-slate-700",children:"Categories, Sub-Categories & Tag"})," / ",e.jsx("span",{className:"text-slate-500",children:"Tags"})]}),children:[e.jsx(u,{title:"Admin Tags"}),e.jsxs("section",{className:"w-full",children:[e.jsx("div",{className:"p-4 bg-white",children:e.jsxs("div",{className:"w-full col-span-12",children:[e.jsx("div",{className:"p-2 mb-2 rounded bg-slate-50",children:e.jsx("div",{className:"flex justify-end",children:a.authorize_to.create?e.jsx(f,{link:"#",onClick:c,children:"Add New"}):null})}),e.jsx("div",{className:"grid grid-cols-6 gap-2",children:m.map((s,o)=>e.jsxs(r,{href:"#",onClick:i=>p(i,s),className:"w-full p-2 rounded bg-slate-50 hover:bg-slate-100 text-slate-600",children:[e.jsx("div",{className:"w-full font-medium",children:s.name}),e.jsxs("div",{className:"flex items-center justify-between w-full text-sm",children:["Status ",e.jsx("span",{className:`w-2 h-2 rounded-full ${s.status.value?"bg-green-500":"bg-red-500"}`})]})]},`tag${o}`))}),e.jsx(M,{links:a.tags.meta.links})]})}),e.jsxs(j,{show:t.openModal,children:[e.jsx("h2",{className:"p-4 text-lg font-medium text-gray-900",children:"Create Tag"}),e.jsx(b,{formSuccess:n,tagData:t.tag}),e.jsx("div",{className:"flex p-4 mt-6",children:e.jsx(N,{onClick:s=>l("openModal",!t.openModal),children:"Cancel"})})]})]})]})}export{J as default};
