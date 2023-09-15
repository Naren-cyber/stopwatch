import{Box as m,colors as p,Divider as b,FormControl as f,IconButton as o,InputLabel as y,TextField as L,Tooltip as l,Typography as O,useTheme as F}from"../../_snowpack/pkg/@material-ui/core.js";import*as a from"../../_snowpack/pkg/ramda.js";import{AddOutlined as T,DeleteOutline as _,EditOutlined as D,Explore as M,LaunchOutlined as P,RefreshOutlined as R,SaveAlt as A}from"../../_snowpack/pkg/@material-ui/icons.js";import e,{useEffect as B,useState as g}from"../../_snowpack/pkg/react.js";import{ParameterEditor as q}from"../../components/parameter-editor/index.js";import{setStateEffect as H}from"../../utils/well-typed.js";import{useLoadingPipe as U}from"../../hooks/use-loading.js";import{ListPicker as v}from"../../components/list-picker/index.js";import{useStyles as $}from"../../components/common/common-mui-styles.js";import w from"../../_snowpack/pkg/classnames.js";import S from"../../components/common/common.module.css.proxy.js";import{useTypedIntl as z}from"../../i18n/core/locale.js";export const ScriptManager=({})=>{const s=$(),d=F(),r=z(),[C,j]=g([]),[t,u]=g(),[h,c]=U(()=>SessionInvoker.ScriptService.getList(),a.pipe(H(j),a.tap(n=>u(i=>n.find(N=>N.name===i?.name)??n[0]))));B(a.pipe(c,()=>window.SessionHubs.on("script-list-update",c)),[]);const[E,x]=g(""),[k,I]=g("ts");return e.createElement(m,null,e.createElement(m,{className:S["center-row"]},e.createElement(l,{title:r("manager.script.import.tooltip")},e.createElement(o,{style:{color:d.palette.primary.main},onClick:()=>SessionInvoker.ScriptService.import()},e.createElement(A,null))),e.createElement(l,{title:r("manager.script.refresh.tooltip")},e.createElement(o,{style:{color:p.green[500]},onClick:c,className:h?S.spinning:void 0},e.createElement(R,null))),e.createElement(f,{className:w(s.selectControl,s.formControl)},e.createElement(y,null,r("manager.script.picker.label")),e.createElement(v,{list:C,value:t,onChange:u,displayMapping:a.prop("name"),identity:(n,i)=>n.name===i.name})),e.createElement(l,{title:r("manager.script.delete.tooltip")},e.createElement(o,{style:{color:p.red[500]},onClick:async()=>{!t||(await SessionInvoker.ScriptService.delete(t),await c())}},e.createElement(_,null))),e.createElement(l,{title:r("manager.script.edit.tooltip")},e.createElement(o,{style:{color:p.amber[500]},onClick:()=>t&&SessionInvoker.ScriptService.editScript(t)},e.createElement(D,null))),e.createElement(l,{title:r("manager.script.export.tooltip")},e.createElement(o,{style:{color:p.green[500]},onClick:()=>t&&SessionInvoker.ScriptService.export(t)},e.createElement(P,null)))),e.createElement(m,{className:S["center-row"]},e.createElement(L,{value:E,onChange:n=>x(n.target.value),label:r("manager.script.new.name.label")}),e.createElement(f,{className:w(s.selectControl,s.formControl)},e.createElement(y,null,r("manager.script.new.language.label")),e.createElement(v,{list:a.identity(["ts","js"]),value:k,onChange:I,displayMapping:a.identity})),e.createElement(o,{color:"primary",disabled:!E,onClick:a.pipe(a.always({argumentConfig:{},description:"",lang:k,name:E}),a.tap(async n=>{await SessionInvoker.ScriptService.create(n);const i=await c();u(i.find(a.propEq("name",n.name)))}))},e.createElement(T,null)),e.createElement(l,{title:r("manager.script.explore.rootFolder"),onClick:()=>SessionInvoker.ScriptService.openUserScriptsFolder()},e.createElement(o,{style:{color:d.palette.primary.main}},e.createElement(M,null)))),e.createElement(m,{position:"relative"},!!t&&e.createElement(e.Fragment,null,e.createElement(O,{variant:"h6"},r("manager.script.params.title",{scriptName:t.name})),e.createElement(b,{style:{margin:`${d.spacing(2)}px 0`}}),e.createElement(q,{onDone:(n,i)=>{SessionInvoker.ScriptService.updateScript({...t,description:i,argumentConfig:n})},configObject:t.argumentConfig,description:t.description}))))};