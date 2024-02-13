import{W as n,a as e,b as d}from"./index-4af2f7f3.js";import{G as u}from"./GuestLayout-1d402d7d.js";import{I as c}from"./InputError-36cadade.js";import{P as p}from"./PrimaryButton-0b2d3061.js";import{T as x}from"./TextInput-41c9dc8c.js";import"./ApplicationLogo-1785afe5.js";import"./Dropdown-7d9b658b.js";import"./transition-03e7857e.js";import"./Icon-5b0a4ec5.js";function P({status:t}){const{data:a,setData:r,post:o,processing:m,errors:i}=n({email:""}),l=s=>{s.preventDefault(),o(route("password.email"))};return e.jsxs(u,{children:[e.jsx(d,{title:"Forgot Password"}),e.jsx("div",{className:"flex items-center justify-center w-full h-screen bg-slate-50",children:e.jsxs("div",{className:"w-full p-4 bg-white rounded md:w-1/4",children:[e.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),t&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:t}),e.jsxs("form",{onSubmit:l,children:[e.jsx(x,{id:"email",type:"email",name:"email",value:a.email,className:"block w-full mt-1",isFocused:!0,onChange:s=>r("email",s.target.value)}),e.jsx(c,{message:i.email,className:"mt-2"}),e.jsx("div",{className:"flex items-center justify-end mt-4",children:e.jsx(p,{className:"ml-4",disabled:m,children:"Email Password Reset Link"})})]})]})})]})}export{P as default};
