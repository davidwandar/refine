"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51698],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),m=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=m(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=m(t),f=o,d=l["".concat(s,".").concat(f)]||l[f]||u[f]||a;return t?n.createElement(d,c(c({ref:r},p),{},{components:t})):n.createElement(d,c({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=l;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var m=2;m<a;m++)c[m]=t[m];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},37610:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>m,toc:()=>u});t(67294);var n=t(3905);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})),e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={id:"useDrawerForm",title:"useDrawerForm","example-tags":["form","antd"]},s=void 0,m={unversionedId:"examples/form/antd/useDrawerForm",id:"version-3.xx.xx/examples/form/antd/useDrawerForm",title:"useDrawerForm",description:"useDrawerForm hook allows you to access and manage the forms you've created in the Drawer Component. The code below may help you understand how to create and manage forms in a Drawer component.",source:"@site/versioned_docs/version-3.xx.xx/examples/form/antd/useDrawerForm.md",sourceDirName:"examples/form/antd",slug:"/examples/form/antd/useDrawerForm",permalink:"/docs/3.xx.xx/examples/form/antd/useDrawerForm",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/examples/form/antd/useDrawerForm.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1701758590,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{id:"useDrawerForm",title:"useDrawerForm","example-tags":["form","antd"]},sidebar:"someSidebar",previous:{title:"Custom Form Validation",permalink:"/docs/3.xx.xx/examples/form/antd/custom-form-validation"},next:{title:"useForm",permalink:"/docs/3.xx.xx/examples/form/antd/useForm"}},p={},u=[],l=(f="CodeSandboxExample",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var f;const d={toc:u};function y(e){var{components:r}=e,t=c(e,["components"]);return(0,n.kt)("wrapper",a(function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){o(e,r,t[r])}))}return e}({},d,t),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useDrawerForm")," hook allows you to access and manage the forms you've created in the Drawer Component. The code below may help you understand how to create and manage forms in a Drawer component."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/antd/hooks/form/useDrawerForm/"},"Refer to the ",(0,n.kt)("strong",{parentName:"a"},"refine")," useDrawerForm hook documentation for more information. \u2192")),(0,n.kt)(l,{path:"form-antd-use-drawer-form",mdxType:"CodeSandboxExample"}))}y.isMDXComponent=!0}}]);