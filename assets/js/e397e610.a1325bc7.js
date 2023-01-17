"use strict";(self.webpackChunkrobotframework_and_lambda=self.webpackChunkrobotframework_and_lambda||[]).push([[556],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||l;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1112:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const l={sidebar_position:1},o="Installation",i={unversionedId:"getting-started/install",id:"getting-started/install",title:"Installation",description:"Install AWS CLI and SAM CLI",source:"@site/docs/getting-started/install.mdx",sourceDirName:"getting-started",slug:"/getting-started/install",permalink:"/robotframework-and-lambda/docs/getting-started/install",draft:!1,editUrl:"https://manykarim.github.io/robotframework-and-lambda/docs/getting-started/install.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/robotframework-and-lambda/docs/intro"},next:{title:"Hello World",permalink:"/robotframework-and-lambda/docs/getting-started/helloworld"}},s={},c=[{value:"Install AWS CLI and SAM CLI",id:"install-aws-cli-and-sam-cli",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("h2",{id:"install-aws-cli-and-sam-cli"},"Install AWS CLI and SAM CLI"),(0,a.kt)("p",null,"Install the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html"},"AWS CLI")," and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html"},"SAM CLI")," on your local machine."),(0,a.kt)("p",null,"Refer to the following links for more information:\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started.html"},"Getting started with SAM")),(0,a.kt)("p",null,"To complete the next steps, I assume that you have the following prerequisites:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An AWS account"),(0,a.kt)("li",{parentName:"ul"},"Configured AWS Identity and Access Management (IAM) permissions"),(0,a.kt)("li",{parentName:"ul"},"Configured AWS credentials on your local machine"),(0,a.kt)("li",{parentName:"ul"},"Docker installed and running on your local machine (to test locally and build your Lambda function's deployment package)"),(0,a.kt)("li",{parentName:"ul"},"Homebrew installed on your local machine (macOS and Linux only)"),(0,a.kt)("li",{parentName:"ul"},"AWS SAM CLI installed on your local machine")))}p.isMDXComponent=!0}}]);