import{isObjectLike as p}from"./_snowpack/pkg/taio/build/utils/validator/object.js";import{isPrimitive as a,isString as l,isSymbol as s}from"./_snowpack/pkg/taio/build/utils/validator/primitive.js";export const getDisplay=t=>{if(a(t))return s(t)?t.toString():`${t}`;try{return JSON.stringify(t,(i,e)=>s(e)?e.toString():typeof e=="function"?`${e}`:e,2)}catch(i){return`${t}`}},createPending=()=>{let t,i,e=new Promise((...r)=>{[t,i]=r});return{done:()=>t(),abort:r=>i(r),ready:e}},createFutureValue=()=>{let t,i,e=new Promise((...r)=>{[t,i]=r});return{done:r=>t(r),abort:r=>i(r),promise:e}},createMessages=t=>{const i={},e=[],r=o=>{if(l(o)&&Reflect.set(i,e.join("."),o),p(o))for(const[n,c]of Object.entries(o))e.push(n),r(c);e.pop()};return r(t),i};