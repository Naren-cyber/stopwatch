import{MenuItem as d,Select as j}from"../../_snowpack/pkg/@material-ui/core.js";import n,{useMemo as P}from"../../_snowpack/pkg/react.js";import{TypedObject as b}from"../../_snowpack/pkg/taio/build/libs/typescript/object.js";const r=t=>{const{list:s,onChange:o,displayMapping:a,identity:p=Object.is,selectProps:l,menuProps:m}=t,i=[...s],c=t.value,u=P(()=>c==null?"":i.find(e=>p(e,c)),[s,c])??"",k={...l,value:u,onChange:e=>{o?.(e.target.value)}};return n.createElement(j,{...k},i.map((e,g)=>n.createElement(d,{...m,value:e,key:g},a(e))))};b.defineProperty(r,"key",{get:()=>t=>(s,o)=>Object.is(s[t],o[t])});const y=r;export{y as ListPicker};
