import{q as t,a as e,b as i,d as m}from"./index-daaa950d.js";import{G as d}from"./GuestLayout-b4515afd.js";import"./ApplicationLogo-6d841ec8.js";import"./Dropdown-5f6914f7.js";import"./transition-6026fda8.js";import"./Icon-7a7ca52b.js";function h(){const{info:r}=t().props,l=r.page.data;return e.jsxs(d,{children:[e.jsx(i,{title:"Welcome"}),e.jsx("section",{className:"w-full",children:e.jsx("div",{className:"container mx-auto",children:e.jsx("div",{className:"grid grid-cols-1 gap-2 p-4 md:grid-cols-3 md:gap-3",children:l.map((s,a)=>e.jsx(m,{href:route("site.page",s.slug),className:"p-2 border rounded bg-slate-50 border-slate-100 hover:shadow-md",children:e.jsxs("div",{className:"w-full mt-1 text-sm text-slate-500",children:[s.cover?e.jsx("img",{src:s.cover.url.external??s.cover.url.small,className:"object-cover object-center w-full h-24",alt:s.cover.name}):null,e.jsx("h4",{className:"flex items-center mt-2 font-semibold text-md",children:s.title}),e.jsx("div",{className:"mt-2 font-normal text-justify line-clamp-3",dangerouslySetInnerHTML:{__html:s.intro}}),e.jsxs("p",{className:"flex justify-between p-2 mt-2 font-medium border-t border-t-slate-400",children:[e.jsxs("span",{children:["By: ",s.user.username]}),e.jsxs("span",{className:"text-right",children:["Published: ",s.published.text]})]})]})},`content${a}`))})})})]})}export{h as default};