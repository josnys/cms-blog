import{e as r,a as e,d as p}from"./index-7dc58b25.js";import{q as x}from"./transition-46e57793.js";const c=r.createContext(),i=({children:t})=>{const[s,n]=r.useState(!1),o=()=>{n(a=>!a)};return e.jsx(c.Provider,{value:{open:s,setOpen:n,toggleOpen:o},children:e.jsx("div",{className:"relative",children:t})})},m=({children:t})=>{const{open:s,setOpen:n,toggleOpen:o}=r.useContext(c);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:o,children:t}),s&&e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>n(!1)})]})},u=({align:t="right",width:s="48",contentClasses:n="py-1 bg-white",children:o})=>{const{open:a,setOpen:g}=r.useContext(c);let l="origin-top";t==="left"?l="origin-top-left left-0":t==="right"&&(l="origin-top-right right-0");let d="";return s==="48"&&(d="w-48"),e.jsx(e.Fragment,{children:e.jsx(x,{as:r.Fragment,show:a,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${l} ${d}`,onClick:()=>g(!1),children:e.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+n,children:o})})})})},f=({className:t="",children:s,...n})=>e.jsx(p,{...n,className:"flex items-center w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out "+t,children:s});i.Trigger=m;i.Content=u;i.Link=f;const j=i;export{j as D};
