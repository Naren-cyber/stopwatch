import e,{useState as m}from"./_snowpack/pkg/react.js";import{AppBar as c,Box as n,Tab as l,Tabs as s,ThemeProvider as i}from"./_snowpack/pkg/@material-ui/core.js";import{darkTheme as p}from"./themes/dark.js";import u from"./_snowpack/pkg/react-swipeable-views.js";import{ScriptRunner as d}from"./pages/script-runner/index.js";import{ScriptManager as g}from"./pages/script-manager/index.js";import{ModuleManager as E}from"./pages/module-manager/index.js";import{IntlProvider as f}from"./_snowpack/pkg/react-intl.js";import{useLazyLoadLocaleMessages as k,useLocale as b,useTypedIntl as j}from"./i18n/core/locale.js";const v=p;export const App=()=>{const t=b(),a=k(t);return a?e.createElement(f,{locale:t,messages:a},e.createElement(i,{theme:v},e.createElement(x,null))):null};const x=()=>{const[t,a]=m(0),r=j();return e.createElement(e.Fragment,null,e.createElement(c,{position:"static",color:"default"},e.createElement(s,{value:t,indicatorColor:"primary",onChange:(w,o)=>a(o)},e.createElement(l,{label:r("menu.runScript"),value:0}),e.createElement(l,{label:r("menu.manageScript"),value:1}),e.createElement(l,{label:r("menu.manageModules"),value:2}))),e.createElement(u,{index:t,onChangeIndex:a},e.createElement(n,null,e.createElement(d,null)),e.createElement(n,null,e.createElement(g,null)),e.createElement(n,null,e.createElement(E,null))))};