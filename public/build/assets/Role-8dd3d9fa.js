import{q as j,W as f,a as e,d as g,b as N}from"./index-9eaef73f.js";import{A as b}from"./AdminLayout-d63c0f53.js";import{P as v}from"./PrimaryButton-74354d44.js";import{C as y}from"./Checkbox-4664b68d.js";import{F as o}from"./FlashMessage-cf45a264.js";import{C as k}from"./CancelButton-2354a764.js";import"./TopNavigation-702ccad5.js";import"./ApplicationLogo-58bba02d.js";import"./Dropdown-1a1d2f38.js";import"./transition-5dbd1cbb.js";import"./ResponsiveNavLink-441116e9.js";import"./Icon-bc3d3dc4.js";import"./MainMenu-8291c762.js";import"./MainMenuItem-0f5ff9e9.js";import"./index-94693d5e.js";function z({auth:m}){const{info:l}=j().props,i=l.user.data,{data:n,setData:d,post:c,errors:w,processing:x}=f({roles:l.roles||[]}),p=(s,r)=>{s.preventDefault();let a=n.roles,t=a[r];t.is_checked=!t.is_checked,a[r]=t,d(u=>({...u,roles:a}))},h=s=>{s.preventDefault(),c(route("admin.user.role.store",i.username))};return e.jsxs(b,{user:m.user,header:e.jsxs("h2",{className:"font-semibold leading-tight text-md text-slate-700",children:["Admin / ",e.jsx(g,{href:route("admin.user.index"),className:"text-slate-700",children:"Users"})," / ",e.jsx("span",{className:"text-slate-500",children:"Assign Roles"})]}),children:[e.jsx(N,{title:"Admin Roles"}),e.jsxs("section",{className:"w-full",children:[e.jsx(o,{}),e.jsxs("div",{className:"flex w-full col-span-12 p-4 overflow-hidden",children:[e.jsx("div",{className:"w-1/3"}),e.jsx("div",{className:"w-2/3 p-4 bg-white rounded-md",children:e.jsxs("form",{onSubmit:h,className:"mt-6 space-y-6",children:[e.jsxs("h2",{className:"text-lg font-medium text-gray-900",children:["Assign Roles to user ",e.jsx("b",{children:i.related.person.fullname})]}),l.user_roles?e.jsxs("p",{className:"mt-1 text-sm text-gray-600",children:[e.jsx("b",{children:"Already have : "}),l.user_roles]}):null,e.jsx(o,{}),e.jsx("div",{className:"grid grid-cols-4 p-4 space-x-2 space-y-4 bg-slate-50",children:n.roles.map((s,r)=>e.jsx("div",{className:"block",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(y,{id:"roles[]",name:"roles[]",checked:s.is_checked,onChange:a=>p(a,r)}),e.jsx("span",{className:"ml-2 text-sm text-gray-600",children:s.display_name})]})},`perms${r}`))}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx(k,{link:route("admin.user.index"),children:"Cancel"}),e.jsx(v,{disabled:x,children:"Save"})]})]})})]})]})]})}export{z as default};