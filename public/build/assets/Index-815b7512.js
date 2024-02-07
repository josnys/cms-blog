import{q as j,W as u,a as e,d as f,b as N}from"./index-a88fab1b.js";import{A as g}from"./AdminLayout-9956a516.js";import b from"./DataTable-5dd4b3cb.js";import r from"./DataTableItem-bbf35304.js";import{D as o}from"./Dropdown-1d16aeaf.js";import{I as c}from"./Icon-3bda4456.js";import M from"./AddButton-292425b0.js";import{M as w}from"./Modal-9bfe8c60.js";import{S as v}from"./SecondaryButton-049c3fc4.js";import D from"./Form-2e9eef82.js";import"./TopNavigation-45dd717b.js";import"./ApplicationLogo-430792b9.js";import"./ResponsiveNavLink-b4ea249b.js";import"./transition-e02496c5.js";import"./MainMenu-776aade3.js";import"./MainMenuItem-74a6b35a.js";import"./index-9450f892.js";import"./TextInput-49dd63c8.js";import"./InputLabel-8b2ec9a2.js";import"./PrimaryButton-773b0282.js";import"./Checkbox-e1f5f34e.js";import"./FlashMessage-acf13ddb.js";import"./Utils-78048c49.js";function O({auth:p}){const{info:t}=j().props,{data:n,setData:a}=u({openModal:!1,permission:{}}),x=s=>{s.preventDefault(),d()},d=()=>{a("openModal",!n.openModal)},h=(s,i)=>{s.preventDefault(),a(l=>({permission:i,openModal:!l.openModal}))},m=t.permissions.data;return e.jsxs(g,{user:p.user,header:e.jsxs("h2",{className:"font-semibold leading-tight text-md text-slate-700",children:["Admin / ",e.jsx(f,{href:route("admin.user.index"),children:"Users"})," / ",e.jsx("span",{className:"text-slate-500",children:"Permissions"})]}),children:[e.jsx(N,{title:"Admin Permissions"}),e.jsxs("section",{className:"w-full",children:[e.jsx("div",{className:"p-4 bg-white",children:e.jsxs("div",{className:"w-full col-span-12",children:[e.jsx("div",{className:"p-2 mb-2 rounded bg-slate-50",children:e.jsx("div",{className:"flex justify-end",children:t.can.add_new?e.jsx(M,{link:"#",onClick:x,children:"Add New"}):null})}),e.jsx(b,{header:t.header,showNoData:m.length,children:m.map((s,i)=>e.jsxs("tr",{className:"hover:bg-slate-50",children:[e.jsx(r,{children:s.display_name}),e.jsx(r,{children:s.slug}),e.jsx(r,{children:s.status.text}),e.jsx(r,{children:t.can.edit?e.jsxs(o,{children:[e.jsx(o.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsx("button",{type:"button",className:"inline-flex items-center px-3 py-2 text-sm font-medium leading-4 transition duration-150 ease-in-out bg-white border border-transparent rounded-md text-slate-500 hover:text-slate-700 focus:outline-none",children:e.jsx(c,{name:"vertical-dots",className:"w-4 h-4"})})})}),e.jsx(o.Content,{children:e.jsxs(o.Link,{href:"#",onClick:l=>h(l,s),children:[e.jsx(c,{className:"mr-2 w-4 h-4",name:"edit"}),"Edit"]})})]}):null})]},`perm${i}`))})]})}),e.jsxs(w,{show:n.openModal,children:[e.jsx("h2",{className:"p-4 text-lg font-medium text-gray-900",children:"Create Permission"}),e.jsx(D,{formSuccess:d,permissionData:n.permission}),e.jsx("div",{className:"flex p-4 mt-6",children:e.jsx(v,{onClick:s=>a("openModal",!n.openModal),children:"Cancel"})})]})]})]})}export{O as default};