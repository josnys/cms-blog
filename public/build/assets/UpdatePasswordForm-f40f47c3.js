import{e as l,W as g,a as s}from"./index-4af2f7f3.js";import{I as n}from"./InputError-36cadade.js";import{I as d}from"./InputLabel-88f834c3.js";import{P as v}from"./PrimaryButton-0b2d3061.js";import{T as c}from"./TextInput-41c9dc8c.js";import{F as _}from"./FlashMessage-2fccb31c.js";import{q as y}from"./transition-03e7857e.js";import"./index-511b6dee.js";function k({className:u="",formSuccess:w}){const p=l.useRef(),i=l.useRef(),{data:e,setData:a,errors:o,put:f,reset:t,processing:x,recentlySuccessful:h}=g({current_password:"",password:"",password_confirmation:""}),j=r=>{r.preventDefault(),f(route("password.update"),{preserveScroll:!0,onSuccess:()=>{t(),w()},onError:m=>{m.password&&(t("password","password_confirmation"),p.current.focus()),m.current_password&&(t("current_password"),i.current.focus())}})};return s.jsxs("section",{className:u,children:[s.jsxs("header",{children:[s.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Update Password"}),s.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Ensure your account is using a long, random password to stay secure."})]}),s.jsxs("form",{onSubmit:j,className:"mt-6 space-y-6",children:[s.jsx(_,{}),s.jsxs("div",{children:[s.jsx(d,{htmlFor:"current_password",value:"Current Password"}),s.jsx(c,{id:"current_password",ref:i,value:e.current_password,onChange:r=>a("current_password",r.target.value),type:"password",className:"block w-full mt-1",autoComplete:"current-password"}),s.jsx(n,{message:o.current_password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(d,{htmlFor:"password",value:"New Password"}),s.jsx(c,{id:"password",ref:p,value:e.password,onChange:r=>a("password",r.target.value),type:"password",className:"block w-full mt-1",autoComplete:"new-password"}),s.jsx(n,{message:o.password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(d,{htmlFor:"password_confirmation",value:"Confirm Password"}),s.jsx(c,{id:"password_confirmation",value:e.password_confirmation,onChange:r=>a("password_confirmation",r.target.value),type:"password",className:"block w-full mt-1",autoComplete:"new-password"}),s.jsx(n,{message:o.password_confirmation,className:"mt-2"})]}),s.jsxs("div",{className:"flex items-center float-right gap-4",children:[s.jsx(v,{disabled:x,children:"Save"}),s.jsx(y,{show:h,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:s.jsx("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})]})}export{k as default};