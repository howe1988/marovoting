(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{1155:function(t,e){},1165:function(t,e){},1171:function(t,e){},1173:function(t,e){},2:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(760);function r(t){return null!=t&&null!=t||(t=0),new o(t)}},388:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));n(80),n(59),n(45),n(43),n(60);var o=n(4),r=(n(61),n(3));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function d(t){return h.apply(this,arguments)}function h(){return(h=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,o,r,c,d,h,f=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=f.length>1&&void 0!==f[1]?f[1]:{},o=n.timeout,r=void 0===o?1e4:o,c=new AbortController,d=setTimeout((function(){return c.abort()}),r),t.next=6,fetch(e,l({},n,{signal:c.signal}));case 6:return h=t.sent,clearTimeout(d),t.abrupt("return",h);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},421:function(t,e){},654:function(t,e,n){"use strict";n(80),n(59),n(45),n(43),n(60),n(61);var o=n(3),r=n(4),c=n(30);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={props:{open:{type:Boolean,default:!1},showBack:{type:Boolean,default:!1},title:{type:String,default:null},width:{type:String,default:"400px"}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)("metamask",["ethAccount","netId"]),{},Object(c.b)("metamask",["currency"]),{},Object(c.b)("common",["translationWord"]),{erc20Title:function(){return""}}),created:function(){this.$nextTick(Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)}))))},mounted:function(){var t=this;this.$bus.$on("closeModal",(function(e){t.closeModal()}));var e=document.getElementById("modalBox");null!=e&&(e.style.width=this.width);var n=document.getElementById("modalBoxContent");null!=n&&(n.style.maxWidth=this.width);var o=document.getElementsByClassName("modal-content");null!=o&&o.length&&(o[0].style.maxWidth=this.width)},data:function(){return{}},watch:{},methods:{closeModal:function(){window.maroVoteModal&&window.maroVoteModal.close()},back:function(){$nuxt.$bus.$emit("back")}}},h=n(48),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"modal-container",attrs:{id:"modalBox"}},[n("div",{staticClass:"modal-header"},[t.showBack?n("p",{staticClass:"header-close-btn has-text-success",on:{click:t.back}},[n("b-icon",{attrs:{icon:"arrow-left"}})],1):t._e(),t._v(" "),n("p",{staticClass:"header-title has-text-success"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"header-close-btn close has-text-success",on:{click:t.closeModal}},[n("b-icon",{attrs:{icon:"close-circle"}})],1)]),t._v(" "),n("div",{staticClass:"modal-content",attrs:{id:"modalBoxContent"}},[t._t("default")],2)])}),[],!1,null,null,null);e.a=component.exports},679:function(t,e,n){"use strict";n(80),n(59),n(45),n(43),n(60),n(61);var o=n(3),r=n(4),c=n(30);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var d={name:"UserNetwork",props:{chain:{type:Object,default:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)("metamask",["netId"]),{},Object(c.b)("common",["supportedNetworks","translationWord"]),{currentNetwork:function(){return null==this.supportedNetworks.netIdsInfo[this.netId]?{icon:"unsupportnetwork.png",name:this.translationWord.error.unsupportedNetworkShort}:this.supportedNetworks.netIdsInfo[this.netId]}}),methods:{showNetworks:function(){8848==this.netId?alert("You are alrady switched on MARO Mainnet "):this.$store.dispatch("metamask/switchNetwork",{networkId:8848})}}},h=n(48),f=Object(h.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"is-user-network is-clickable",on:{click:this.showNetworks}},[e("img",{attrs:{src:"/networks/"+this.currentNetwork.icon}}),this._v(" "),e("p",{staticClass:"chain"},[this._v(this._s(this.currentNetwork.name))])])}),[],!1,null,null,null).exports;n(192);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var v={components:{ModalBox:n(654).a},props:{open:{type:Boolean,default:!1},inModal:{type:Boolean,default:!0}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)("metamask",["initialized","providerName","walletName","qrModalClosed","ethAccount","walletState"]),{},Object(c.c)("vote",["addressUrl"]),{},Object(c.b)("common",["translationWord"]),{},Object(c.c)("common",["language","isMobile"]),{showBack:function(){return 0!=this.step||this.forceShowWallets},maxWidth:function(){return this.isMobile||!this.inModal?"100%":"400px"},showAccount:function(){return""!=this.ethAccount&&null!=this.ethAccount&&!this.forceShowWallets},lastWallet:function(){return this.walletsInfo[this.lastWalletName]?this.walletsInfo[this.lastWalletName]:0==this.wallets.length?{}:this.wallets[0]},erc20Title:function(){return""}}),created:function(){this.$nextTick(Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)}))))},mounted:function(){var t=this;this.$bus.$on("back",(function(e){0==t.step&&(t.forceShowWallets=!1),1==t.step&&(t.step=0),2==t.step&&(t.step=1)})),this.updateTitle(),this.loadWallets()},data:function(){return{wallets:[],step:0,title:"Connect Wallet",selectedProviderName:"Metamask",connectStatus:0,network:1,networkInfo:[],networkInfoTestnet:[],prepareConnectWallet:void 0,connectError:!1,lastProviderName:"",lastWalletName:"MetaMask",copied:!1,forceShowWallets:!1,walletsInfo:{},privateKey:"",buttonLoading:!1}},watch:{step:function(t){this.updateTitle()},ethAccount:function(t){t&&$nuxt.$bus.$emit("closeModal")},showBack:function(t){t?this.title="":this.updateTitle()},initialized:function(t){t&&$nuxt.$bus.$emit("closeModal")},providerName:function(t){this.selectedProviderName=t},language:function(t){this.loadWallets()},qrModalClosed:function(t){this.connectError=t},walletState:function(t){this.connectError=-3==t}},methods:{updateTitle:function(){this.title=this.translationWord.connectWallet.connectWallet,0==this.step&&this.showAccount&&(this.title=this.translationWord.connectWallet.account),1==this.step&&(this.title="Change Wallet"),2==this.step&&(this.title=this.translationWord.connectWallet.connectToNetworkTitle),this.showBack&&(this.title="")},logout:function(){this.step=0;var t=this.providerName;this.$store.dispatch("metamask/closeProvider",{providerName:t}),this.$store.dispatch("common/resetLastUsedProviderName",{}),this.selectedProviderName="",this.updateTitle()},switchWallet:function(){this.step=0,this.forceShowWallets=!0,this.showBack=!0,this.title=""},copyAddress:function(){var t=document.createElement("textarea");t.value=this.ethAccount,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.copied=!0;var e=this;setTimeout((function(){e.copied=!1}),4e3)},loadWallets:function(){var t=this,e=[{name:"MetaMask",icon:"metamask.png",provider:"Metamask",showOnMobile:!0,desc:this.translationWord.connectWallet.metamaskConnectingDesc},{name:"WalletConnect",icon:"walletconnect.png",provider:"walletConnect",showOnMobile:!0,desc:this.translationWord.connectWallet.walletConnectConnectingDesc},{name:"Coinbase",icon:"coinbase.png",provider:"walletLink",showOnMobile:!0,desc:this.translationWord.connectWallet.walletLinkConnectingDesc},{name:"Trust Wallet",icon:"trustwallet.png",provider:"walletConnect",showOnMobile:!0,desc:this.translationWord.connectWallet.walletConnectTrustWalletConnectingDesc},{name:"Token Pocket",icon:"tokenpocket.png",provider:"walletConnect",showOnMobile:!0,desc:this.translationWord.connectWallet.walletConnectTokenPocketConnectingDesc},{name:"imToken",icon:"imtoken.png",provider:"walletConnect",showOnMobile:!0,desc:this.translationWord.connectWallet.walletConnectImTokenConnectingDesc},{name:"Kaikas",icon:"kaikas.png",provider:"kaikas",showOnMobile:!1,desc:this.translationWord.connectWallet.metamaskConnectingDesc}];this.wallets=e,this.wallets.forEach((function(e,i){t.walletsInfo[e.name]=e}));var n=[];this.isMobile&&(e.forEach((function(t,i){t.showOnMobile&&n.push(t)})),this.wallets=n)},connectToTryAgain:function(){console.info(this.lastProviderName,this.lastWalletName),this.connectTo(this.lastProviderName,this.lastWalletName,this.network)},connectTo:function(t,e,n){this.step=1,this.connectError=!1,this.network=n;try{ga("send",{hitType:"event",eventCategory:"ConnectWallets",eventAction:"click",eventLabel:t})}catch(t){}this.selectedProviderName=t,this.connectStatus=0,null==e&&(e=""),this.lastProviderName=t,this.lastWalletName=e,$nuxt.$bus.$emit("walletChanged",{providerName:t,netId:this.network,walletName:e}),this.$store.dispatch("metamask/setWalletName",{walletName:e})}}},w=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ModalBox",{attrs:{title:t.title,showBack:t.showBack,width:t.maxWidth}},[0==t.step?n("div",{staticClass:"wallets"},[t.showAccount?n("div",[n("div",{staticClass:"walletDesc"},[n("div",{staticClass:"left"},[n("p",{staticClass:"name"},[t._v(t._s(t.lastWallet.name))]),t._v(" "),n("p",{staticClass:"desc"},[n("a",{attrs:{target:"_blank",href:""+t.addressUrl+t.ethAccount}},[t._v("\n          "+t._s(t._f("truncate")(t.ethAccount,40))+"\n        ")]),t._v(" "),t.copied?n("span",{staticClass:"copied has-text-blue"},[n("b-icon",{staticClass:"has-text-blue",attrs:{size:"is-small",icon:"check-circle-outline"}}),t._v(" "),n("span",{staticClass:"has-text-blue"},[t._v("   "+t._s(t.translationWord.info.copied))])],1):n("span",{staticClass:"copy has-text-blue",on:{click:t.copyAddress}},[n("b-icon",{attrs:{size:"is-small",icon:"content-copy"}})],1)])]),t._v(" "),n("img",{staticClass:"icon",attrs:{src:"/wallets/"+t.lastWallet.icon}})]),t._v(" "),n("div",{staticClass:"actions"},[n("p",{staticClass:"action is-size-7",on:{click:t.switchWallet}},[n("b-icon",{attrs:{size:"is-small",icon:"wallet"}}),t._v("      "+t._s(t.translationWord.connectWallet.switchWallet))],1),t._v(" "),n("p",{staticClass:"action is-size-7",on:{click:t.logout}},[n("b-icon",{attrs:{size:"is-small",icon:"logout"}}),t._v("      "+t._s(t.translationWord.connectWallet.logoutWallet))],1)])]):n("div",t._l(t.wallets,(function(e,o){return 0==t.step?n("div",{staticClass:"walletItem",on:{click:function(n){return t.connectTo(e.provider,e.name)}}},[n("p",{staticClass:"name"},[t._v("\n      "+t._s(e.name)+"\n    ")]),t._v(" "),n("img",{staticClass:"icon",attrs:{src:"/wallets/"+e.icon}})]):t._e()})),0)]):1==t.step?n("div",{staticClass:"wallets"},[t.connectError?n("div",{staticClass:"connectError",on:{click:t.connectToTryAgain}},[n("span",{staticClass:"errorText"},[t._v(t._s(t.translationWord.error.errorConnecting))]),t._v(" "),n("button",{staticClass:"tryAgain",on:{click:t.connectToTryAgain}},[n("label",{staticClass:"text"},[t._v(t._s(t.translationWord.error.errorTryAgain))])])]):n("div",[t.lastWallet.isPaperWallet?n("div",[n("b-field",{attrs:{label:t.translationWord.formInfo.privateKey,type:"is-info is-light"}},[n("b-input",{attrs:{placeholder:t.translationWord.formInfo.privateKeyHolder,message:""},model:{value:t.privateKey,callback:function(e){t.privateKey=e},expression:"privateKey"}})],1),t._v(" "),n("b-button",{attrs:{type:"is-info",loading:t.buttonLoading},on:{click:t.importWallet}},[n("span",{staticClass:"is-size-7"},[t._v(" "+t._s(t.translationWord.button.importWallet))])]),t._v(" "),n("div",{staticClass:"margin-v"})],1):n("div",{staticClass:"processing"},[n("div",{staticClass:"loading"}),t._v(" "),n("span",{staticClass:"processText"},[t._v(t._s(t.translationWord.connectWallet.initializing))])])]),t._v(" "),n("div",{staticClass:"walletDesc"},[n("div",{staticClass:"left"},[n("p",{staticClass:"name"},[t._v(t._s(t.lastWallet.name))]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(t.lastWallet.desc))])]),t._v(" "),n("img",{staticClass:"icon",attrs:{src:"/wallets/"+t.lastWallet.icon}})])]):n("div",{staticClass:"wallets"})])}),[],!1,null,null,null).exports;function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var y={name:"WalletButton",components:{WalletConnectors:w},props:{buttonText:{type:String,default:null},disabled:{type:Boolean,default:!1},expanded:{type:Boolean,default:!1},size:{type:String,default:null},loading:{type:Boolean,default:!1},type:{type:String,default:"is-primary"},click:{type:Function}},data:function(){return{open:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)("metamask",["balance","isFetching","ethAccount"]),{},Object(c.c)("common",["language"]),{},Object(c.b)("common",["translationWord"]),{},Object(c.b)("metamask",["currency"])),created:function(){var t=this;this.$nextTick(Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.info(t.expanded);case 1:case"end":return e.stop()}}),e)}))))},methods:{connectWallet:function(){window.maroVoteModal=this.$buefy.modal.open({parent:this,component:w})}}},k=Object(h.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-center"},[""!=t.ethAccount&&null!=t.ethAccount?n("div",{staticClass:"account-button is-clickable",attrs:{disabled:t.disabled},on:{click:t.connectWallet}},[t.balance>0?n("span",{staticClass:"account-balance"},[t._v(t._s(t._f("1000")(t.balance))+" "+t._s(t.currency))]):t._e(),t._v(" "),n("span",{staticClass:"account-text wallet"},[t._v(t._s(t._f("truncate")(t.ethAccount,16)))])]):n("div",{staticClass:"account-button is-clickable",attrs:{s:"",disabled:t.disabled},on:{click:t.connectWallet}},[n("span",{staticClass:"account-text"},[t._v(t._s(t.translationWord.header.connectWalletShort))])])])}),[],!1,null,null,null).exports;function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var j,W={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)("token",["tokenSelected","allowanceEnough"]),{},Object(c.c)("metamask",["walletState","ethAccount"]),{},Object(c.c)("bulksender",["isVIP"]),{},Object(c.c)("common",["step","language","headerClosed","isMobile"]),{},Object(c.b)("common",["translationWord"]),{step:{get:function(){return this.$store.state.common.step},set:function(t){this.$store.dispatch("common/updateStep",{step:t})}},headerClosed:{get:function(){return this.$store.state.common.headerClosed},set:function(t){this.$store.dispatch("common/setHeaderClosed",{closed:t})}},language:{get:function(){return this.$store.state.common.language},set:function(t){this.$store.dispatch("common/updateLanguage",{language:t})}},allowanceEnough:function(){return!(null==this.tokenSelected||!this.isETH)||this.$store.state.token.allowanceEnough}}),methods:{activeChanged:function(){this.initialized||null==this.$refs.dropdownLanguage||(this.$refs.dropdownLanguage.isActive=!1)},connectWallet:function(){this.$buefy.modal.open({parent:this,component:WalletsModal})},moreNetwors:function(){this.showMoreNetworks=!this.showMoreNetworks;var t=document.getElementById("scrollItems");null!=t&&(t.scrollLeft=1e4),$nuxt.$bus.$emit("showNetworksConnectList")},reloadSite:function(){window.location=window.location.origin},handleHeaderStatus:function(){this.headerClosed?(this.step=1,$nuxt.$bus.$emit("stepChanged",1),this.headerClosed=!1):(this.step=0,this.headerClosed=!0,$nuxt.$bus.$emit("stepChanged",0))},optionClicked:function(t){this.tabIndex=4,this.readNewFeatureRefund=!0,0==t&&this.$router.push({path:"/revoke"}),1==t&&this.$router.push({path:"/refund"}),2==t&&(this.$router.push({path:"/checkBulksend"}),this.$store.dispatch("common/readNewFeatureRefund",{})),3==t&&window.open("https://tokenmaker.app","_blank")},switchLanguage:function(){"EN"==this.language?this.language="CN":this.language="EN"},switchLanguageMobile:function(t){this.language=t},checkLanguage:(j=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("common/getCachedLanguage");case 2:null!=(e=t.sent)?this.language=e:("Netscape"==navigator.appName?navigator.language:navigator.browserLanguage).indexOf("zh")>-1?this.language="CN":this.language="EN";case 4:case"end":return t.stop()}}),t,this)}))),function(){return j.apply(this,arguments)}),resetNoticeSnackbarStyle:function(){var t=document.querySelector(".notices .snackbar");console.info(t),null!=t&&t.classList.add("snackbar-Fix")},generateMobileMenus:function(){document.getElementById("nav-menus")},showOrHideMenus:function(){var t=document.querySelector(".overlay-view"),e=document.getElementById("nav-menus");if("block"==t.style.display)t.removeChild(document.getElementById("mobile-nav-menus")),t.style="display:none;";else{t.style="display:block;";var n=e.cloneNode(!0);n.id="mobile-nav-menus",n.style.display="block",t.appendChild(n)}},fixDropdown:function(){var t=document.getElementById("connectWallet");null!=(t=t.querySelector(".dropdown-content"))&&(t.style="min-width:284px;margin-top:20px;background:#EBF0FA;"),setTimeout((function(){var t=document.getElementById("connectNetworks");null!=(t=t.querySelector(".dropdown-content"))&&(t.style="min-width:766px;background:#EBF0FA;margin-top: 20px;")}),1e3)}},created:function(){this.$route.path;this.checkLanguage(),this.$nextTick(Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)}))))},mounted:function(){var t=this,e=this;this.$bus.$on("closeModal",(function(t){console.info(e.$parent)})),this.$bus.$on("closeOverlay",(function(t){e.showOrHideMenus()})),this.$bus.$on("routeChanged",(function(e){"/vip"==e&&(t.tabIndex=0),"/tutorial"==e&&(t.tabIndex=1),"/referral"==e&&(t.tabIndex=3),"/checkBulksend"==e&&(t.tabIndex=5),"/faq"==e&&(t.tabIndex=6),"/revoke"!=e&&"/refund"!=e||(t.tabIndex=4),"/deploy"==e&&(t.tabIndex=7),"/"!=e&&"/index"!=e||(t.headerClosed?(t.step=0,$nuxt.$bus.$emit("stepChanged",0)):t.step=1,t.tabIndex=-1),"/confirm"==e&&(t.step=2),"/send"==e&&(t.step=3),"/confirm"!=e&&"/send"!=e&&"/"!=e&&"/index"!=e&&(t.step=1e3)})),this.languageShow=!0,this.initialized=!0,this.generateMobileMenus()},data:function(){return{lastScrollTop:0,tabIndex:-1,languageShow:!1,lastWalletState:0,initialized:!1,showMoreNetworks:!1,readNewFeatureRefund:!0}},watch:{walletState:function(t){if(this.lastWalletState!=t&&(-1==t&&(this.isMobile||this.$buefy.snackbar.open({message:this.translationWord.error.anyWalletNotFoundError,actionText:this.translationWord.button.connect,position:"is-bottom",container:"hero-header",indefinite:!0,onAction:function(){$nuxt.$bus.$emit("showWalletConnectList",!0)}})),-2==t&&this.$buefy.snackbar.open({message:this.translationWord.error.metamaskLockedError,type:"is-success",position:"is-bottom",actionText:this.translationWord.button.gotIt,indefinite:!0,container:"hero-header",onAction:function(){}}),-3==t&&null==document.querySelector(".notices.is-bottom")&&this.$buefy.snackbar.open({message:this.translationWord.error.metamaskConnectError,type:"is-success",position:"is-bottom",actionText:this.translationWord.button.gotIt,indefinite:!0,container:"hero-header",onAction:function(){}}),1==t)){var e=document.querySelector(".notices.is-bottom");console.info(e),null!=e&&e.parentNode.removeChild(e)}}},name:"Header",components:{UserNetwork:f,WalletButton:k}},_=Object(h.a)(W,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"navbar-container"},[n("div",{staticClass:"header-nav"},[n("div",{staticClass:"brand is-clickable"},[n("img",{staticClass:"headerLogo",attrs:{src:"/logo.png"},on:{click:function(e){return t.reloadSite()}}})]),t._v(" "),n("div",{staticClass:"nav-ends"},[n("UserNetwork"),t._v(" "),n("WalletButton"),t._v(" "),n("div",{staticClass:"mobile-menu",on:{click:function(e){return t.showOrHideMenus()}}},[n("b-icon",{attrs:{icon:"menu",type:"is-info"}})],1)],1)])])}),[],!1,null,"015ec8c6",null);e.a=_.exports},681:function(t,e,n){"use strict";n(80),n(59),n(45),n(43),n(60);var o=n(4),r=n(30);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.c)("vote",["voteAddress","addressUrl"]),{},Object(r.b)("common",["translationWord","step"]),{},Object(r.b)("metamask",["networkName"]),{language:{get:function(){return this.$store.state.common.language},set:function(t){this.$store.dispatch("common/updateLanguage",{language:t})}}}),methods:{switchLanguage:function(t){t?this.language=t:"EN"==this.language?this.language="CN":this.language="EN"}}},d=n(48),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-nav"},[n("div",{staticClass:"contractInfo"},[n("p",[t._v(t._s(t.translationWord.footer.contract)+" "),n("b-icon",{attrs:{icon:"file-document",size:"is-small"}})],1),t._v(" "),""!=t.voteAddress?n("a",{attrs:{target:"_blank",href:""+t.addressUrl+t.voteAddress}},[t._v(t._s(t.voteAddress))]):t._e()]),t._v(" "),n("div",{staticClass:"socal"},[n("a",{staticClass:"socal-icon",attrs:{target:"_blank",href:"https://github.com/savemaro"}},[n("b-icon",{attrs:{icon:"github-circle",type:"is-info"}})],1),t._v(" "),n("a",{staticClass:"socal-icon",attrs:{target:"_blank",href:"https://t.me/ttc_en"}},[n("b-icon",{attrs:{icon:"telegram",type:"is-info"}})],1),t._v(" "),n("a",{staticClass:"socal-icon",attrs:{target:"_blank",href:"https://twitter.com/maro_blockchain"}},[n("b-icon",{attrs:{icon:"twitter-circle",type:"is-info"}})],1),t._v(" "),n("a",{staticClass:"socal-icon",staticStyle:{"margin-left":"20px"}},[n("b-dropdown",{staticClass:"c-dropdown",attrs:{"aria-role":"list",position:"is-top-left",hoverable:""}},[n("p",{attrs:{slot:"trigger"},slot:"trigger"},["EN"==t.language?n("b",{staticClass:"has-text-info",staticStyle:{"padding-left":"20px","border-left":"0.1rem solid #bac5dc"}},[t._v("EN")]):t._e(),t._v(" "),"CN"==t.language?n("b",{staticClass:"has-text-info",staticStyle:{"padding-left":"20px","border-left":"0.1rem solid #bac5dc"}},[t._v("中文")]):t._e()]),t._v(" "),n("b-dropdown-item",{attrs:{"aria-role":"listitem"},on:{click:function(e){return t.switchLanguage("EN")}}},[t._v("\n         English (EN)\n       ")]),t._v(" "),n("b-dropdown-item",{attrs:{"aria-role":"listitem"},on:{click:function(e){return t.switchLanguage("CN")}}},[t._v("\n        简体中文 (CN)\n       ")])],1)],1)])])}),[],!1,null,null,null);e.a=component.exports},750:function(t,e){},758:function(t,e){},759:function(t,e){},771:function(t,e){},788:function(t,e){},79:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return d}));n(761);function o(address){try{if(address.toLowerCase().endsWith(".eth"))return!0}catch(t){}return!1}var r=n(11).isAddress;function c(address){try{return o(address=address.toLowerCase())||r(address)}catch(t){return!1}}var l=n(11).toChecksumAddress;function d(address){try{return o(address)?address:l(address)}catch(t){return address}}},790:function(t,e){},806:function(t,e){},807:function(t,e){},858:function(t,e){},860:function(t,e){},891:function(t,e){},892:function(t,e){},938:function(t,e){},953:function(t,e){},972:function(t,e){},974:function(t,e){}}]);