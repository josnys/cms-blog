import{q as n,a as e,b as c,d as s}from"./index-4af2f7f3.js";import{A as o}from"./AdminLayout-69a9ead5.js";import"./TopNavigation-c8233be5.js";import"./ApplicationLogo-1785afe5.js";import"./Dropdown-7d9b658b.js";import"./transition-03e7857e.js";import"./ResponsiveNavLink-473cdb48.js";import"./Icon-5b0a4ec5.js";import"./MainMenu-7d349470.js";import"./MainMenuItem-5ad67803.js";import"./index-511b6dee.js";function b({auth:l}){const{info:a}=n().props,t=a.setting.data??[];return e.jsxs(o,{user:l.user,header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"Profile"}),children:[e.jsx(c,{title:"Admin Setting"}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8",children:e.jsxs("div",{className:"p-4 bg-white shadow sm:p-8 sm:rounded-lg",children:[e.jsx(s,{href:route("admin.setting.create"),className:"float-right text-blue-400 hover:text-blue-600 hover:underline",children:"Edit"}),t.logo?e.jsx("div",{className:"flex justify-center w-full",children:e.jsx("img",{src:t.logo.large,className:"w-40"})}):null,e.jsx("h1",{className:"text-2xl font-semibold text-center text-slate-700",children:t.name}),t.slogan?e.jsx("h3",{className:"text-lg text-center text-slate-500",children:t.slogan}):null,t.address?e.jsx("h4",{className:"text-center text-slate-400",children:t.address}):null,t.phone?e.jsx("h4",{className:"text-center text-slate-400",children:t.phone}):null,t.email?e.jsx("h4",{className:"text-center text-slate-400",children:t.email}):null,t.description?e.jsx("div",{className:"mt-4 prose text-slate-600",dangerouslySetInnerHTML:{__html:t.description}}):null,t.socials.length?e.jsx("div",{className:"mt-2",children:e.jsx("ul",{className:"flex space-x-4 list-disc list-inside",children:t.socials.map((i,r)=>e.jsx("li",{children:i.name},`soc${r}`))})}):null,e.jsx(s,{href:route("admin.setting.create"),className:"float-right text-blue-400 hover:text-blue-600 hover:underline",children:"Edit"})]})})})]})}export{b as default};