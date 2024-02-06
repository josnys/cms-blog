import{q as j,W as f,a as s,d as g,b as N}from"./index-55d0f6e7.js";import{A as b}from"./AdminLayout-aa8ecc03.js";import{P as y}from"./PrimaryButton-472d2328.js";import{C as v}from"./Checkbox-e8b1fd3c.js";import{F as m}from"./FlashMessage-bded3791.js";import{C as w}from"./CancelButton-c2bfab42.js";import"./TopNavigation-2ea79473.js";import"./ApplicationLogo-cb9a190b.js";import"./Dropdown-87182240.js";import"./transition-f9a473bf.js";import"./ResponsiveNavLink-b327a45b.js";import"./Icon-8b0344e8.js";import"./MainMenu-3f29b657.js";import"./MainMenuItem-8ccd8b44.js";import"./index-c16b99ae.js";function $({auth:o}){const{info:t}=j().props,l=t.user.data,{data:a,setData:d,post:c,errors:k,processing:p}=f({permissions:t.permissions||[]}),x=(e,i)=>{e.preventDefault();let r=a.permissions,n=r[i];n.is_checked=!n.is_checked,r[i]=n,d(u=>({...u,permissions:r}))},h=e=>{e.preventDefault(),c(route("admin.user.permission.store",l.username))};return s.jsxs(b,{user:o.user,header:s.jsxs("h2",{className:"font-semibold leading-tight text-md text-slate-700",children:["Admin / ",s.jsx(g,{href:route("admin.user.index"),className:"text-slate-700",children:"Users"})," / ",s.jsx("span",{className:"text-slate-500",children:"Assign Permissions"})]}),children:[s.jsx(N,{title:"Admin Permissions"}),s.jsxs("section",{className:"w-full",children:[s.jsx(m,{}),s.jsxs("div",{className:"flex w-full col-span-12 p-4 overflow-hidden",children:[s.jsx("div",{className:"w-1/3"}),s.jsx("div",{className:"w-2/3 p-4 bg-white rounded-md",children:s.jsxs("form",{onSubmit:h,className:"mt-6 space-y-6",children:[s.jsxs("h2",{className:"text-lg font-medium text-gray-900",children:["Assign Perimissions to User ",s.jsx("b",{children:l.related.person.fullname})]}),t.display_permission?s.jsxs("p",{className:"mt-1 text-sm text-gray-600",children:[s.jsx("b",{children:"Already have : "}),t.display_permission]}):null,s.jsx(m,{}),a.permissions.length?s.jsx("div",{className:"grid grid-cols-4 p-4 space-x-2 space-y-4 bg-slate-50",children:a.permissions.map((e,i)=>s.jsx("div",{className:"block",children:s.jsxs("label",{className:"flex items-center",children:[s.jsx(v,{id:"permissions[]",name:"permissions[]",checked:e.is_checked,onChange:r=>x(r,i)}),s.jsx("span",{className:"ml-2 text-sm text-gray-600",children:e.display_name})]})},`perms${i}`))}):s.jsx("div",{className:"p-2 text-xs text-center text-yellow-700 bg-yellow-200 border-yellow-400 rounded",children:"This user already have all permissions through role(s)."}),s.jsxs("div",{className:"flex justify-between",children:[s.jsx(w,{link:route("admin.user.index"),children:"Cancel"}),s.jsx(y,{disabled:p,children:"Save"})]})]})})]})]})]})}export{$ as default};