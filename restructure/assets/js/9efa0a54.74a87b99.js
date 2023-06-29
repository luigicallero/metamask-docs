"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[3457],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||s;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),s=n(86010),o=n(12466),i=n(70989),l=n(72389);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==i&&(d(t),l(a))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:m},o,{className:(0,s.Z)("tabs__item",c.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function p(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function d(e){const t=(0,i.Y)(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",c.tabList)},r.createElement(u,(0,a.Z)({},e,t)),r.createElement(p,(0,a.Z)({},e,t)))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},70989:(e,t,n)=>{n.d(t,{Y:()=>d});var a=n(67294),r=n(16550),s=n(91980),o=n(67392),i=n(50012);function l(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??l(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const o=(0,r.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(o.location.search);t.set(i,e),o.replace({...o.location,search:t.toString()})}),[i,o])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=c(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[d,m]=p({queryString:n,groupId:r}),[h,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,i.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),b=(()=>{const e=d??h;return u({value:e,tabValues:s})?e:null})();(0,a.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),m(e),k(e)}),[m,k,s]),tabValues:s}}},97026:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),s=n(65488),o=n(85162);const i={description:"Learn about MetaMask SDK.",sidebar_position:2},l="MetaMask SDK",c={unversionedId:"concepts/sdk",id:"concepts/sdk",title:"MetaMask SDK",description:"Learn about MetaMask SDK.",source:"@site/wallet/concepts/sdk.md",sourceDirName:"concepts",slug:"/concepts/sdk",permalink:"/restructure/wallet/concepts/sdk",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/sdk.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Learn about MetaMask SDK.",sidebar_position:2},sidebar:"walletSidebar",previous:{title:"Ethereum provider API",permalink:"/restructure/wallet/concepts/provider-api"},next:{title:"Convenience libraries",permalink:"/restructure/wallet/concepts/convenience-libraries"}},u={},p=[{value:"User experience",id:"user-experience",level:2},{value:"Communication layer",id:"communication-layer",level:2},{value:"Connection status",id:"connection-status",level:2},{value:"Paused connections",id:"paused-connections",level:3},{value:"Cleared connections",id:"cleared-connections",level:3},{value:"Close connections manually",id:"close-connections-manually",level:4}],d={toc:p},m="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"metamask-sdk"},"MetaMask SDK"),(0,r.kt)("p",null,"MetaMask SDK is a library that provides a reliable, secure, and seamless connection from your dapp\nto the MetaMask browser extension and MetaMask Mobile.\nYou can install the SDK on existing dapps, and call any ",(0,r.kt)("a",{parentName:"p",href:"/restructure/wallet/concepts/provider-api"},"provider API")," methods from\nyour dapp."),(0,r.kt)("p",null,"This page demonstrates the ",(0,r.kt)("a",{parentName:"p",href:"#user-experience"},"user experience")," of using a dapp with the SDK\ninstalled.\nIt also describes the secure ",(0,r.kt)("a",{parentName:"p",href:"#communication-layer"},"communication layer")," the SDK uses when\nconnecting to MetaMask Mobile, and the different ",(0,r.kt)("a",{parentName:"p",href:"#connection-status"},"connection statuses"),"."),(0,r.kt)("admonition",{title:"important",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"MetaMask SDK is the recommended method of integrating your dapp with the MetaMask wallet.\nYou can get started by ",(0,r.kt)("a",{parentName:"p",href:"/restructure/wallet/how-to/connect/set-up-sdk/"},"setting up the SDK"),".")),(0,r.kt)("h2",{id:"user-experience"},"User experience"),(0,r.kt)("p",null,"The following are examples of how a user experiences a dapp with the SDK installed, on various platforms."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{label:"Desktop",value:"tab1",mdxType:"TabItem"},(0,r.kt)("p",null,"When a user accesses your web dapp on a desktop browser that doesn't have the MetaMask extension\ninstalled, a popup appears that prompts the user to either install the MetaMask extension or connect\nto MetaMask Mobile using a QR code."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SDK desktop browser example",src:n(16939).Z,width:"1726",height:"1034"})),(0,r.kt)("p",null,"You can download the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/examples/tree/main/metamask-with/metamask-sdk-create-react-app"},"React project example"),".\nInstall the example using ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," and run it using ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start"),".")),(0,r.kt)(o.Z,{label:"Mobile",value:"tab2",mdxType:"TabItem"},(0,r.kt)("p",null,"When a user accesses your mobile dapp, or web dapp on a mobile browser, the SDK automatically\ndeeplinks to MetaMask Mobile (or if the user doesn't already have it, prompts them to install it).\nAfter the user accepts the connection, they're automatically redirected back to your dapp.\nThis happens for all actions that need user approval."),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SDK mobile browser example",src:n(39063).Z,width:"334",height:"696"}))),(0,r.kt)("p",null,"You can download the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/examples/tree/main/metamask-with/metamask-sdk-create-react-app"},"React project example"),".\nInstall the example using ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," and run it using ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn start"),"."),(0,r.kt)("p",null,"You can also download the\n",(0,r.kt)("a",{parentName:"p",href:"https://c0f4f41c-2f55-4863-921b-sdk-docs.github.io/downloads/reactNativeApp_v0.1.0.zip"},"React Native example"),".\nInstall the example using ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn setup")," and run it using ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn ios")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn android"),".")),(0,r.kt)(o.Z,{label:"Node.js",value:"tab3",mdxType:"TabItem"},(0,r.kt)("p",null,"When a user accesses your Node.js dapp, the SDK renders a QR code on the console which users can\nscan with their MetaMask Mobile app."),(0,r.kt)("p",{align:"center"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SDK Node.js example",src:n(50425).Z,width:"871",height:"947"}))),(0,r.kt)("p",null,"You can download the\n",(0,r.kt)("a",{parentName:"p",href:"https://c0f4f41c-2f55-4863-921b-sdk-docs.github.io/downloads/nodejs_v0.0.1_beta5.zip"},"Node.js example"),".\nInstall the example using ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," and run it using ",(0,r.kt)("inlineCode",{parentName:"p"},"node ."),".")),(0,r.kt)(o.Z,{label:"Unity",value:"tab4",mdxType:"TabItem"},(0,r.kt)("p",null,"When a user accesses your Unity game, the SDK renders a QR code in the game UI using a dedicated\nprefab which players can scan with their MetaMask Mobile app.\nIt also supports deeplinking on mobile platforms."))),(0,r.kt)("h2",{id:"communication-layer"},"Communication layer"),(0,r.kt)("p",null,"The SDK uses elliptic curve integrated encryption scheme (ECIES) to communicate with MetaMask Mobile.\nECIES is a hybrid encryption scheme that combines the benefits of both symmetric and asymmetric encryption.\nIt's a secure method of exchanging encrypted messages between two parties."),(0,r.kt)("p",null,"In ECIES, the sender (your dapp) generates a shared secret using the recipient's (MetaMask Mobile's)\npublic key and their own private key.\nThe shared secret is used to encrypt the message using a symmetric cipher (the SDK uses ",(0,r.kt)("inlineCode",{parentName:"p"},"AES-256-GCM"),").\nThe encrypted message is then combined with a message authentication code (MAC) and sent to the recipient."),(0,r.kt)("p",null,"MetaMask Mobile uses its private key and the dapp's public key to recreate the shared secret and\ndecrypt the message.\nThe MAC is used to verify the authenticity of the message."),(0,r.kt)("p",null,"One of the main benefits of ECIES is that it allows the sender and recipient to exchange messages\nwithout having to exchange a shared secret beforehand.\nIt also provides security against eavesdropping and tampering, since the shared secret is derived\nfrom the sender's and recipient's private keys, which are both kept secret."),(0,r.kt)("h2",{id:"connection-status"},"Connection status"),(0,r.kt)("h3",{id:"paused-connections"},"Paused connections"),(0,r.kt)("p",null,"Connections pause after MetaMask Mobile is in background (minimized) for 20 seconds.\nThis is to accommodate OS restrictions."),(0,r.kt)("p",null,"When a connection pauses, all traffic to MetaMask Mobile pauses, and the SDK doesn't produce any\nresponse until the user opens MetaMask Mobile again.\nThe SDK automatically deeplinks to MetaMask Mobile, so connections resume automatically.\nIf MetaMask Mobile is paused and the user completely closes MetaMask Mobile, the connection remains\npaused and resumes when the user opens it again."),(0,r.kt)("p",null,"Because of this, polling data from MetaMask Mobile may not work for long periods of time."),(0,r.kt)("admonition",{title:"known issue",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When MetaMask Mobile is running in the background, the connection may pause and fail to resume properly when the user reopens MetaMask.\nThe user must return to your dapp so the request is re-sent.\nThe SDK team is working on this issue, and is researching decentralized communication solutions that\nhold state such as ",(0,r.kt)("a",{parentName:"p",href:"https://waku.org/"},"Waku"),".")),(0,r.kt)("h3",{id:"cleared-connections"},"Cleared connections"),(0,r.kt)("p",null,"Connections clear if the user closes or refreshes your dapp, since MetaMask doesn't persist\nconnections on the dapp side.\nThis is for simplicity and security purposes."),(0,r.kt)("p",null,"If the user completely closes MetaMask Mobile without ",(0,r.kt)("a",{parentName:"p",href:"#paused-connections"},"pausing the connection"),"\nfirst, MetaMask infers that the user isn't using the wallet and closes the connection."),(0,r.kt)("h4",{id:"close-connections-manually"},"Close connections manually"),(0,r.kt)("p",null,"To close connections manually from MetaMask Mobile, go to ",(0,r.kt)("strong",{parentName:"p"},"Settings > Experimental"),", and select\n",(0,r.kt)("strong",{parentName:"p"},"Clear MetaMask SDK connections"),"."))}h.isMDXComponent=!0},16939:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sdk-desktop-browser-08daeb300da22c1fda2f50d7b63026a9.gif"},39063:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sdk-mobile-browser-3a2065bba036d5910206697edcd2a298.gif"},50425:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sdk-nodejs-53d5a8860c4b7d48902adc99a64a668f.gif"}}]);