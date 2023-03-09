"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2844],{3905:(t,e,i)=>{i.d(e,{Zo:()=>p,kt:()=>m});var o=i(7294);function a(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){a(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function r(t,e){if(null==t)return{};var i,o,a=function(t,e){if(null==t)return{};var i,o,a={},n=Object.keys(t);for(o=0;o<n.length;o++)i=n[o],e.indexOf(i)>=0||(a[i]=t[i]);return a}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)i=n[o],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}var s=o.createContext({}),c=function(t){var e=o.useContext(s),i=e;return t&&(i="function"==typeof t?t(e):l(l({},e),t)),i},p=function(t){var e=c(t.components);return o.createElement(s.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(t,e){var i=t.components,a=t.mdxType,n=t.originalType,s=t.parentName,p=r(t,["components","mdxType","originalType","parentName"]),d=c(i),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||n;return i?o.createElement(m,l(l({ref:e},p),{},{components:i})):o.createElement(m,l({ref:e},p))}));function m(t,e){var i=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var n=i.length,l=new Array(n);l[0]=h;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r[d]="string"==typeof t?t:a,l[1]=r;for(var c=2;c<n;c++)l[c]=i[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,i)}h.displayName="MDXCreateElement"},8672:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>r,toc:()=>c});var o=i(7462),a=(i(7294),i(3905));const n={slug:"sovereign-rollups-on-bitcoin",title:"Sovereign rollups on Bitcoin with Rollkit",authors:["rollkit"],tags:["Rollkit","Bitcoin"],description:"Last week, we introduced Rollkit, a modular framework for rollups. Today, we are proud to announce that Rollkit is the first rollup framework to support sovereign rollups on Bitcoin. This allows Rollkit rollups to use Bitcoin for data availability. The implementation is in alpha, but we invite curious developers to experiment with it."},l=void 0,r={permalink:"/pr-preview/pr-140/blog/sovereign-rollups-on-bitcoin",editUrl:"https://github.com/rollkit/docs/tree/main/blog/2023-03-5-sovereign-rollups-on-bitcoin-with-rollkit.mdx",source:"@site/blog/2023-03-5-sovereign-rollups-on-bitcoin-with-rollkit.mdx",title:"Sovereign rollups on Bitcoin with Rollkit",description:"Last week, we introduced Rollkit, a modular framework for rollups. Today, we are proud to announce that Rollkit is the first rollup framework to support sovereign rollups on Bitcoin. This allows Rollkit rollups to use Bitcoin for data availability. The implementation is in alpha, but we invite curious developers to experiment with it.",date:"2023-03-05T00:00:00.000Z",formattedDate:"March 5, 2023",tags:[{label:"Rollkit",permalink:"/pr-preview/pr-140/blog/tags/rollkit"},{label:"Bitcoin",permalink:"/pr-preview/pr-140/blog/tags/bitcoin"}],readingTime:4.32,hasTruncateMarker:!1,authors:[{name:"Rollkit",url:"https://github.com/rollkit",imageURL:"https://github.com/rollkit.png",key:"rollkit"}],frontMatter:{slug:"sovereign-rollups-on-bitcoin",title:"Sovereign rollups on Bitcoin with Rollkit",authors:["rollkit"],tags:["Rollkit","Bitcoin"],description:"Last week, we introduced Rollkit, a modular framework for rollups. Today, we are proud to announce that Rollkit is the first rollup framework to support sovereign rollups on Bitcoin. This allows Rollkit rollups to use Bitcoin for data availability. The implementation is in alpha, but we invite curious developers to experiment with it."},prevItem:{title:"Let's Roll - Rollkit's community call",permalink:"/pr-preview/pr-140/blog/lets-roll-community-call"},nextItem:{title:"Introducing Rollkit: a modular rollup framework",permalink:"/pr-preview/pr-140/blog/introducing-rollkit"}},s={authorsImageUrls:[void 0]},c=[{value:"Tl;dr",id:"tldr",level:2},{value:"Posting data on Bitcoin with Taproot",id:"posting-data-on-bitcoin-with-taproot",level:2},{value:"Integrating Bitcoin as a data availability layer into Rollkit",id:"integrating-bitcoin-as-a-data-availability-layer-into-rollkit",level:2},{value:"How Rollkit posts data to Bitcoin",id:"how-rollkit-posts-data-to-bitcoin",level:2},{value:"EVM on Bitcoin demo",id:"evm-on-bitcoin-demo",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rollkit-bitcoin",src:i(2223).Z,width:"3000",height:"1500"})),(0,a.kt)("p",null,"Last week, we introduced Rollkit, a modular framework for rollups. Today, we are proud to announce that Rollkit is the first rollup framework to support sovereign rollups on Bitcoin. An early research implementation allows Rollkit rollups to use Bitcoin for data availability."),(0,a.kt)("p",null,"Rollkit is opening the door for developers to create rollups with arbitrary execution environments that inherit Bitcoin\u2019s data availability guarantees and re-org resistance. With the new integration it is now possible to run the ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorials/bitcoin"},"EVM on Bitcoin as a Rollkit sovereign rollup"),". Sovereign rollups on Bitcoin not only expand the possibilities for rollups, but also have the potential to help bootstrap a healthy blockspace fee market on Bitcoin, enabling a more sustainable security budget."),(0,a.kt)("h2",{id:"tldr"},"Tl;dr"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sovereign rollups using Bitcoin for data availability are now a reality with Rollkit\u2019s new early research integration."),(0,a.kt)("li",{parentName:"ul"},"Follow along with a ",(0,a.kt)("a",{parentName:"li",href:"#evm-on-bitcoin-demo"},"demo")," of the EVM running on Bitcoin as a sovereign Rollkit rollup."),(0,a.kt)("li",{parentName:"ul"},"The implementation was possible due to Bitcoin's Taproot upgrade and Ordinals' usage of Bitcoin for publishing arbitrary data.")),(0,a.kt)("h2",{id:"posting-data-on-bitcoin-with-taproot"},"Posting data on Bitcoin with Taproot"),(0,a.kt)("p",null,"On Feb. 1, 2023, the Luxor mining pool mined the largest Bitcoin block (#774628) ever, approximately 4 MB. Most of the blockspace was used to inscribe a Taproot Wizards NFT with ",(0,a.kt)("a",{parentName:"p",href:"https://ordinals.com/"},"Ordinals"),", a project that implements NFTs on Bitcoin by publishing the image data on-chain."),(0,a.kt)("p",null,"Bitcoin NFTs use Taproot witnesses to inscribe arbitrary data, enabled by Bitcoin's Taproot upgrade. Taproot witnesses provide a slightly better payload-to-data ratio than SegWit transactions. A standard transaction can include up to around 390kB of arbitrary data while still passing through the public mempool. A non-standard transaction, included by a miner directly without passing through the mempool, can include close to 4MB of arbitrary data. In short, with SegWit, it became viable to post big blobs of data to the Bitcoin blockchain."),(0,a.kt)("p",null,"Since then, the usage of Ordinals for NFT inscriptions and Taproot utilization has ",(0,a.kt)("a",{parentName:"p",href:"https://dune.com/dataalways/ordinals"},"kicked off"),". Eric Wall found that at the time of ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/ercwl/status/1619671451417862145"},"his tweet"),", posting data on Bitcoin was 7x cheaper than Ethereum. Now that there are thousands of inscriptions on Bitcoin, it has become clear that sovereign rollups and an ecosystem of dapps on Bitcoin could become a reality. The missing piece: a rollup framework for easily integrating Bitcoin as a data availability layer."),(0,a.kt)("h2",{id:"integrating-bitcoin-as-a-data-availability-layer-into-rollkit"},"Integrating Bitcoin as a data availability layer into Rollkit"),(0,a.kt)("p",null,"Rollkit is a modular framework for rollups, where developers can plug-in custom execution layers and data availability layers. Initially, Rollkit only supported Celestia as an option for data availability and consensus. Now, Bitcoin is an option, thanks to an early research implementation of a Bitcoin data availability module for Rollkit. In this case, sovereign rollups manage their own execution and settlement while offloading consensus and data availability to Bitcoin."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rollkit-bitcoin-rollup",src:i(2626).Z,width:"3000",height:"2708"})),(0,a.kt)("h2",{id:"how-rollkit-posts-data-to-bitcoin"},"How Rollkit posts data to Bitcoin"),(0,a.kt)("p",null,"To write and read data on Bitcoin, we make use of Taproot transactions. To facilitate this, we implemented ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rollkit/bitcoin-da"},"a Go package called ",(0,a.kt)("inlineCode",{parentName:"a"},"bitcoin-da"))," that provides a reader/writer interface to Bitcoin. For details of how the interface works and how it uses Taproot, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rollkit/rollkit-btc/blob/main/spec.md"},"the specs"),". The package can be re-used by any project that wants to read or write data on Bitcoin."),(0,a.kt)("p",null,"Rollkit was built with modularity at its core. It has a data availability interface so that developers can simply implement specific methods to add a new data availability layer. To add a data availability layer, implementers need to satisfy the ",(0,a.kt)("inlineCode",{parentName:"p"},"DataAvailabilityLayerClient")," interface which defines the behavior of the data availability client, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"BlockRetriever")," interface which defines how blocks can be synced. These interfaces live in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rollkit/rollkit/tree/main/da"},"da package"),". The most important methods in these interfaces are ",(0,a.kt)("inlineCode",{parentName:"p"},"SubmitBlock")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"RetrieveBlock")," for reading and writing the blocks."),(0,a.kt)("p",null,"After implementing the Taproot reader/writer interface for Bitcoin (",(0,a.kt)("inlineCode",{parentName:"p"},"bitcoin-da"),"), adding it as a data availability module for Rollkit took less than a day. We mostly only had to implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"SubmitBlock")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"RetrieveBlocks")," functions for Rollkit to call the ",(0,a.kt)("inlineCode",{parentName:"p"},"Read")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Write")," methods in ",(0,a.kt)("inlineCode",{parentName:"p"},"bitcoin-da"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rollkit-bitcoin-rollup-2",src:i(2622).Z,width:"3000",height:"1415"})),(0,a.kt)("h2",{id:"evm-on-bitcoin-demo"},"EVM on Bitcoin demo"),(0,a.kt)("p",null,"Rollkit supports custom execution layers, including EVM, CosmWasm, or the Cosmos SDK. To test the integration, we used Rollkit to run the EVM (using Ethermint) as a sovereign rollup on a local Bitcoin test network. See below for a demo."),(0,a.kt)("div",{class:"youtube-wrapper"},(0,a.kt)("iframe",{class:"youtube-video",title:"Rollkit: Ethermint + Bitcoin DA demo",src:"https://www.youtube.com/embed/qBKFEctzgT0",allowfullscreen:!0})),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"As we move towards a future where sovereign communities will form around different applications, asking them to incur the high cost and overhead of deploying a layer 1 blockchain to be sovereign is not sustainable. ",(0,a.kt)("a",{parentName:"p",href:"https://blog.celestia.org/sovereign-rollup-chains/"},"Sovereign rollups")," fix this by making it possible to deploy a sovereign chain that inherits the data availability and consensus of another layer 1 chain such as Bitcoin."),(0,a.kt)("p",null,"Our goal with Rollkit is to make it easy to build and customize rollups. We invite you to play around Rollkit and build sovereign rollups on Bitcoin, or customize Rollkit with different execution environments and data availability layers. For details on how to run Rollkit with the Bitcoin data availability module, see the instructions ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorials/bitcoin"},"here"),". Keep in mind that the integration is an early research implementation and it is not yet production-ready!"),(0,a.kt)("p",null,"Modularism, not maximalism."))}d.isMDXComponent=!0},2626:(t,e,i)=>{i.d(e,{Z:()=>o});const o=i.p+"assets/images/rollkit-bitcoin-1-4fdcb47746b24626aed8f6689035a4b7.png"},2622:(t,e,i)=>{i.d(e,{Z:()=>o});const o=i.p+"assets/images/rollkit-bitcoin-2-e97ee76fdc66279cd58e7e27177fcdb0.png"},2223:(t,e,i)=>{i.d(e,{Z:()=>o});const o=i.p+"assets/images/rollkit-bitcoin-7bcecada0c85b79bf2b58ed20980d43c.png"}}]);