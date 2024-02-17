import{W as C,a as e}from"./index-daaa950d.js";import{I as p}from"./InputError-2509fabd.js";import{I as x}from"./InputLabel-d98e48d3.js";import{P as w}from"./PrimaryButton-22c3cd02.js";import{T as h}from"./TextInput-cbc3e4dd.js";import{C as n}from"./Checkbox-98cb6b5a.js";import{F}from"./FlashMessage-65223d66.js";import{createSlug as g}from"./Utils-78048c49.js";import"./index-29727f47.js";function T({auth:I,formSuccess:c,permissionData:i}){const{data:l,setData:t,patch:f,post:v,errors:u,processing:j,transform:_,reset:d}=C({display_name:i.display_name||"",is_active:i.is_active||!0,slug:i.slug||"",crud:!1,cruds:["Create","Read","Update","Delete"],permissions:[],permission:{}}),y=s=>{s.preventDefault(),i.slug||t("slug",g(s.target.value))},N=s=>{if(l.display_name=="")return;let a=!l.crud,r=l.cruds,o=[];a&&r.forEach(m=>{o.push({display_name:`${m} ${l.display_name}`,slug:g(`${m} ${l.display_name}`),is_active:l.is_active})}),t(m=>({...m,permissions:o,crud:a}))},b=(s,a)=>{s.preventDefault();let r=l.permissions;r.splice(a,1),t("permissions",r)},k=s=>{s.preventDefault(),i.slug?f(route("admin.permission.update",i.slug),{onSuccess:()=>{d(),c()}}):(l.crud||_(a=>({...a,permissions:[{display_name:a.display_name,slug:a.slug,is_active:a.is_active}]})),v(route("admin.permission.store"),{onSuccess:()=>{d(),c()}}))};return e.jsxs("section",{className:"w-full p-4",children:[e.jsx(F,{}),e.jsx("div",{className:"w-full col-span-12",children:e.jsx("div",{className:"w-full p-4 bg-white rounded-md",children:e.jsxs("form",{onSubmit:k,className:"w-full space-y-6",children:[e.jsxs("div",{children:[e.jsx(x,{htmlFor:"display_name",value:"Display Name"}),e.jsx(h,{id:"display_name",name:"display_name",value:l.display_name,className:"block w-full mt-1",autoComplete:"display_name",isFocused:!0,onChange:s=>t("display_name",s.target.value),onBlur:y,required:!0}),e.jsx(p,{message:u.display_name,className:"mt-2"})]}),l.crud?null:e.jsxs("div",{children:[e.jsx(x,{htmlFor:"slug",value:"Slug"}),e.jsx(h,{id:"slug",name:"slug",value:l.slug,className:"block w-full mt-1",autoComplete:"slug",isFocused:!1,onChange:s=>t("slug",s.target.value),disabled:!0,required:!0}),e.jsx(p,{message:u.slug,className:"mt-2"})]}),e.jsx("div",{className:"block mt-4",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(n,{name:"is_active",checked:l.is_active,onChange:s=>t("is_active",s.target.checked)}),e.jsx("span",{className:"ml-2 text-sm text-gray-600",children:"Active"})]})}),i.slug?null:e.jsx("div",{className:"block mt-4",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(n,{id:"crud",name:"crud",checked:l.crud,onChange:s=>N()}),e.jsx("span",{className:"ml-2 text-sm text-gray-600",children:"Make CRUD"})]})}),l.crud?e.jsx("div",{className:"block mt-4",children:l.permissions.map((s,a)=>e.jsxs("label",{className:"flex items-center mt-2",children:[e.jsx(n,{name:"permissions[]",id:"permissions[]",checked:s.is_active,onChange:r=>b(r,a)}),e.jsx("span",{className:"ml-2 text-sm text-gray-600",children:s.display_name})]},`permlist${a}`))}):null,e.jsx("div",{className:"flex justify-end",children:e.jsx(w,{disabled:j,children:i.slug?"Update":"Save"})})]})})})]})}export{T as default};