import{identity as n}from"./_snowpack/pkg/taio/build/libs/custom/functions/identity.js";import{isAnyOf as p,isUnionThat as r}from"./_snowpack/pkg/taio/build/utils/validator/array.js";import{isObject as i}from"./_snowpack/pkg/taio/build/utils/validator/object.js";import{isBoolean as l,isString as o,isUndefined as u}from"./_snowpack/pkg/taio/build/utils/validator/primitive.js";import{defineValidator as t,is as e,optional as c}from"./_snowpack/pkg/taio/build/utils/validator/utils.js";const a=s=>!s||!!s;export const isExecutionTask=t(i({taskId:o,taskName:o,startTime:o})),isLogLevel=t(p(...n(["debug","error","info","log","warn"])));const d=t(i({level:isLogLevel,payload:a}));export const isTaskExecutionOutput=t(i({type:e("output"),taskId:o,output:d})),isTaskExecutionTerminateSignal=t(i({type:e("terminate"),taskId:o,result:a,hasCleanUp:l})),isCleanUp=s=>typeof s=="function",isScriptRunResultObject=t(i({custom:a,cleanUp:c(isCleanUp)})),isScriptRunResult=t(r(isScriptRunResultObject,isCleanUp,u));