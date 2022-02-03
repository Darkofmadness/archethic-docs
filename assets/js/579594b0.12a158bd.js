"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[420],{3905:function(e,t,i){i.d(t,{Zo:function(){return l},kt:function(){return y}});var n=i(67294);function c(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){c(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,c=function(e,t){if(null==e)return{};var i,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(c[i]=e[i]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(c[i]=e[i])}return c}var d=n.createContext({}),h=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},l=function(e){var t=h(e.components);return n.createElement(d.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,c=e.mdxType,r=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=h(i),y=c,k=u["".concat(d,".").concat(y)]||u[y]||o[y]||r;return i?n.createElement(k,a(a({ref:t},l),{},{components:i})):n.createElement(k,a({ref:t},l))}));function y(e,t){var i=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=i.length,a=new Array(r);a[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:c,a[1]=s;for(var h=2;h<r;h++)a[h]=i[h];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},82189:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return h},toc:function(){return l},default:function(){return u}});var n=i(87462),c=i(63366),r=(i(67294),i(3905)),a=["components"],s={id:"yubikey",title:"Yubikey implementation"},d=void 0,h={unversionedId:"build/core/yubikey",id:"build/core/yubikey",title:"Yubikey implementation",description:"This section explains the HRT Yubikey Library implementation.",source:"@site/docs/build/core/yubikey.md",sourceDirName:"build/core",slug:"/build/core/yubikey",permalink:"/archethic-docs/build/core/yubikey",tags:[],version:"current",lastUpdatedAt:1643897567,formattedLastUpdatedAt:"2/3/2022",frontMatter:{id:"yubikey",title:"Yubikey implementation"},sidebar:"docs",previous:{title:"TPM Implementation",permalink:"/archethic-docs/build/core/tpm"},next:{title:"ARCHEthic Wallet Specification",permalink:"/archethic-docs/build/clients/wallet-spec"}},l=[{value:"initializeYK() :",id:"initializeyk-",children:[],level:2},{value:"bool checkYK():",id:"bool-checkyk",children:[],level:2},{value:"verifyPinYK():",id:"verifypinyk",children:[],level:2},{value:"authenticateYK():",id:"authenticateyk",children:[],level:2},{value:"fetchKey(keyIndex):",id:"fetchkeykeyindex",children:[],level:2},{value:"generateKey(ykIndex):",id:"generatekeyykindex",children:[],level:2},{value:"generateCertificate(ykIndex):",id:"generatecertificateykindex",children:[],level:2},{value:"getYKIndex():",id:"getykindex",children:[],level:2},{value:"saveIndex(ykIndex, archethicIndex):",id:"saveindexykindex-archethicindex",children:[],level:2},{value:"signECDSA(hashtoSign, ykIndex):",id:"signecdsahashtosign-ykindex",children:[],level:2},{value:"getECDHPoint(ykIndex, euphermerakley) :",id:"getecdhpointykindex-euphermerakley-",children:[],level:2},{value:"getArchEthicIndex():",id:"getarchethicindex",children:[],level:2},{value:"incrementIndex():",id:"incrementindex",children:[],level:2},{value:"getRootKey():",id:"getrootkey",children:[],level:2},{value:"getCurrentKey(publicKeySize):",id:"getcurrentkeypublickeysize",children:[],level:2},{value:"getNextKey( publicKeySize):",id:"getnextkey-publickeysize",children:[],level:2},{value:"getPastKey(archEthicIndex, publicKeySize):",id:"getpastkeyarchethicindex-publickeysize",children:[],level:2},{value:"getRootCertificate( certificateSize):",id:"getrootcertificate-certificatesize",children:[],level:2},{value:"getCurrentCertificate(certificateSize):",id:"getcurrentcertificatecertificatesize",children:[],level:2},{value:"getNextCertificate(certificateSize):",id:"getnextcertificatecertificatesize",children:[],level:2},{value:"getPastCertificate(archEthicIndex, certificateSize):",id:"getpastcertificatearchethicindex-certificatesize",children:[],level:2},{value:"signCurrentKey(hashToSign, eccSignSize):",id:"signcurrentkeyhashtosign-eccsignsize",children:[],level:2},{value:"signPastKey(archEthicIndex, hashToSign, eccSignSize):",id:"signpastkeyarchethicindex-hashtosign-eccsignsize",children:[],level:2},{value:"ecdhCurrentKey(euphemeralKey, eccPointSize):",id:"ecdhcurrentkeyeuphemeralkey-eccpointsize",children:[],level:2},{value:"ecdhPastKey( archEthicIndex, euphemeralKey, eccPointSize):",id:"ecdhpastkey-archethicindex-euphemeralkey-eccpointsize",children:[],level:2}],o={toc:l};function u(e){var t=e.components,i=(0,c.Z)(e,a);return(0,r.kt)("wrapper",(0,n.Z)({},o,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section explains the HRT Yubikey Library implementation."),(0,r.kt)("div",{className:"admonition admonition-success alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"success")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Reference Files:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/UNIRIS/yubikey-core/blob/main/uniris-yubikey.c"},"uniris-yubikey.c"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/UNIRIS/yubikey-core/blob/main/uniris-yubikey.h"},"uniris-yubikey.h")))),(0,r.kt)("h2",{id:"initializeyk-"},"initializeYK() :"),(0,r.kt)("p",null,"Initializes the context of the yubikey application in the variable g_state and connects to the hardware device. If successful, then gets the key index of archethic as well as key index of the yubikey device."),(0,r.kt)("h2",{id:"bool-checkyk"},"bool checkYK():"),(0,r.kt)("p",null,'displays the model of yubikey device used returns true if the device list contains "Yubico Yubikey".'),(0,r.kt)("h2",{id:"verifypinyk"},"verifyPinYK():"),(0,r.kt)("p",null,"verifies the pin code using ykpiv_verify() required to access PIV interface."),(0,r.kt)("h2",{id:"authenticateyk"},"authenticateYK():"),(0,r.kt)("p",null,"Management key is required to do administrative actions. First it does hex decoding of the management key and authenticates if ykpiv_authenticate() returns 0."),(0,r.kt)("h2",{id:"fetchkeykeyindex"},"fetchKey(keyIndex):"),(0,r.kt)("p",null,"A PIV card contains some interoperable seven mandatory and  twenty optional data objects. These objects are identified with their respective ids. We use these twenty optional data objects to store the  key certificates. fetchKey index takes the yubikey key index ykindex as input and fetches the certificate at the key_certificates","[ykindex]",". This X509 certificate is decoded and public key is extracted from it using X509_get0_pubkey_bitstr and copied to ecc_public_key."),(0,r.kt)("h2",{id:"generatekeyykindex"},"generateKey(ykIndex):"),(0,r.kt)("p",null,"It takes the ykIndex and generates an ECC key using ykpiv_util_generate_key(). It generates key at one of the slots {0x82.. 0x95}  pointed by ykindex - key_slots","[ykIndex]"),(0,r.kt)("h2",{id:"generatecertificateykindex"},"generateCertificate(ykIndex):"),(0,r.kt)("p",null,"The keys in the slot are attested through  ykpiv_attest() by taking the slot on the index as input. It returns attested key and its length which is then saved into an object pointed by ykIndex using ykpiv_save_object()."),(0,r.kt)("h2",{id:"getykindex"},"getYKIndex():"),(0,r.kt)("p",null,"The YKPIV_OBJ_KEY_HISTORY keeps the count of the keys generated in the yubikey. This fucntion fetches the YKPIV_OBJ_KEY_HISTORY using ykpiv_fetch_object() to get the index_yk and returns it."),(0,r.kt)("h2",{id:"saveindexykindex-archethicindex"},"saveIndex(ykIndex, archethicIndex):"),(0,r.kt)("p",null,"It takes  ykindex and archethicIndex as input and generates index by combining ykindex and archethic index and keeps it in YKPIV_OBJ_HISTORY."),(0,r.kt)("h2",{id:"signecdsahashtosign-ykindex"},"signECDSA(hashtoSign, ykIndex):"),(0,r.kt)("p",null,"It uses ykpiv_sign_data() to sign hashToSign using YKPIV_ALGO_ECCP256 through the key pointed by ykindex - key_slots","[ykindex]","."),(0,r.kt)("h2",{id:"getecdhpointykindex-euphermerakley-"},"getECDHPoint(ykIndex, euphermerakley) :"),(0,r.kt)("p",null,"It generated an ecdh point using ykpiv_decipher_data() for the slot pointed by ykindex key_slots","[ykIndex]","."),(0,r.kt)("h2",{id:"getarchethicindex"},"getArchEthicIndex():"),(0,r.kt)("p",null,"Fetches the YKPIV_OBJ_KEY_HISTORY and derives the archethicindex from index_yk saved in key history object."),(0,r.kt)("h2",{id:"incrementindex"},"incrementIndex():"),(0,r.kt)("p",null,"We use the 20 data objects to store 20 keys certificates at once. The 21st key generated on the yubikey is stored in newYKIndex = ykindex % 20. The archethic index is incremented and a new key is generated using newYKindex .A certificate is generated and saved in the slot pointed by newYKindex. Finally it returns true if the current YK index is equal to newYKindex and current archethicindex is equal to newarchethic index ."),(0,r.kt)("h2",{id:"getrootkey"},"getRootKey():"),(0,r.kt)("p",null,"Reads the root key certificate from f9 slot and fetches public key from the certificate. Finally it copies the key into rsa_root_key and returns it."),(0,r.kt)("h2",{id:"getcurrentkeypublickeysize"},"getCurrentKey(publicKeySize):"),(0,r.kt)("p",null,"Generates the previous key index by and fetches the key behind previous key index and returns the ecc key."),(0,r.kt)("h2",{id:"getnextkey-publickeysize"},"getNextKey( publicKeySize):"),(0,r.kt)("p",null,"It fetches the key from the ykIndex and returns the ecc_public_key behind the index."),(0,r.kt)("h2",{id:"getpastkeyarchethicindex-publickeysize"},"getPastKey(archEthicIndex, publicKeySize):"),(0,r.kt)("p",null,"It fetches the keys stored previously in the slot. It first calculates the slot position and then fetches the key at the slot position and return it."),(0,r.kt)("h2",{id:"getrootcertificate-certificatesize"},"getRootCertificate( certificateSize):"),(0,r.kt)("p",null,"Reads the certificate of the rootkey from 0xf9 slot, copies it ykcertificate and returns it."),(0,r.kt)("h2",{id:"getcurrentcertificatecertificatesize"},"getCurrentCertificate(certificateSize):"),(0,r.kt)("p",null,"Calculates the curent key index and fetches the certificate from the object pointed by the current key index."),(0,r.kt)("h2",{id:"getnextcertificatecertificatesize"},"getNextCertificate(certificateSize):"),(0,r.kt)("p",null,"fetches the certificate of the  key pointed by ykindex and returns it."),(0,r.kt)("h2",{id:"getpastcertificatearchethicindex-certificatesize"},"getPastCertificate(archEthicIndex, certificateSize):"),(0,r.kt)("p",null,"calculates the slot posistion according to the offset using archethicindex tehn fetches the object at the slot position which is a certificate amd returns it."),(0,r.kt)("h2",{id:"signcurrentkeyhashtosign-eccsignsize"},"signCurrentKey(hashToSign, eccSignSize):"),(0,r.kt)("p",null,"Calculates the current key index then verifies the Yubikey pin using verifyPinYK() and then signs hashToSign using signECDSA(). The signECDSA() signs the key at the currentkeyindex."),(0,r.kt)("h2",{id:"signpastkeyarchethicindex-hashtosign-eccsignsize"},"signPastKey(archEthicIndex, hashToSign, eccSignSize):"),(0,r.kt)("p",null,"Calculates the slot position by first calculating the offset by using archethicindex. Then it verifies the yubikey pin and signs the key pointed at the slotPosition."),(0,r.kt)("h2",{id:"ecdhcurrentkeyeuphemeralkey-eccpointsize"},"ecdhCurrentKey(euphemeralKey, eccPointSize):"),(0,r.kt)("p",null,"Calculates the current key index, verifies the yubikey pin to get the ECDH point through getECDHPoint() fucntion and finally returns it."),(0,r.kt)("h2",{id:"ecdhpastkey-archethicindex-euphemeralkey-eccpointsize"},"ecdhPastKey( archEthicIndex, euphemeralKey, eccPointSize):"),(0,r.kt)("p",null,"Calculates the offset and slotPosition using archEthicIndex., verifies Yubikey PIN and gets the ECDH point for the key pointed by slotPosiotion and returns it."))}u.isMDXComponent=!0}}]);