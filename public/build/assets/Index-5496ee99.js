import{q as x,W as h,a as e,d as r,b as u}from"./index-55d0f6e7.js";import{A as f}from"./AdminLayout-aa8ecc03.js";import g from"./AddButton-4fb94e5e.js";import{M as j}from"./Modal-5d48e68a.js";import{S as N}from"./SecondaryButton-e1667810.js";import b from"./Form-ba90a656.js";import"./TopNavigation-2ea79473.js";import"./ApplicationLogo-cb9a190b.js";import"./Dropdown-87182240.js";import"./transition-f9a473bf.js";import"./ResponsiveNavLink-b327a45b.js";import"./Icon-8b0344e8.js";import"./MainMenu-3f29b657.js";import"./MainMenuItem-8ccd8b44.js";import"./index-c16b99ae.js";import"./TextInput-d566225b.js";import"./InputLabel-d130d515.js";import"./PrimaryButton-472d2328.js";import"./Checkbox-e8b1fd3c.js";import"./FlashMessage-bded3791.js";function G({auth:n}){const{info:i}=x().props,m=i.tags.data,{data:t,setData:a}=h({openModal:!1,tag:{}}),c=s=>{s.preventDefault(),d()},d=()=>{a("openModal",!t.openModal)},p=(s,l)=>{s.preventDefault(),a(o=>({tag:l,openModal:!o.openModal}))};return e.jsxs(f,{user:n.user,header:e.jsxs("h2",{className:"font-semibold leading-tight text-md text-slate-700",children:["Admin / ",e.jsx(r,{href:route("admin.blog.index"),className:"text-slate-700",children:"Blog"})," / ",e.jsx(r,{href:route("admin.blog.category.index"),className:"text-slate-700",children:"Categories, Sub-Categories & Tag"})," / ",e.jsx("span",{className:"text-slate-500",children:"Tags"})]}),children:[e.jsx(u,{title:"Admin Tags"}),e.jsxs("section",{className:"w-full",children:[e.jsx("div",{className:"p-4 bg-white",children:e.jsxs("div",{className:"w-full col-span-12",children:[e.jsx("div",{className:"p-2 mb-2 rounded bg-slate-50",children:e.jsx("div",{className:"flex justify-end",children:i.authorize_to.create?e.jsx(g,{link:"#",onClick:c,children:"Add New"}):null})}),e.jsx("div",{className:"grid grid-cols-6 gap-2",children:m.map((s,l)=>e.jsxs(r,{href:"#",onClick:o=>p(o,s),className:"w-full p-2 rounded bg-slate-50 hover:bg-slate-100 text-slate-600",children:[e.jsx("div",{className:"w-full font-medium",children:s.name}),e.jsxs("div",{className:"flex items-center justify-between w-full text-sm",children:["Status ",e.jsx("span",{className:`w-2 h-2 rounded-full ${s.status.value?"bg-green-500":"bg-red-500"}`})]})]},`tag${l}`))})]})}),e.jsxs(j,{show:t.openModal,children:[e.jsx("h2",{className:"p-4 text-lg font-medium text-gray-900",children:"Create Tag"}),e.jsx(b,{formSuccess:d,tagData:t.tag}),e.jsx("div",{className:"flex p-4 mt-6",children:e.jsx(N,{onClick:s=>a("openModal",!t.openModal),children:"Cancel"})})]})]})]})}export{G as default};