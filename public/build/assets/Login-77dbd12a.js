import{W as p,e as f,a as e,b as h,d as g}from"./index-4af2f7f3.js";import{C as j}from"./Checkbox-d0de64a4.js";import{G as w}from"./GuestLayout-1d402d7d.js";import{I as o}from"./InputError-36cadade.js";import{I as l}from"./InputLabel-88f834c3.js";import{P as b}from"./PrimaryButton-0b2d3061.js";import{T as i}from"./TextInput-41c9dc8c.js";import{F as N}from"./FlashMessage-2fccb31c.js";import"./ApplicationLogo-1785afe5.js";import"./Dropdown-7d9b658b.js";import"./transition-03e7857e.js";import"./Icon-5b0a4ec5.js";import"./index-511b6dee.js";function q({status:t,canResetPassword:n}){const{data:r,setData:a,post:c,processing:d,errors:m,reset:u}=p({email:"",password:"",remember:!1});f.useEffect(()=>()=>{u("password")},[]);const x=s=>{s.preventDefault(),c(route("login"))};return e.jsxs(w,{children:[e.jsx(h,{title:"Log in"}),e.jsx("div",{className:"flex items-center justify-center w-full h-screen bg-slate-50",children:e.jsxs("div",{className:"w-full p-4 bg-white rounded md:w-1/4",children:[t&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:t}),e.jsx(N,{}),e.jsxs("form",{onSubmit:x,className:"mt-1",children:[e.jsx("h1",{className:"text-lg font-medium text-slate-700",children:"Login"}),e.jsxs("div",{className:"mt-2",children:[e.jsx(l,{htmlFor:"email",value:"Email / Username"}),e.jsx(i,{id:"email",type:"text",name:"text",value:r.email,className:"block w-full mt-1",autoComplete:"username",isFocused:!0,onChange:s=>a("email",s.target.value)}),e.jsx(o,{message:m.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"password",value:"Password"}),e.jsx(i,{id:"password",type:"password",name:"password",value:r.password,className:"block w-full mt-1",autoComplete:"current-password",onChange:s=>a("password",s.target.value)}),e.jsx(o,{message:m.password,className:"mt-2"})]}),e.jsx("div",{className:"block mt-4",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(j,{name:"remember",checked:r.remember,onChange:s=>a("remember",s.target.checked)}),e.jsx("span",{className:"ml-2 text-sm text-gray-600",children:"Remember me"})]})}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[n&&e.jsx(g,{href:route("password.request"),className:"text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Forgot your password?"}),e.jsx(b,{className:"ml-4",disabled:d,children:"Log in"})]})]})]})})]})}export{q as default};