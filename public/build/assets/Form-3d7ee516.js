import{W as j,a as s}from"./index-4af2f7f3.js";import{I as l}from"./InputError-36cadade.js";import{I as f}from"./InputLabel-88f834c3.js";import{P as N}from"./PrimaryButton-0b2d3061.js";import{T as g}from"./TextInput-41c9dc8c.js";import{C as c}from"./Checkbox-d0de64a4.js";import{F as v}from"./FlashMessage-2fccb31c.js";import"./index-511b6dee.js";function y({auth:w,formSuccess:i,categoryData:e}){var o,u;const{data:a,setData:n,patch:d,post:x,errors:t,processing:h,reset:r}=j({name:e.name||"",show_main_menu:((o=e.show_main_menu)==null?void 0:o.value)||!1,status:((u=e.status)==null?void 0:u.value)||!1}),p=m=>{m.preventDefault(),e.slug?d(route("admin.blog.category.update",e.slug),{onSuccess:()=>{r(),i()}}):x(route("admin.blog.category.store"),{onSuccess:()=>{r(),i()}})};return s.jsxs("section",{className:"w-full p-4",children:[s.jsx(v,{}),s.jsx("div",{className:"w-full col-span-12",children:s.jsx("div",{className:"w-full p-4 bg-white rounded-md",children:s.jsxs("form",{onSubmit:p,className:"w-full space-y-6",children:[s.jsxs("div",{children:[s.jsx(f,{htmlFor:"name",value:"Name"}),s.jsx(g,{id:"name",name:"name",value:a.name,className:"block w-full mt-1",autoComplete:"name",isFocused:!0,onChange:m=>n("name",m.target.value),required:!0}),s.jsx(l,{message:t.name,className:"mt-2"})]}),s.jsx("div",{className:"block mt-4",children:s.jsxs("label",{className:"flex items-center",children:[s.jsx(c,{name:"show_main_menu",checked:a.show_main_menu,onChange:m=>n("show_main_menu",!a.show_main_menu)}),s.jsx("span",{className:"ml-2 text-sm text-gray-600",children:"Show in Main Menu"}),s.jsx(l,{message:t.show_main_menu,className:"mt-2"})]})}),s.jsx("div",{className:"block mt-4",children:s.jsxs("label",{className:"flex items-center",children:[s.jsx(c,{name:"status",checked:a.status,onChange:m=>n("status",!a.status)}),s.jsx("span",{className:"ml-2 text-sm text-gray-600",children:"Is Active"}),s.jsx(l,{message:t.status,className:"mt-2"})]})}),s.jsx("div",{className:"flex justify-end",children:s.jsx(N,{disabled:h,children:e.slug?"Update":"Save"})})]})})})]})}export{y as default};
