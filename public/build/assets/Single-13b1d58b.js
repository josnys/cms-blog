import{e as p,a as e,W as w,d as b,q as k,b as F}from"./index-75108644.js";import{I as y}from"./Icon-43533869.js";import{I as u,T as h}from"./TextInput-788b8eab.js";import{M as S}from"./Modal-2f967b96.js";import{I as f}from"./InputLabel-ff8ba95c.js";import{P as _}from"./PrimaryButton-247a9105.js";import{F as N}from"./FlashMessage-86df9f0a.js";import{C as M,a as I}from"./GallerySection-6d9554b7.js";import{G as q}from"./GuestLayout-04502254.js";import"./transition-62188cf6.js";import"./index-3aaa6f55.js";import"./ApplicationLogo-db339713.js";import"./Dropdown-61bad412.js";const C=p.forwardRef(function({type:t="text",icon:a="",className:l="",isFocused:r=!1,disabled:o=!1,...i},m){const d=m||p.useRef();return p.useEffect(()=>{r&&d.current.focus()},[]),e.jsxs("div",{className:"flex items-center justify-center w-full p-1 space-x-2 bg-white border rounded-full border-slate-300",children:[e.jsx("input",{...i,type:t,className:"appearance-none border-0 rounded-l-full w-4/5 focus:ring-0 "+l,ref:d}),e.jsx("div",{className:"flex justify-end w-1/5",children:e.jsx("button",{...i,className:`inline-flex justify-center items-center w-10 h-10 p-2 bg-yellow-800 border border-transparent rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-yellow-700 focus:bg-yellow-700 active:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition ease-in-out duration-150 ${o&&"opacity-25"} `+l,disabled:o,children:e.jsx(y,{name:a,className:"w-4 h-4 stroke-white stroke-2"})})})]})});function D({searchQuery:s}){const{data:t,setData:a,errors:l,post:r,processing:o}=w({query:""}),i=m=>{m.preventDefault(),s(t.query)};return e.jsx("form",{onSubmit:i,className:"w-full",children:e.jsxs("div",{className:"w-full",children:[e.jsx(C,{id:"query",name:"query",icon:"search",value:t.query,className:"block w-full",autoComplete:"query",isFocused:!1,placeholder:"Search Publication",onChange:m=>a("query",m.target.value),required:!0}),e.jsx(u,{message:l.query,className:"mt-2"})]})})}function $({link:s,children:t,...a}){return e.jsxs(b,{...a,className:"inline-flex items-center px-4 py-2 bg-white border border-slate-200 rounded-full font-semibold text-xs text-slate-600 uppercase tracking-widest hover:bg-slate-100 active:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 transition ease-in-out duration-150 ",href:s,children:[e.jsx(y,{name:"plus-small",className:"mr-2 w-4 h-4 stroke-slate-600"}),t]})}function T({auth:s,formSuccess:t}){const{data:a,setData:l,post:r,errors:o,processing:i,reset:m}=w({name:"",website:"",address_1:"",address_2:"",city:"",state:"",country:"",zipcode:"",gps:null}),d=n=>{n.preventDefault(),r(route("publication.store"),{onSuccess:()=>{m(),t()}})};return e.jsxs("section",{className:"w-full p-4",children:[e.jsx(N,{}),e.jsx("div",{className:"w-full col-span-12",children:e.jsx("div",{className:"w-full p-4 bg-white rounded-md",children:e.jsxs("form",{onSubmit:d,className:"w-full space-y-6",children:[e.jsxs("div",{className:"flex w-full space-x-4",children:[e.jsxs("div",{className:"w-1/2",children:[e.jsx(f,{htmlFor:"name",value:"Name"}),e.jsx(h,{id:"name",name:"name",value:a.name,className:"block w-full mt-1",autoComplete:"name",isFocused:!0,onChange:n=>l("name",n.target.value),required:!0}),e.jsx(u,{message:o.name,className:"mt-2"})]}),e.jsxs("div",{className:"w-1/2",children:[e.jsx(f,{htmlFor:"website",value:"Website Url"}),e.jsx(h,{id:"website",name:"website",value:a.website,type:"url",className:"block w-full mt-1",autoComplete:"website",isFocused:!1,onChange:n=>l("website",n.target.value),required:!0}),e.jsx(u,{message:o.website,className:"mt-2"})]})]}),e.jsxs("div",{className:"",children:[e.jsx(f,{htmlFor:"address_1",value:"Address Line 1"}),e.jsx(h,{id:"address_1",name:"address_1",value:a.address_1,className:"block w-full mt-1",autoComplete:"address_1",isFocused:!1,onChange:n=>l("address_1",n.target.value),required:!0}),e.jsx(u,{message:o.address_1,className:"mt-2"})]}),e.jsxs("div",{className:"",children:[e.jsx(f,{htmlFor:"address_2",value:"Address Line 2"}),e.jsx(h,{id:"address_2",name:"address_2",value:a.address_2,className:"block w-full mt-1",autoComplete:"address_2",isFocused:!1,onChange:n=>l("address_2",n.target.value)}),e.jsx(u,{message:o.address_2,className:"mt-2"})]}),e.jsxs("div",{className:"flex w-full space-x-4",children:[e.jsxs("div",{className:"w-1/2",children:[e.jsx(f,{htmlFor:"city",value:"City"}),e.jsx(h,{id:"city",name:"city",value:a.city,className:"block w-full mt-1",autoComplete:"city",isFocused:!1,onChange:n=>l("city",n.target.value),required:!0}),e.jsx(u,{message:o.city,className:"mt-2"})]}),e.jsxs("div",{className:"w-1/2",children:[e.jsx(f,{htmlFor:"state",value:"State"}),e.jsx(h,{id:"state",name:"state",value:a.state,className:"block w-full mt-1",autoComplete:"state",isFocused:!1,onChange:n=>l("state",n.target.value),required:!0}),e.jsx(u,{message:o.state,className:"mt-2"})]})]}),e.jsxs("div",{className:"flex w-full space-x-4",children:[e.jsxs("div",{className:"w-1/2",children:[e.jsx(f,{htmlFor:"country",value:"Country"}),e.jsx(h,{id:"country",name:"country",value:a.country,className:"block w-full mt-1",autoComplete:"country",isFocused:!1,onChange:n=>l("country",n.target.value),required:!0}),e.jsx(u,{message:o.country,className:"mt-2"})]}),e.jsxs("div",{className:"w-1/2",children:[e.jsx(f,{htmlFor:"zipcode",value:"Zip Code"}),e.jsx(h,{id:"zipcode",name:"zipcode",value:a.zipcode,className:"block w-full mt-1",autoComplete:"zipcode",isFocused:!0,onChange:n=>l("zipcode",n.target.value),required:!0}),e.jsx(u,{message:o.zipcode,className:"mt-2"})]})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx(_,{disabled:i,children:"Done"})})]})})})]})}function A({appData:s,ctaData:t,gsearchPubData:a,...l}){const{data:r,setData:o}=w({openModal:!1}),i=n=>{n.preventDefault(),m()},m=()=>{o("openModal",!r.openModal)},d=n=>{a(n)};return e.jsxs("section",{className:"w-full pt-10 pb-40 bg-gradient-to-t from-orange-50 to-white",children:[e.jsx("div",{className:"flex justify-center w-full",children:e.jsxs("div",{className:"w-full p-4 text-center sm:w-1/2 sm:p-8 text-slate-700",children:[s.slogan?e.jsx("h2",{className:"w-3/4 mx-auto mt-4 text-5xl font-semibold sm:w-full",children:s.slogan}):null,s.description?e.jsx("div",{className:"mt-4 font-light sm:mt-8 text-slate-500",dangerouslySetInnerHTML:{__html:s.description}}):null,e.jsxs("div",{className:"flex items-center justify-center w-full mt-8 space-x-4",children:[e.jsx("a",{href:t.android,className:"px-2 py-1 text-xs font-medium bg-white border rounded-full sm:text-sm sm:px-4 sm:py-2 border-slate-300",children:"Download For Android"}),e.jsx("a",{href:t.ios,className:"px-2 py-1 text-xs font-medium bg-yellow-800 border border-yellow-700 rounded-full sm:text-sm sm:px-4 sm:py-2 text-yellow-50",children:"Download For iOS"})]})]})}),e.jsx("div",{className:"w-full",children:e.jsx("div",{className:"container mx-auto",children:e.jsxs("div",{className:"w-full p-4 md:flex md:items-center",children:[e.jsx("div",{className:"font-medium text-center text-md md:text-lg lg:text-2xl text-slate-600 md:text-left md:w-2/5",children:t.extra}),e.jsxs("div",{className:"items-center w-full mt-4 space-x-2 md:mt-0 md:flex md:space-x-4 md:justify-between md:p-0 md:w-3/5",children:[e.jsx("div",{className:"w-full md:w-4/6",children:e.jsx(D,{searchQuery:d})}),e.jsx("div",{className:"flex justify-center w-full mt-4 md:w-2/6 md:mt-0",children:e.jsx($,{link:"#",onClick:i,children:"Add Publication"})})]})]})})}),e.jsxs(S,{show:r.openModal,children:[e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsx("h2",{className:"p-4 text-lg font-medium text-center text-gray-700 md:text-left",children:"Add a publication"}),e.jsx("div",{className:"px-2 py-1 text-sm text-yellow-700 cursor-pointer",onClick:i,children:"x close"})]}),e.jsx("p",{className:"p-4 text-slate-500",children:"Content to be added"}),e.jsx(T,{formSuccess:i})]})]})}function z({ctaData:s,...t}){return e.jsx("section",{className:"w-full pt-20 pb-20 bg-white md:py-10",children:e.jsx("div",{className:"flex justify-center w-full",children:e.jsxs("div",{className:"w-full p-2 text-center md:p-8 md:w-1/2 text-slate-700",children:[e.jsx("h2",{className:"w-full mt-4 text-3xl font-semibold md:w-2/3 md:mx-auto md:text-5xl",children:"Download the app"}),e.jsx("p",{className:"mt-4 text-slate-500",children:"Select your preferred app store to download our latest version."}),e.jsxs("div",{className:"flex items-center justify-center w-full mt-4 space-x-4 md:mt-8",children:[e.jsx("a",{href:s.android,className:"px-2 py-1 text-xs font-medium bg-white border rounded-full md:text-md md:px-4 md:py-2 border-slate-300",children:"Download For Android"}),e.jsx("a",{href:s.ios,className:"px-2 py-1 text-xs font-medium bg-yellow-800 border border-yellow-700 rounded-full md:text-md md:px-4 md:py-2 text-yellow-50",children:"Download For iOS"})]})]})})})}function E({content:s,className:t=""}){return e.jsx("section",{id:s.id??"",className:`w-full p-4 mt-4 ${t}`,children:e.jsx("div",{className:"w-full py-4 md:container md:col-span-12 md:py-8 md:mx-auto",children:e.jsxs("div",{className:"w-full md:flex md:space-x-4 text-slate-600",children:[e.jsxs("div",{className:"w-full md:w-1/2",children:[e.jsx("h1",{className:"text-2xl font-medium md:text-4xl",children:s.name}),s.intro?e.jsx("article",{className:"w-full prose text-justify text-slate-500 max-w-none prose-md",dangerouslySetInnerHTML:{__html:s.intro}}):null,s.cover?e.jsx("img",{src:s.cover,className:"object-cover object-center w-full mt-4 h-60 rounded-xl"}):null]}),e.jsxs("div",{className:"relative w-full h-64 mt-4 md:mt-0 md:h-96 md:w-1/2",children:[e.jsx("div",{className:"absolute top-0 z-10 w-full h-2/6 md:h-1/6 bg-gradient-to-b from-white to-transparent"}),e.jsx("div",{className:"h-full overflow-y-auto md:h-96",children:e.jsx("article",{className:"w-full prose text-justify max-w-none prose-md prose-p:bg-white prose-p:p-4 prose-p:border-l-4 prose-p:border-yellow-800",dangerouslySetInnerHTML:{__html:s.body}})}),e.jsx("div",{className:"absolute bottom-0 z-10 w-full h-2/6 md:h-1/6 bg-gradient-to-t from-white to-transparent"})]})]})})})}function L({mapData:s,...t}){console.log(s);const a=p.useRef();p.useEffect(()=>{const r=document.createElement("script");r.src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBR3hWMipMRMEc8it4HQaP7Vm7isx8GPwQ&libraries=places&language=en",r.async=!0,window.document.body.appendChild(r),r.addEventListener("load",()=>{l()})},[s]);function l(){let r=new window.google.maps.Map(a.current,{zoom:5,center:{lat:40.423584474953735,lng:-99.95230011373597},disableDefaultUI:!0});s.map((o,i)=>{var c,x;let m=`<div key='marker${i}' className="">
                         <h2 className="text-gray-700 font-bodl text-md">${o.name}</h2>
                    </div>`,d=new window.google.maps.InfoWindow({content:m}),n={lat:parseFloat((c=o.location)==null?void 0:c.lat),lng:parseFloat((x=o.location)==null?void 0:x.lon)},g=new window.google.maps.Marker({position:n,map:r,animation:window.google.maps.Animation.DROP,title:`${o.name}`,icon:o.marker});g.addListener("click",()=>{d.open(r,g)})})}return e.jsx("div",{className:"w-full p-1 m-2 bg-white shadow-lg md:m-4 md:p-3 rounded-xl shadow-slate-300 h-[300px] md:h-[500px]",children:e.jsx("div",{id:"google-map",ref:a,className:"rounded-xl",style:{width:"100%",height:"100%"}})})}function R({className:s="",disabled:t,children:a,...l}){return e.jsx("button",{...l,className:`inline-flex items-center px-4 py-2 bg-yellow-800 border border-transparent rounded-full font-semibold text-xs text-white uppercase tracking-widest hover:bg-yellow-700 focus:bg-yellow-700 active:bg-yellow-900 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition ease-in-out duration-150 ${t&&"opacity-25"} `+s,disabled:t,children:a})}const v=p.forwardRef(function({type:t="text",className:a="",isFocused:l=!1,...r},o){const i=o||p.useRef();return p.useEffect(()=>{l&&i.current.focus()},[]),e.jsx("input",{...r,type:t,className:"border-gray-300 focus:border-yellow-700 focus:ring-yellow-700 rounded-full "+a,ref:i})}),P=p.forwardRef(function({className:t="",isFocused:a=!1,...l},r){const o=r||p.useRef();return p.useEffect(()=>{a&&o.current.focus()},[]),e.jsx("div",{className:t,children:e.jsx("textarea",{...l,className:"border-gray-300 focus:border-yellow-700 p-4 focus:ring-yellow-700 rounded-xl "+t,ref:o})})});function W({bgData:s}){const{data:t,setData:a,post:l,errors:r,processing:o,reset:i}=w({name:"",email:"",message:""}),m=d=>{d.preventDefault(),l(route("site.contact"),{onSuccess:i()})};return e.jsx("section",{className:"w-full p-4",children:e.jsx("div",{className:"w-full md:container md:col-span-12 md:mx-auto",children:e.jsx("div",{className:"w-full p-2 bg-right bg-no-repeat bg-contain rounded-lg md:p-8 bg-slate-200",style:{backgroundImage:`url(${s})`},children:e.jsxs("form",{onSubmit:m,className:"w-full space-y-4 md:w-2/3 md:space-y-6",children:[e.jsxs("div",{className:"w-full bg-white/[.65] md:bg-transparent rounded md:rounded-none p-2",children:[e.jsx("h2",{className:"mt-2 text-xl font-medium text-center md:mt-4 md:text-4xl",children:"We'd love to hear from you!"}),e.jsx("p",{className:"text-xs text-slate-800 md:text-slate-500 md:text-sm",children:"We welcome your inquiries and are here to provide you with more information about how Enpak can help keep you informed and engaged with you local community and the world at large."})]}),e.jsx(N,{}),e.jsxs("div",{className:"w-full md:flex md:space-x-4",children:[e.jsxs("div",{className:"w-full md:w-1/2",children:[e.jsx(f,{htmlFor:"name",value:"Name"}),e.jsx(v,{id:"name",name:"name",value:t.name,className:"block w-full mt-1",autoComplete:"name",isFocused:!1,onChange:d=>a("name",d.target.value),required:!0}),e.jsx(u,{message:r.name,className:"mt-2"})]}),e.jsxs("div",{className:"w-full mt-3 md:w-1/2 md:mt-0",children:[e.jsx(f,{htmlFor:"email",value:"Email"}),e.jsx(v,{id:"email",name:"email",value:t.email,type:"email",className:"block w-full mt-1",autoComplete:"email",isFocused:!1,onChange:d=>a("email",d.target.value),required:!0}),e.jsx(u,{message:r.email,className:"mt-2"})]})]}),e.jsxs("div",{className:"w-full",children:[e.jsx(f,{htmlFor:"message",value:"Message"}),e.jsx(P,{id:"message",name:"message",value:t.message,className:"block w-full mt-1",onChange:d=>a("message",d.target.value),required:!0}),e.jsx(u,{message:r.message,className:"mt-2"})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx(R,{disabled:o,children:"Submit"})})]})})})})}function B(){const{data:s,setData:t,errors:a,post:l,processing:r}=w({email:""}),o=i=>{i.preventDefault(),l(route("newsletter.subscribe"))};return e.jsxs("div",{className:"w-full p-4 rounded-lg bg-slate-100",children:[e.jsx("h3",{className:"text-lg font-medium md:text-xl",children:"Sign up for our newsletter"}),e.jsx("p",{className:"text-sm text-slate-500",children:"As a subscriber, you'll be joining a movement that's dedicated to support local news."}),e.jsxs("form",{onSubmit:o,className:"w-full mt-4",children:[e.jsx(N,{}),e.jsxs("div",{className:"w-full",children:[e.jsx(C,{id:"email",name:"email",icon:"chevron-right",value:s.email,type:"email",className:"block w-full",autoComplete:"email",isFocused:!1,placeholder:"Email Address",onChange:i=>t("email",i.target.value),required:!0}),e.jsx(u,{message:a.email,className:"mt-2"})]})]})]})}function H({newsletters:s}){let t={},a=[];for(let l=0;l<s.length;l++)l==0?t=s[l]:a.push(s[l]);return e.jsx("section",{className:"w-full py-8",children:e.jsxs("div",{className:"w-full md:container md:mx-auto text-slate-600",children:[e.jsx("h2",{className:"pl-4 text-2xl font-medium md:text-4xl md:p-0",children:"Newsletter Updates"}),e.jsxs("div",{className:"w-full p-4 mt-0 md:mt-4 md:p-0 md:flex md:divide-x",children:[e.jsxs("div",{className:"w-full md:w-2/3 md:pr-8",children:[t.cover?e.jsx("img",{src:t.cover,className:"object-cover object-center w-full mt-4 h-96 rounded-xl"}):null,e.jsx(b,{href:route("site.page",t.slug),className:"hover:text-yellow-700 focus:text-yellow-700 hover:underline focus:underline",children:e.jsx("h3",{className:"mt-4 text-xl font-medium md:text-2xl",children:t.title})}),e.jsx("div",{className:"w-full prose text-slate-500 max-w-none prose-md line-clamp-3",dangerouslySetInnerHTML:{__html:t.intro}})]}),e.jsxs("div",{className:"mt-2 md:mt-0 md:grid md:w-1/3 md:grid-cols-1 md:gap-2 md:pl-8",children:[a.map((l,r)=>e.jsxs("div",{className:"py-2 border-t border-slate-200 md:border-none md:pt-0",children:[e.jsx(b,{href:route("site.page",l.slug),className:"hover:text-yellow-700 focus:text-yellow-700 hover:underline focus:underline",children:e.jsx("h3",{className:"font-medium text-md md:text-xl",children:l.title})}),e.jsx("div",{className:"w-full text-sm prose md:text-md text-slate-500 max-w-none prose-md line-clamp-2",dangerouslySetInnerHTML:{__html:l.intro}})]},`nlfeat${r}`)),e.jsx(B,{})]})]})]})})}function le(){const{info:s,app:t,additional:a}=k().props,l=s.page.data??s.page,r=s.cta??null,o=Object.values(l.block_display.blocks),i=Object.values(l.block_display.newsletter),{data:m,setData:d}=w({mapData:r.map}),n=(c,x)=>{let j=x%2==0?"bg-white":"bg-orange-50/[.85]";return c.type=="content"?c.display_full?e.jsx(M,{content:c,className:j},`section-${x}`):e.jsx(E,{content:c,className:j},`section-${x}`):c.type=="gallery"?e.jsx(I,{content:c,className:j,carousel:!0},`section-${x}`):null},g=c=>{let x=r.map.filter(j=>j.name.toLowerCase().lastIndexOf(`${c.toLowerCase()}`)!=-1);d("mapData",x)};return e.jsxs(q,{children:[e.jsx(F,{title:"Welcome"}),r?e.jsx(A,{appData:t.data,ctaData:r.app,gsearchPubData:g}):null,r?e.jsx("section",{className:"z-0 flex items-center justify-center w-full -mt-36",children:e.jsx("div",{className:"flex items-center w-full md:container md:mx-auto",children:e.jsx("div",{className:"w-3/4 mx-auto",children:e.jsx(L,{mapData:m.mapData})})})}):null,o.map((c,x)=>n(c,x)),r?e.jsx(z,{ctaData:r.app}):null,i.length?e.jsx(H,{newsletters:i}):null,e.jsx(W,{bgData:a.mascot})]})}export{le as default};
