"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[437],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},282:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var r=n(3117),a=(n(7294),n(3905));const i={},o="Transfer",s={unversionedId:"specs/banking/transfer",id:"specs/banking/transfer",title:"Transfer",description:"Along with the main navigation, the transfer page should include the following content:",source:"@site/docs/specs/banking/transfer.md",sourceDirName:"specs/banking",slug:"/specs/banking/transfer",permalink:"/swan-partner-frontend/specs/banking/transfer",draft:!1,editUrl:"https://github.com/swan-io/swan-partner-frontend/edit/main/docs/docs/specs/banking/transfer.md",tags:[],version:"current",frontMatter:{},sidebar:"specs",previous:{title:"Account",permalink:"/swan-partner-frontend/specs/banking/account"},next:{title:"Cards",permalink:"/swan-partner-frontend/specs/banking/cards"}},l={},c=[{value:"Transfer types",id:"transfer-types",level:2},{value:"New transfer",id:"new-transfer",level:2},{value:"New standing order",id:"new-standing-order",level:2}],p={toc:c},u="wrapper";function f(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"transfer"},"Transfer"),(0,a.kt)("p",null,"Along with the main navigation, the ",(0,a.kt)("strong",{parentName:"p"},"transfer page")," should include the following content:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"New transfer")," call to action, through which you can send a new transfer or schedule a new standing order"),(0,a.kt)("li",{parentName:"ul"},"List of ",(0,a.kt)("strong",{parentName:"li"},"active standing orders")," with option to filter for canceled standing orders",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Recipient"),(0,a.kt)("li",{parentName:"ul"},"Short explanation"),(0,a.kt)("li",{parentName:"ul"},"Recurrence"),(0,a.kt)("li",{parentName:"ul"},"Next execution"),(0,a.kt)("li",{parentName:"ul"},"Amount"),(0,a.kt)("li",{parentName:"ul"},"Actions (notably, a ",(0,a.kt)("strong",{parentName:"li"},"cancel")," button)")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of the main transfer page",src:n(6865).Z,width:"2744",height:"1810"})),(0,a.kt)("h2",{id:"transfer-types"},"Transfer types"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of the transfer type picker",src:n(4522).Z,width:"2744",height:"1810"})),(0,a.kt)("p",null,"You can pick between ",(0,a.kt)("strong",{parentName:"p"},"regular")," and ",(0,a.kt)("strong",{parentName:"p"},"standing order")," (recurring transfer)."),(0,a.kt)("h2",{id:"new-transfer"},"New transfer"),(0,a.kt)("p",null,"When sending a new transfer, the following information should be collected from the user:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Recipient name"),(0,a.kt)("li",{parentName:"ul"},"Recipient IBAN"),(0,a.kt)("li",{parentName:"ul"},"Reason (short explanation, reference number\u2014whatever is needed for your use case)"),(0,a.kt)("li",{parentName:"ul"},"Transfer amount"),(0,a.kt)("li",{parentName:"ul"},"Schedule (",(0,a.kt)("em",{parentName:"li"},"standard")," by default; can also choose ",(0,a.kt)("em",{parentName:"li"},"instant"),")")),(0,a.kt)("p",null,"After the user clicks ",(0,a.kt)("strong",{parentName:"p"},"Confirm")," to send their transfer, redirect them to your consent URL."),(0,a.kt)("admonition",{title:"Instant transfers with fallback",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For instant transfers, consider using ",(0,a.kt)("inlineCode",{parentName:"p"},"InstantWithFallback")," mode.\nIf instant transfers aren't available for any reason, the transfer will continue as a standard transfer.\nThis saves the user from needing to send a different transaction.\nLearn more about ",(0,a.kt)("a",{parentName:"p",href:"https://docs.swan.io/concept/payment/instant-credit-transfer#fallback-to-standard-transfer"},"transfer modes")," in our main documentation.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of a portion of the new transfer form",src:n(5700).Z,width:"2744",height:"1810"})),(0,a.kt)("h2",{id:"new-standing-order"},"New standing order"),(0,a.kt)("p",null,"When sending a new standing order, the following information should be collected from the user:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Recipient name"),(0,a.kt)("li",{parentName:"ul"},"Recipient IBAN"),(0,a.kt)("li",{parentName:"ul"},"Reason (short explanation, reference number\u2014whatever is needed for your use case)"),(0,a.kt)("li",{parentName:"ul"},"Transfer type (",(0,a.kt)("em",{parentName:"li"},"specified amount")," or ",(0,a.kt)("em",{parentName:"li"},"full balance"),") and amount",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For ",(0,a.kt)("em",{parentName:"li"},"full balance transfers"),", the user indicates how much should be left in the account. Everything else is transferred."))),(0,a.kt)("li",{parentName:"ul"},"Schedule (",(0,a.kt)("em",{parentName:"li"},"daily"),", ",(0,a.kt)("em",{parentName:"li"},"weekly"),", or ",(0,a.kt)("em",{parentName:"li"},"monthly"),")")),(0,a.kt)("p",null,"After the user clicks ",(0,a.kt)("strong",{parentName:"p"},"Confirm")," to send their transfer, redirect them to your consent URL."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot of a portion of the new standing order form",src:n(8851).Z,width:"2744",height:"1810"})))}f.isMDXComponent=!0},6865:function(e,t,n){t.Z=n.p+"assets/images/transfer-home-0ed9866bb2845df28de1fb2cbcbae9c3.png"},8851:function(e,t,n){t.Z=n.p+"assets/images/transfer-new-so-75c2dbdc057bf89dfeca5590faf064be.png"},5700:function(e,t,n){t.Z=n.p+"assets/images/transfer-new-4f0fe809b77d95193bdce76d6877ca1b.png"},4522:function(e,t,n){t.Z=n.p+"assets/images/transfer-type-b13fd6bd862f521c6b04ed364f321d87.png"}}]);