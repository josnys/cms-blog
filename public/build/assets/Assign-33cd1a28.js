import{q as f,W as g,a as s,d as m,b as N}from"./index-55d0f6e7.js";import{A as b}from"./AdminLayout-aa8ecc03.js";import{P as v}from"./PrimaryButton-472d2328.js";import{C as y}from"./Checkbox-e8b1fd3c.js";import{F as o}from"./FlashMessage-bded3791.js";import{C as A}from"./CancelButton-c2bfab42.js";import"./TopNavigation-2ea79473.js";import"./ApplicationLogo-cb9a190b.js";import"./Dropdown-87182240.js";import"./transition-f9a473bf.js";import"./ResponsiveNavLink-b327a45b.js";import"./Icon-8b0344e8.js";import"./MainMenu-3f29b657.js";import"./MainMenuItem-8ccd8b44.js";import"./index-c16b99ae.js";function z({auth:d}){const{info:t}=f().props,l=t.role.data,{data:n,setData:c,post:p,errors:k,processing:x}=g({permissions:t.permissions||[]}),h=(e,i)=>{e.preventDefault();let r=n.permissions,a=r[i];a.is_checked=!a.is_checked,r[i]=a,c(u=>({...u,permissions:r}))},j=e=>{e.preventDefault(),p(route("admin.role.permission.store",l.slug))};return s.jsxs(b,{user:d.user,header:s.jsxs("h2",{className:"font-semibold leading-tight text-md text-slate-700",children:["Admin / ",s.jsx(m,{href:route("admin.user.index"),className:"text-slate-700",children:"Users"})," / ",s.jsx(m,{href:route("admin.role.index"),className:"text-slate-700",children:"Roles"})," / ",s.jsx("span",{className:"text-slate-500",children:"Assign Permissions"})]}),children:[s.jsx(N,{title:"Admin Roles Assignment"}),s.jsxs("section",{className:"w-full",children:[s.jsx(o,{}),s.jsxs("div",{className:"flex w-full col-span-12 p-4 overflow-hidden",children:[s.jsx("div",{className:"w-1/3"}),s.jsx("div",{className:"w-2/3 p-4 bg-white rounded-md",children:s.jsxs("form",{onSubmit:j,className:"mt-6 space-y-6",children:[s.jsxs("h2",{className:"text-lg font-medium text-gray-900",children:["Assign Perimissions to Role ",s.jsx("b",{children:l.display_name})]}),t.role_permissions?s.jsxs("p",{className:"mt-1 text-sm text-gray-600",children:[s.jsx("b",{children:"Already have : "}),t.role_permissions]}):null,s.jsx(o,{}),s.jsx("div",{className:"grid grid-cols-4 p-4 space-x-2 space-y-4 bg-slate-50",children:n.permissions.map((e,i)=>s.jsx("div",{className:"block",children:s.jsxs("label",{className:"flex items-center",children:[s.jsx(y,{id:"permissions[]",name:"permissions[]",checked:e.is_checked,onChange:r=>h(r,i)}),s.jsx("span",{className:"ml-2 text-sm text-gray-600",children:e.display_name})]})},`perms${i}`))}),s.jsxs("div",{className:"flex justify-between",children:[s.jsx(A,{link:route("admin.role.index"),children:"Cancel"}),s.jsx(v,{disabled:x,children:"Update"})]})]})})]})]})]})}export{z as default};