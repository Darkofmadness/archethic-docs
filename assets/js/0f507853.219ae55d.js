"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[342],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84369:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"node",title:"Node"},s=void 0,c={unversionedId:"learn/p2p/node",id:"learn/p2p/node",title:"Node",description:"ARCHEthic is using a structured and open P2P network based on some properties:",source:"@site/docs/learn/p2p/node.md",sourceDirName:"learn/p2p",slug:"/learn/p2p/node",permalink:"/archethic-docs/learn/p2p/node",tags:[],version:"current",lastUpdatedAt:1643897567,formattedLastUpdatedAt:"2/3/2022",frontMatter:{id:"node",title:"Node"},sidebar:"docs",previous:{title:"P2P",permalink:"/archethic-docs/learn/p2p"},next:{title:"Bootstrapping",permalink:"/archethic-docs/learn/p2p/bootstrapping"}},d=[{value:"Structure and Authentication",id:"structure-and-authentication",children:[],level:2},{value:"Permissionless:",id:"permissionless",children:[],level:2},{value:"Remuneration",id:"remuneration",children:[],level:2}],u={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ARCHEthic is using a structured and open P2P network based on some properties:"),(0,i.kt)("h2",{id:"structure-and-authentication"},"Structure and Authentication"),(0,i.kt)("p",null,"Each node know the entire list of nodes allowed to participate in the network through the use of Node transaction chains.\nTherefore, each connection is encrypted and authenticated by the last node public key"),(0,i.kt)("p",null,"A node include a list P2P information such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"IP"),(0,i.kt)("li",{parentName:"ul"},"Port"),(0,i.kt)("li",{parentName:"ul"},"P2P Protocol (i.e TCP)"),(0,i.kt)("li",{parentName:"ul"},"First public key"),(0,i.kt)("li",{parentName:"ul"},"Last public key"),(0,i.kt)("li",{parentName:"ul"},"GeoPatch (for geographical distribution based on the GeoIP of the IP)"),(0,i.kt)("li",{parentName:"ul"},"NetworkPatch (for P2P responsiveness based on the latency to reach it)"),(0,i.kt)("li",{parentName:"ul"},"Reward address (the address where the mining rewards should be sent)"),(0,i.kt)("li",{parentName:"ul"},"Global availability (from BeaconChain qualification)"),(0,i.kt)("li",{parentName:"ul"},"Local availability (from Supervised Multicast)"),(0,i.kt)("li",{parentName:"ul"},"Average availability (from BeaconChain qualification)"),(0,i.kt)("li",{parentName:"ul"},"Authorized"),(0,i.kt)("li",{parentName:"ul"},"Authorization Date")),(0,i.kt)("h2",{id:"permissionless"},"Permissionless:"),(0,i.kt)("p",null,"Any node can participate into the network as long as they have some hardware requirements such secure element to enclave the private keys\navoiding any disclosure of keys.\nCurrently, we are supporting: TPM 2.0\nBut others providers will be available with the time"),(0,i.kt)("p",null,"However, the network decides by itself, if it needs for validation nodes."),(0,i.kt)("h2",{id:"remuneration"},"Remuneration"),(0,i.kt)("p",null,"Each is node is remunerated according to its contribution to the network:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"for validation"),(0,i.kt)("li",{parentName:"ul"},"for information provision during the validation")),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A node is not remunerated to replicate a transaction, but it will be when it makes the transactions available to the network for the next transaction processing"))),(0,i.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"success")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"However, if a validation node didn't receive enough a mining rewards during the month, the Network Pool (from the UCO distribution) will send compensation."))),(0,i.kt)("p",null,"For example: if a node receive $30 equivalent UCO, and if the rules say the minimum should be $50, then the network pool will send $20 to this node. If this node receives $100 of mining rewards, the network pool will node send any UCO to this node."))}p.isMDXComponent=!0}}]);