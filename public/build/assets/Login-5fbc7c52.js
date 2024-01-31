import{W as p,e as f,a as e,b as h,d as g}from"./index-7dc58b25.js";import{C as j}from"./Checkbox-d9ea34f5.js";import{G as w}from"./GuestLayout-6f6ac395.js";import{T as o,I as l}from"./TextInput-481b2387.js";import{I as i}from"./InputLabel-888156fa.js";import{P as b}from"./PrimaryButton-ae1b3e23.js";import{F as N}from"./FlashMessage-d0078f82.js";import"./ApplicationLogo-99a3ea2b.js";import"./Dropdown-cedcf25d.js";import"./transition-46e57793.js";import"./Icon-1a6eee67.js";import"./index-232d8d68.js";function T({status:t,canResetPassword:n}){const{data:a,setData:r,post:c,processing:d,errors:m,reset:u}=p({email:"",password:"",remember:!1});f.useEffect(()=>()=>{u("password")},[]);const x=s=>{s.preventDefault(),c(route("login"))};return e.jsxs(w,{children:[e.jsx(h,{title:"Log in"}),e.jsx("div",{className:"flex items-center justify-center w-full h-screen bg-slate-50",children:e.jsxs("div",{className:"w-full p-4 bg-white rounded md:w-1/4",children:[t&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:t}),e.jsx(N,{}),e.jsxs("form",{onSubmit:x,className:"mt-1",children:[e.jsx("h1",{className:"text-lg font-medium text-slate-700",children:"Login"}),e.jsxs("div",{className:"mt-2",children:[e.jsx(i,{htmlFor:"email",value:"Email / Username"}),e.jsx(o,{id:"email",type:"text",name:"text",value:a.email,className:"block w-full mt-1",autoComplete:"username",isFocused:!0,onChange:s=>r("email",s.target.value)}),e.jsx(l,{message:m.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"password",value:"Password"}),e.jsx(o,{id:"password",type:"password",name:"password",value:a.password,className:"block w-full mt-1",autoComplete:"current-password",onChange:s=>r("password",s.target.value)}),e.jsx(l,{message:m.password,className:"mt-2"})]}),e.jsx("div",{className:"block mt-4",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(j,{name:"remember",checked:a.remember,onChange:s=>r("remember",s.target.checked)}),e.jsx("span",{className:"ml-2 text-sm text-gray-600",children:"Remember me"})]})}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[n&&e.jsx(g,{href:route("password.request"),className:"text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Forgot your password?"}),e.jsx(b,{className:"ml-4",disabled:d,children:"Log in"})]})]})]})})]})}export{T as default};
