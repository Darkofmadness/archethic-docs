(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[732],{27376:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return m},default:function(){return u}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),s=a(93456),o=["components"],c={id:"scheduler",title:"OracleChain Scheduler"},l=void 0,d={unversionedId:"build/core/oracle-chain/scheduler",id:"build/core/oracle-chain/scheduler",title:"OracleChain Scheduler",description:"The OracleChain module contains a process in charge of scheduling the data fetching and transaction submitting.",source:"@site/docs/build/core/oracle-chain/scheduler.md",sourceDirName:"build/core/oracle-chain",slug:"/build/core/oracle-chain/scheduler",permalink:"/archethic-docs/build/core/oracle-chain/scheduler",tags:[],version:"current",lastUpdatedAt:1647960342,formattedLastUpdatedAt:"3/22/2022",frontMatter:{id:"scheduler",title:"OracleChain Scheduler"},sidebar:"docs",previous:{title:"OracleChain",permalink:"/archethic-docs/build/core/oracle-chain"},next:{title:"ARCHEthic Wallet Specification",permalink:"/archethic-docs/build/clients/wallet-spec"}},m=[],h={toc:m};function u(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The OracleChain module contains a process in charge of scheduling the data fetching and transaction submitting."),(0,r.kt)("p",null,"It's modeled as finite state machine."),(0,r.kt)("p",null,"Three main state are represented:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IDLE"),": When the process is waiting a new tick to be triggered based on some interval"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Polling"),": When the process must fetch data from external sources"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Summary"),": When the process must aggregate the entire polling transactions for a given interval")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Mainnet and Testnet can have different values based on environment variables."),(0,r.kt)("p",{parentName:"div"},"This is due to simulate quicker events and summary."),(0,r.kt)("p",{parentName:"div"},"For example, "),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"on Mainnet: each polling is triggered each minute and the summary each day at 00:00 UTC."),(0,r.kt)("li",{parentName:"ul"},"on Testnet: each polling is triggered each 10s and the summary each minute.")))),(0,r.kt)("p",null,"For each actionable state, the process determines if the current running node is in charge to fetch or emit the transaction, based on the election algorithm."),(0,r.kt)("p",null,"Also to avoid any useless transactions, the process identifies if a new transaction must be emitted regarding the freshness of the information retrieved from the Oracle services."),(0,r.kt)("p",null,"You can find below a schema representing this finite state machine and its related events."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"OracleChain Scheduler FSM")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)(s.Mermaid,{chart:'stateDiagram-v2\n    [*] --\x3e Idle\n    Idle --\x3e Idle: "tick\n\n    state "Is summary time ?" as Is_Summary_Time\n\n    state if_state <<choice>>\n    Idle --\x3e Is_Summary_Time\n    Is_Summary_Time --\x3e if_state\n    if_state --\x3e Summary: "Yes"\n    if_state --\x3e Polling: "No"\n    \n\n    state Polling {\n        state if_state_polling <<choice>>\n        state "Is polling trigger node ?" as IsPollingTriggerNode\n        state "Fetching data" as FetchData\n        state if_state_polling_new_data <<choice>>\n        state "Is new data ?" as IsNewData\n        state "Send oracle transaction" as SendOracleTransaction\n\n        [*] --\x3e IsPollingTriggerNode\n        IsPollingTriggerNode --\x3e if_state_polling\n        if_state_polling --\x3e [*]: "No"\n        if_state_polling --\x3e FetchData: "Yes"\n        FetchData --\x3e IsNewData\n\n        IsNewData --\x3e if_state_polling_new_data\n        if_state_polling_new_data --\x3e [*]: "No"\n        if_state_polling_new_data --\x3e SendOracleTransaction: "Yes"\n        SendOracleTransaction --\x3e [*]\n    }\n\n    Polling --\x3e Idle\n    \n\n    state Summary {\n        state if_state_summary <<choice>>\n        state "Is summary trigger node ?" as IsSummaryTriggerNode\n        state "Send summary transaction" as SendSummaryTransaction\n\n        [*] --\x3e IsSummaryTriggerNode\n        IsSummaryTriggerNode --\x3e if_state_summary\n        if_state_summary --\x3e [*]: "No"\n        if_state_summary --\x3e SendSummaryTransaction: "Yes"\n        SendSummaryTransaction --\x3e [*]\n    }\n\n    Summary --\x3e Idle',mdxType:"Mermaid"}))))}u.isMDXComponent=!0},11748:function(e,t,a){var n={"./locale":89234,"./locale.js":89234};function i(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id=11748}}]);