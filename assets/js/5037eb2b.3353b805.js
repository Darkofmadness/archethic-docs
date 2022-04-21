(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[246],{19461:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var n=i(87462),o=i(63366),r=(i(67294),i(3905)),a=i(93456),l=["components"],c={id:"election",title:"Election"},s=void 0,u={unversionedId:"build/core/election",id:"build/core/election",title:"Election",description:"Archethic provides rotating algorithm to elect validation and storage nodes.",source:"@site/docs/build/core/election.md",sourceDirName:"build/core",slug:"/build/core/election",permalink:"/archethic-docs/build/core/election",tags:[],version:"current",lastUpdatedAt:1650530900,formattedLastUpdatedAt:"4/21/2022",frontMatter:{id:"election",title:"Election"},sidebar:"docs",previous:{title:"Bootstrap",permalink:"/archethic-docs/build/core/bootstrap"},next:{title:"ARCHEthic Wallet Specification",permalink:"/archethic-docs/build/clients/wallet-spec"}},d=[{value:"Heuristic constraints",id:"heuristic-constraints",children:[],level:2},{value:"Low-Level integrations",id:"low-level-integrations",children:[{value:"Hypergeomtric distribution",id:"hypergeomtric-distribution",children:[],level:3}],level:2}],p={toc:d};function m(e){var t=e.components,i=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Archethic provides rotating algorithm to elect validation and storage nodes. "),(0,r.kt)("p",null,"Validation and Storage Election algorithm provides also list of heuristic constraints to fine grained elections. "),(0,r.kt)("h2",{id:"heuristic-constraints"},"Heuristic constraints"),(0,r.kt)("p",null,"An ETS table is used to store the last constraints values for a faster lookup."),(0,r.kt)("p",null,"Storage constraints are defined by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"minimum storage geographical patches"),(0,r.kt)("li",{parentName:"ul"},"minimum storage average by geographical patch"),(0,r.kt)("li",{parentName:"ul"},"number of replicast")),(0,r.kt)("p",null,"Validation constraints are defined by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"minimum validation geographical patch distribution"),(0,r.kt)("li",{parentName:"ul"},"minimum validation nodes"),(0,r.kt)("li",{parentName:"ul"},"validation number based on a given transaction")),(0,r.kt)("h2",{id:"low-level-integrations"},"Low-Level integrations"),(0,r.kt)("p",null,"Sometimes for performance issue, we are leveraging low-level programming in C, to perform fast computation."),(0,r.kt)("h3",{id:"hypergeomtric-distribution"},"Hypergeomtric distribution"),(0,r.kt)("p",null,"For example, the Hypergeometric Distribution simulation is computed in C and wrapped in an Erlang port communication.\nBut for better simulation lookup, a cache is provided as process to hold the last value for a given number of nodes.\nIf the number of nodes changes, the hypergeometric distribution will be trigger."),(0,r.kt)("p",null,"The C program is using ",(0,r.kt)("inlineCode",{parentName:"p"},"GMP")," for big float arithemetic operations and ",(0,r.kt)("inlineCode",{parentName:"p"},"OMP")," for parallel computations to make it efficient."),(0,r.kt)(a.Mermaid,{config:{},chart:"sequenceDiagram\n    Election->>+Process: Run simulation for N nodes\n    alt with cache value\n        Process--\x3e>Election: Retrieve cached value\n    else without cache value\n        Process->>C: Run simultation\n    end\n",mdxType:"Mermaid"}))}m.isMDXComponent=!0},11748:function(e,t,i){var n={"./locale":89234,"./locale.js":89234};function o(e){var t=r(e);return i(t)}function r(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=11748}}]);