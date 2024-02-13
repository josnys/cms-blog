import{q as v,W as N,a as e,d as u,b as k}from"./index-4af2f7f3.js";import{A as _}from"./AdminLayout-69a9ead5.js";import{I as d}from"./InputError-36cadade.js";import{I as c}from"./InputLabel-88f834c3.js";import{P as w}from"./PrimaryButton-0b2d3061.js";import{T as C}from"./TextInput-41c9dc8c.js";import{C as S}from"./Checkbox-d0de64a4.js";import{S as p}from"./SelectInput-fc54a283.js";import{F}from"./FlashMessage-2fccb31c.js";import{S as A}from"./SecondaryButton-2a89fa69.js";import"./TopNavigation-c8233be5.js";import"./ApplicationLogo-1785afe5.js";import"./Dropdown-7d9b658b.js";import"./transition-03e7857e.js";import"./ResponsiveNavLink-473cdb48.js";import"./Icon-5b0a4ec5.js";import"./MainMenu-7d349470.js";import"./MainMenuItem-5ad67803.js";import"./index-511b6dee.js";function Q({auth:x}){const{info:n}=v().props;console.log(n.page);const{data:l,setData:i,post:h,errors:o,processing:j,transform:y}=N({type:"",gallery:"",content:"",order:"",status:!0,block_display:n.page.block_display||[],blocks:[]}),g=s=>{if(s.preventDefault(),m(l.type)&&(m(l.content)||m(l.gallery)))return;let t=l.content?n.contents.find(r=>r.id==l.content):n.galleries.find(r=>r.id==l.gallery),a=l.block_display;a.push({type:l.type,block:t,order:l.order==""?a.length+1:l.order,status:l.status}),i(r=>({...r,type:"",gallery:"",content:"",order:"",status:!0,block_display:a}))},f=(s,t)=>{s.preventDefault();let a=l.block_display;a.splice(t,1),i("block_display",a)},m=s=>!s.trim().length,b=s=>{s.preventDefault();let t=l.blocks,a=l.block_display;for(let r=0;r<a.length;r++)t.push({type:a[r].type,block_id:a[r].block.id,order:a[r].order,status:a[r].status});y(r=>({...r,type:"",gallery:"",content:"",order:"",status:!1,block_display:[],blocks:t})),h(route("admin.blog.page.detail.store",n.page.slug))};return e.jsxs(_,{user:x.user,header:e.jsxs("h2",{className:"font-semibold leading-tight text-md text-slate-800",children:["Admin / ",e.jsx(u,{href:route("admin.blog.index"),children:"Blog"})," / ",e.jsx(u,{href:route("admin.blog.page.index"),children:"Pages"})," / ",e.jsx("span",{className:"text-slate-500",children:"Details"})]}),children:[e.jsx(k,{title:"Admin Gallery"}),e.jsxs("section",{className:"w-full p-4",children:[e.jsx(F,{}),e.jsx("div",{className:"flex col-span-12 p-1 bg-white rounded-md",children:e.jsx("div",{className:"w-full p-2",children:e.jsxs("form",{onSubmit:b,className:"flex w-full space-y-6",children:[e.jsxs("div",{className:"w-1/2 p-4",children:[e.jsxs("h3",{className:"font-semibold text-slate-400",children:["Page ",e.jsx("span",{className:"italic text-slate-600",children:n.page.name})]}),e.jsxs("div",{children:[e.jsx(c,{htmlFor:"type",value:"Type"}),e.jsxs(p,{id:"id_type",name:"type",className:"block w-full mt-1",value:l.type,errors:o.type,onChange:s=>i("type",s.target.value),children:[e.jsx("option",{value:"",children:"Select Type"},"tip-start"),n.types.map((s,t)=>e.jsx("option",{value:s,children:s},`tip${t}`))]}),e.jsx(d,{message:o.type,className:"mt-2"})]}),l.type=="Content"?e.jsxs("div",{children:[e.jsx(c,{htmlFor:"content",value:"Contents"}),e.jsxs(p,{id:"id_content",name:"content",className:"block w-full mt-1",value:l.content,errors:o.content,onChange:s=>i("content",s.target.value),children:[e.jsx("option",{value:"",children:"Select Content"},"con-start"),n.contents.map((s,t)=>e.jsx("option",{value:s.id,children:s.name},`tip${t}`))]}),e.jsx(d,{message:o.content,className:"mt-2"})]}):null,l.type=="Gallery"?e.jsxs("div",{children:[e.jsx(c,{htmlFor:"gallery",value:"Galleries"}),e.jsxs(p,{id:"id_gallery",name:"gallery",className:"block w-full mt-1",value:l.gallery,errors:o.gallery,onChange:s=>i("gallery",s.target.value),children:[e.jsx("option",{value:"",children:"Select Gallery"},"gal-start"),n.galleries.map((s,t)=>e.jsx("option",{value:s.id,children:s.name},`tip${t}`))]}),e.jsx(d,{message:o.gallery,className:"mt-2"})]}):null,e.jsxs("div",{className:"mt-2",children:[e.jsx(c,{htmlFor:"order",value:"Block Order"}),e.jsx(C,{id:"id_order",name:"order",value:l.order,className:"block w-full mt-1",type:"number",isFocused:!1,onChange:s=>i("order",s.target.value)}),e.jsx(d,{message:o.order,className:"mt-2"})]}),e.jsx("div",{className:"block mt-4",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(S,{name:"status",checked:l.status,onChange:s=>i("status",!l.status)}),e.jsx("span",{className:"ml-2 text-sm text-gray-600",children:"Is Active"}),e.jsx(d,{message:o.status,className:"mt-2"})]})}),e.jsx("div",{className:"flex justify-end",children:e.jsx(A,{onClick:g,children:"Add"})})]}),e.jsxs("div",{className:"w-1/2 p-2 rounded bg-blue-50",children:[e.jsx("ul",{className:"w-full list-none",children:l.block_display.map((s,t)=>e.jsxs("li",{className:"flex justify-between w-full p-1 mt-1 border border-blue-100 rounded bg-slate-50",children:[e.jsx("div",{children:`${s.order} - ${s.type} : ${s.block.name}`}),e.jsx("div",{className:"flex justify-end",children:e.jsx("span",{className:"p-1 text-red-500 bg-red-300 rounded cursor-pointer",onClick:a=>f(a,t),children:"X"})})]},`dis${t}`))}),e.jsx("div",{className:"flex justify-end mt-4",children:e.jsx(w,{disabled:j,children:"Save"})})]})]})})})]})]})}export{Q as default};