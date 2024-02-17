import{q as u,W as j,a as e,d as f,b as g}from"./index-daaa950d.js";import{A as N}from"./AdminLayout-6b0fd4bb.js";import b from"./DataTable-9c6d0018.js";import n from"./DataTableItem-2d107133.js";import{D as o}from"./Dropdown-5f6914f7.js";import{I as d}from"./Icon-7a7ca52b.js";import w from"./AddButton-4a4befad.js";import{M}from"./Modal-6a233b47.js";import{S as v}from"./SecondaryButton-875319db.js";import D from"./Form-5c8bc6fc.js";import"./TopNavigation-1c37a36f.js";import"./ApplicationLogo-6d841ec8.js";import"./ResponsiveNavLink-079caf99.js";import"./transition-6026fda8.js";import"./MainMenu-6feed8b1.js";import"./MainMenuItem-1c4ccba4.js";import"./index-29727f47.js";import"./InputError-2509fabd.js";import"./InputLabel-d98e48d3.js";import"./PrimaryButton-22c3cd02.js";import"./TextInput-cbc3e4dd.js";import"./Checkbox-98cb6b5a.js";import"./FlashMessage-65223d66.js";import"./Utils-78048c49.js";function Q({auth:p}){const{info:t}=u().props,{data:r,setData:a}=j({openModal:!1,role:{}}),h=s=>{s.preventDefault(),m()},m=()=>{a("openModal",!r.openModal)},x=(s,i)=>{s.preventDefault(),a(l=>({role:i,openModal:!l.openModal}))},c=t.roles.data;return e.jsxs(N,{user:p.user,header:e.jsxs("h2",{className:"font-semibold leading-tight text-md text-slate-700",children:["Admin / ",e.jsx(f,{href:route("admin.user.index"),children:"Users"})," / ",e.jsx("span",{className:"text-slate-500",children:"Roles"})]}),children:[e.jsx(g,{title:"Admin Roles"}),e.jsxs("section",{className:"w-full h-full overflow-visible",children:[e.jsx("div",{className:"p-4 bg-white",children:e.jsxs("div",{className:"w-full col-span-12",children:[e.jsx("div",{className:"p-2 mb-2 rounded bg-slate-50",children:e.jsx("div",{className:"flex justify-end",children:t.authorize_to.add_new?e.jsx(w,{link:"#",onClick:h,children:"Add New"}):null})}),e.jsx(b,{header:t.header,showNoData:c.length,children:c.map((s,i)=>e.jsxs("tr",{className:"hover:bg-slate-50",children:[e.jsx(n,{children:s.display_name}),e.jsx(n,{children:s.slug}),e.jsx(n,{children:s.status.text}),e.jsx(n,{children:e.jsxs(o,{children:[e.jsx(o.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-slate-500 hover:text-slate-700 focus:outline-none",children:["Actions ",e.jsx(d,{name:"vertical-dots",className:"w-4 h-4"})]})})}),e.jsxs(o.Content,{children:[t.authorize_to.edit?e.jsxs(o.Link,{href:"#",onClick:l=>x(l,s),children:[e.jsx(d,{className:"mr-2 w-4 h-4",name:"edit"}),"Edit"]}):null,t.authorize_to.assign_permission?e.jsxs(o.Link,{href:route("admin.role.permission.create",s.slug),children:[e.jsx(d,{className:"mr-2 w-4 h-4",name:"key"}),"Assign Permissions"]}):null]})]})})]},`role${i}`))})]})}),e.jsxs(M,{show:r.openModal,children:[e.jsx("h2",{className:"p-4 text-lg font-medium text-gray-900",children:"Create Role"}),e.jsx(D,{formSuccess:m,roleData:r.role}),e.jsx("div",{className:"flex p-4 mt-6",children:e.jsx(v,{onClick:s=>a("openModal",!r.openModal),children:"Cancel"})})]})]})]})}export{Q as default};