(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1155:function(t,e){},1165:function(t,e){},1171:function(t,e){},1173:function(t,e){},1269:function(t,e,n){t.exports=n(684)},2:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(760);function o(t){return null!=t&&null!=t||(t=0),new r(t)}},297:function(t,e,n){"use strict";n.r(e),e.default=function(t){}},298:function(t,e,n){"use strict";n.r(e);n(61);var r=n(3);e.default=function(t){var e=t.app;t.redirect,t.store;e.router.beforeEach((function(t,e,n){n()})),e.router.afterEach(function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())}},388:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(80),n(59),n(45),n(43),n(60);var r=n(4),o=(n(61),n(3));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function l(t){return d.apply(this,arguments)}function d(){return(d=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,r,o,c,l,d,h=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=h.length>1&&void 0!==h[1]?h[1]:{},r=n.timeout,o=void 0===r?1e4:r,c=new AbortController,l=setTimeout((function(){return c.abort()}),o),t.next=6,fetch(e,f({},n,{signal:c.signal}));case 6:return d=t.sent,clearTimeout(l),t.abrupt("return",d);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},422:function(t,e){},680:function(t,e,n){"use strict";n(80),n(59),n(45),n(43),n(60),n(61);var r=n(3),o=n(4),c=n(30),f=n(681),l=n(679);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var h,m,v,w={computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)("metamask",["walletState","providerName"]),{step:{get:function(){return this.$store.state.common.step},set:function(t){this.$store.dispatch("common/updateStep",{step:t})}},currentRouter:{get:function(){return this.$store.state.common.currentRouter},set:function(t){this.$store.dispatch("common/updateCurrentRouter",{currentRouter:t})}}}),mounted:function(){var t=this;window.onload=function(){t.connectWeb3();t.checkIsMobile();t.redirectRouter(),t.checkReferralAddress()},window.onbeforeunload=function(){},$nuxt.$bus.$on("walletChanged",(function(e){var n=e.providerName,r=e.netId,o=e.walletName;t.connectToWallet(n,r,o)}))},created:function(){this.$nextTick(Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)}))))},data:function(){return{showModal:!1}},methods:{closeOverlay:function(){$nuxt.$bus.$emit("closeOverlay",!0)},checkIsMobile:function(){if(/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)){this.step=0;return this.$store.dispatch("common/updateIsMobile",{isMobile:!0}),!0}return!1},redirectRouter:function(){var t=this;"/faq"==this.currentRouter&&setTimeout((function(){$nuxt.$router.push({path:t.currentRouter}),$nuxt.$bus.$emit("routeChanged",t.currentRouter),t.currentRouter=null}),0)},checkReferralAddress:(v=Object(r.a)(regeneratorRuntime.mark((function t(){var address,e,n,source;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,address=this.$route.query.referrer,e=!0,n=this.checkIsMobile(),source=this.$route.query.utm_source,n||null==source||null==source||"imtoken"!=source||(e=!1),!e){t.next=15;break}return t.next=9,this.$store.dispatch("common/checkAddressIsValid",{address:address});case 9:if(!t.sent){t.next=15;break}return t.next=13,this.$store.dispatch("common/checkTheAddressIsContract",{address:address});case 13:t.sent||(console.info("referrer",address),this.$store.dispatch("bulksender/saveReferralAddress",{address:address}));case 15:t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),console.info(t.t0);case 20:case"end":return t.stop()}}),t,this,[[0,17]])}))),function(){return v.apply(this,arguments)}),connectWeb3:(m=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("common/getLastUsedProvider");case 2:if(""!=(e=t.sent)&&null!=e&&null!=e||(e="Metamask"),"Metamask"!=e){t.next=10;break}return this.connectToWallet(e),t.next=8,this.$store.dispatch("common/getLastUsedWalletName");case 8:n=t.sent,this.$store.dispatch("metamask/setWalletName",{walletName:n});case 10:case"end":return t.stop()}}),t,this)}))),function(){return m.apply(this,arguments)}),connectToWallet:(h=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o="mainnet",null==n&&(n=1),null==r&&(r=""),t.prev=3,"walletConnect"!=e||"walletConnect"!=this.providerName){t.next=7;break}return t.next=7,this.$store.dispatch("metamask/closeProvider",{providerName:e});case 7:t.next=11;break;case 9:t.prev=9,t.t0=t.catch(3);case 11:return t.prev=11,t.next=14,this.$store.dispatch("metamask/askPermission",{providerName:e,networkName:o,prepareNetId:n,walletName:r});case 14:t.sent,this.$store.dispatch("metamask/fetchGasPrice",{}),t.next=20;break;case 18:t.prev=18,t.t1=t.catch(11);case 20:case"end":return t.stop()}}),t,this,[[3,9],[11,18]])}))),function(t,e,n){return h.apply(this,arguments)})},name:"HomeIndex",components:{Footer:f.a,HeaderView:l.a}},O=n(48),component=Object(O.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("section",{staticClass:"overlay-view"},[e("a",{on:{click:this.closeOverlay}},[e("b-icon",{staticClass:"overlay-close",attrs:{icon:"close-circle",type:"is-success"}})],1)]),this._v(" "),e("section",{staticClass:"rootContainer"},[e("div",{staticClass:"headerContainer"},[e("HeaderView")],1),this._v(" "),e("div",{staticClass:"mainContainer",attrs:{id:"mainContainer"}},[e("nuxt")],1),this._v(" "),e("div",{staticClass:"_footerContainer"},[e("Footer")],1)]),this._v(" "),e("script",{attrs:{type:"module"}},[this._v("\n    import { WalletConnectModalSign } from 'https://unpkg.com/@walletconnect/modal-sign-html@2.5.4'\n    window.walletConnectModalSignForMaroVote = WalletConnectModalSign\n  ")])])}),[],!1,null,null,null);e.a=component.exports},750:function(t,e){},758:function(t,e){},759:function(t,e){},771:function(t,e){},788:function(t,e){},79:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return l}));n(761);function r(address){try{if(address.toLowerCase().endsWith(".eth"))return!0}catch(t){}return!1}var o=n(11).isAddress;function c(address){try{return r(address=address.toLowerCase())||o(address)}catch(t){return!1}}var f=n(11).toChecksumAddress;function l(address){try{return r(address)?address:f(address)}catch(t){return address}}},790:function(t,e){},806:function(t,e){},807:function(t,e){},858:function(t,e){},860:function(t,e){},891:function(t,e){},892:function(t,e){},938:function(t,e){},953:function(t,e){},972:function(t,e){},974:function(t,e){}}]);