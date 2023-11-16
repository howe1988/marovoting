/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1033:function(e,r){e.exports=function(e){var r=t.call(e);return"[object Function]"===r||"function"==typeof e&&"[object RegExp]"!==r||"undefined"!=typeof window&&(e===window.setTimeout||e===window.alert||e===window.confirm||e===window.prompt)};var t=Object.prototype.toString},1097:function(e,r){e.exports=function(e){var r=(e=e||{}).max||Number.MAX_SAFE_INTEGER,t=void 0!==e.start?e.start:Math.floor(Math.random()*r);return function(){return t%=r,t++}}},1117:function(e,r,t){r.parse=t(1118),r.stringify=t(1119)},1118:function(e,r){var t,n,text,o,c={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},f=function(e){throw{name:"SyntaxError",message:e,at:t,text:text}},d=function(e){return e&&e!==n&&f("Expected '"+e+"' instead of '"+n+"'"),n=text.charAt(t),t+=1,n},l=function(){var e,r="";for("-"===n&&(r="-",d("-"));n>="0"&&n<="9";)r+=n,d();if("."===n)for(r+=".";d()&&n>="0"&&n<="9";)r+=n;if("e"===n||"E"===n)for(r+=n,d(),"-"!==n&&"+"!==n||(r+=n,d());n>="0"&&n<="9";)r+=n,d();if(e=+r,isFinite(e))return e;f("Bad number")},h=function(){var e,i,r,t="";if('"'===n)for(;d();){if('"'===n)return d(),t;if("\\"===n)if(d(),"u"===n){for(r=0,i=0;i<4&&(e=parseInt(d(),16),isFinite(e));i+=1)r=16*r+e;t+=String.fromCharCode(r)}else{if("string"!=typeof c[n])break;t+=c[n]}else t+=n}f("Bad string")},y=function(){for(;n&&n<=" ";)d()};o=function(){switch(y(),n){case"{":return function(){var e,object={};if("{"===n){if(d("{"),y(),"}"===n)return d("}"),object;for(;n;){if(e=h(),y(),d(":"),Object.hasOwnProperty.call(object,e)&&f('Duplicate key "'+e+'"'),object[e]=o(),y(),"}"===n)return d("}"),object;d(","),y()}}f("Bad object")}();case"[":return function(){var e=[];if("["===n){if(d("["),y(),"]"===n)return d("]"),e;for(;n;){if(e.push(o()),y(),"]"===n)return d("]"),e;d(","),y()}}f("Bad array")}();case'"':return h();case"-":return l();default:return n>="0"&&n<="9"?l():function(){switch(n){case"t":return d("t"),d("r"),d("u"),d("e"),!0;case"f":return d("f"),d("a"),d("l"),d("s"),d("e"),!1;case"n":return d("n"),d("u"),d("l"),d("l"),null}f("Unexpected '"+n+"'")}()}},e.exports=function(source,e){var r;return text=source,t=0,n=" ",r=o(),y(),n&&f("Syntax error"),"function"==typeof e?function r(t,n){var o,c,f=t[n];if(f&&"object"==typeof f)for(o in f)Object.prototype.hasOwnProperty.call(f,o)&&(void 0!==(c=r(f,o))?f[o]=c:delete f[o]);return e.call(t,n,f)}({"":r},""):r}},1119:function(e,r){var t,n,o,c=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function f(e){return c.lastIndex=0,c.test(e)?'"'+e.replace(c,(function(a){var e=meta[a];return"string"==typeof e?e:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}))+'"':'"'+e+'"'}e.exports=function(e,r,c){var i;if(t="",n="","number"==typeof c)for(i=0;i<c;i+=1)n+=" ";else"string"==typeof c&&(n=c);if(o=r,r&&"function"!=typeof r&&("object"!=typeof r||"number"!=typeof r.length))throw new Error("JSON.stringify");return function e(r,c){var i,d,l,h,y,m=t,v=c[r];switch(v&&"object"==typeof v&&"function"==typeof v.toJSON&&(v=v.toJSON(r)),"function"==typeof o&&(v=o.call(c,r,v)),typeof v){case"string":return f(v);case"number":return isFinite(v)?String(v):"null";case"boolean":case"null":return String(v);case"object":if(!v)return"null";if(t+=n,y=[],"[object Array]"===Object.prototype.toString.apply(v)){for(h=v.length,i=0;i<h;i+=1)y[i]=e(i,v)||"null";return l=0===y.length?"[]":t?"[\n"+t+y.join(",\n"+t)+"\n"+m+"]":"["+y.join(",")+"]",t=m,l}if(o&&"object"==typeof o)for(h=o.length,i=0;i<h;i+=1)"string"==typeof(d=o[i])&&(l=e(d,v))&&y.push(f(d)+(t?": ":":")+l);else for(d in v)Object.prototype.hasOwnProperty.call(v,d)&&(l=e(d,v))&&y.push(f(d)+(t?": ":":")+l);return l=0===y.length?"{}":t?"{\n"+t+y.join(",\n"+t)+"\n"+m+"}":"{"+y.join(",")+"}",t=m,l}}("",{"":e})}},1127:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.createIdRemapMiddleware=void 0;const n=t(533);r.createIdRemapMiddleware=function(){return(e,r,t,o)=>{const c=e.id,f=n.getUniqueId();e.id=f,r.id=f,t(t=>{e.id=c,r.id=c,t()})}}},1128:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.createAsyncMiddleware=void 0,r.createAsyncMiddleware=function(e){return async(r,t,n,o)=>{let c;const f=new Promise(e=>{c=e});let d=null,l=!1;const h=async()=>{l=!0,n(e=>{d=e,c()}),await f};try{await e(r,t,h),l?(await f,d(null)):o(null)}catch(e){d?d(e):o(e)}}}},1129:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.createScaffoldMiddleware=void 0,r.createScaffoldMiddleware=function(e){return(r,t,n,o)=>{const c=e[r.method];return void 0===c?n():"function"==typeof c?c(r,t,n,o):(t.result=c,o())}}},1130:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.getMessageFromCode=r.serializeError=r.EthereumProviderError=r.EthereumRpcError=r.ethErrors=r.errorCodes=void 0;const n=t(359);Object.defineProperty(r,"EthereumRpcError",{enumerable:!0,get:function(){return n.EthereumRpcError}}),Object.defineProperty(r,"EthereumProviderError",{enumerable:!0,get:function(){return n.EthereumProviderError}});const o=t(536);Object.defineProperty(r,"serializeError",{enumerable:!0,get:function(){return o.serializeError}}),Object.defineProperty(r,"getMessageFromCode",{enumerable:!0,get:function(){return o.getMessageFromCode}});const c=t(1131);Object.defineProperty(r,"ethErrors",{enumerable:!0,get:function(){return c.ethErrors}});const f=t(360);Object.defineProperty(r,"errorCodes",{enumerable:!0,get:function(){return f.errorCodes}})},1131:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.ethErrors=void 0;const n=t(359),o=t(536),c=t(360);function f(code,e){const[r,data]=l(e);return new n.EthereumRpcError(code,r||o.getMessageFromCode(code),data)}function d(code,e){const[r,data]=l(e);return new n.EthereumProviderError(code,r||o.getMessageFromCode(code),data)}function l(e){if(e){if("string"==typeof e)return[e];if("object"==typeof e&&!Array.isArray(e)){const{message:r,data:data}=e;if(r&&"string"!=typeof r)throw new Error("Must specify string message.");return[r||void 0,data]}}return[]}r.ethErrors={rpc:{parse:e=>f(c.errorCodes.rpc.parse,e),invalidRequest:e=>f(c.errorCodes.rpc.invalidRequest,e),invalidParams:e=>f(c.errorCodes.rpc.invalidParams,e),methodNotFound:e=>f(c.errorCodes.rpc.methodNotFound,e),internal:e=>f(c.errorCodes.rpc.internal,e),server:e=>{if(!e||"object"!=typeof e||Array.isArray(e))throw new Error("Ethereum RPC Server errors must provide single object argument.");const{code:code}=e;if(!Number.isInteger(code)||code>-32005||code<-32099)throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');return f(code,e)},invalidInput:e=>f(c.errorCodes.rpc.invalidInput,e),resourceNotFound:e=>f(c.errorCodes.rpc.resourceNotFound,e),resourceUnavailable:e=>f(c.errorCodes.rpc.resourceUnavailable,e),transactionRejected:e=>f(c.errorCodes.rpc.transactionRejected,e),methodNotSupported:e=>f(c.errorCodes.rpc.methodNotSupported,e),limitExceeded:e=>f(c.errorCodes.rpc.limitExceeded,e)},provider:{userRejectedRequest:e=>d(c.errorCodes.provider.userRejectedRequest,e),unauthorized:e=>d(c.errorCodes.provider.unauthorized,e),unsupportedMethod:e=>d(c.errorCodes.provider.unsupportedMethod,e),disconnected:e=>d(c.errorCodes.provider.disconnected,e),chainDisconnected:e=>d(c.errorCodes.provider.chainDisconnected,e),custom:e=>{if(!e||"object"!=typeof e||Array.isArray(e))throw new Error("Ethereum Provider custom errors must provide single object argument.");const{code:code,message:r,data:data}=e;if(!r||"string"!=typeof r)throw new Error('"message" must be a nonempty string');return new n.EthereumProviderError(code,r,data)}}}},1132:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.mergeMiddleware=void 0;const n=t(534);r.mergeMiddleware=function(e){const r=new n.JsonRpcEngine;return e.forEach(e=>r.push(e)),r.asMiddleware()}},13:function(e,r){"function"==typeof Object.create?e.exports=function(e,r){r&&(e.super_=r,e.prototype=Object.create(r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}))}:e.exports=function(e,r){if(r){e.super_=r;var t=function(){};t.prototype=r.prototype,e.prototype=new t,e.prototype.constructor=e}}},218:function(e,r,t){(function(n,o){var c;!function(){"use strict";var f="input is invalid type",d="object"==typeof window,l=d?window:{};l.JS_SHA3_NO_WINDOW&&(d=!1);var h=!d&&"object"==typeof self;!l.JS_SHA3_NO_NODE_JS&&"object"==typeof n&&n.versions&&n.versions.node?l=o:h&&(l=self);var y=!l.JS_SHA3_NO_COMMON_JS&&"object"==typeof e&&e.exports,m=t(756),v=!l.JS_SHA3_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,w="0123456789abcdef".split(""),E=[4,1024,262144,67108864],_=[0,8,16,24],j=[1,0,32898,0,32906,2147483648,2147516416,2147483648,32907,0,2147483649,0,2147516545,2147483648,32777,2147483648,138,0,136,0,2147516425,0,2147483658,0,2147516555,0,139,2147483648,32905,2147483648,32771,2147483648,32770,2147483648,128,2147483648,32778,0,2147483658,2147483648,2147516545,2147483648,32896,2147483648,2147483649,0,2147516424,2147483648],A=[224,256,384,512],R=[128,256],O=["hex","buffer","arrayBuffer","array","digest"],S={128:168,256:136};!l.JS_SHA3_NO_NODE_JS&&Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),!v||!l.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(e){return"object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});for(var C=function(e,r,t){return function(n){return new T(e,r,e).update(n)[t]()}},P=function(e,r,t){return function(n,o){return new T(e,r,o).update(n)[t]()}},M=function(e,r,t){return function(r,n,o,s){return J["cshake"+e].update(r,n,o,s)[t]()}},x=function(e,r,t){return function(r,n,o,s){return J["kmac"+e].update(r,n,o,s)[t]()}},N=function(e,r,t,n){for(var i=0;i<O.length;++i){var o=O[i];e[o]=r(t,n,o)}return e},k=function(e,r){var t=C(e,r,"hex");return t.create=function(){return new T(e,r,e)},t.update=function(e){return t.create().update(e)},N(t,C,e,r)},I=[{name:"keccak",padding:[1,256,65536,16777216],bits:A,createMethod:k},{name:"sha3",padding:[6,1536,393216,100663296],bits:A,createMethod:k},{name:"shake",padding:[31,7936,2031616,520093696],bits:R,createMethod:function(e,r){var t=P(e,r,"hex");return t.create=function(t){return new T(e,r,t)},t.update=function(e,r){return t.create(r).update(e)},N(t,P,e,r)}},{name:"cshake",padding:E,bits:R,createMethod:function(e,r){var t=S[e],n=M(e,0,"hex");return n.create=function(n,o,s){return o||s?new T(e,r,n).bytepad([o,s],t):J["shake"+e].create(n)},n.update=function(e,r,t,s){return n.create(r,t,s).update(e)},N(n,M,e,r)}},{name:"kmac",padding:E,bits:R,createMethod:function(e,r){var t=S[e],n=x(e,0,"hex");return n.create=function(n,o,s){return new D(e,r,o).bytepad(["KMAC",s],t).bytepad([n],t)},n.update=function(e,r,t,s){return n.create(e,t,s).update(r)},N(n,x,e,r)}}],J={},B=[],i=0;i<I.length;++i)for(var F=I[i],z=F.bits,U=0;U<z.length;++U){var V=F.name+"_"+z[U];if(B.push(V),J[V]=F.createMethod(z[U],F.padding),"sha3"!==F.name){var H=F.name+z[U];B.push(H),J[H]=J[V]}}function T(e,r,t){this.blocks=[],this.s=[],this.padding=r,this.outputBits=t,this.reset=!0,this.finalized=!1,this.block=0,this.start=0,this.blockCount=1600-(e<<1)>>5,this.byteCount=this.blockCount<<2,this.outputBlocks=t>>5,this.extraBytes=(31&t)>>3;for(var i=0;i<50;++i)this.s[i]=0}function D(e,r,t){T.call(this,e,r,t)}T.prototype.update=function(e){if(this.finalized)throw new Error("finalize already called");var r,t=typeof e;if("string"!==t){if("object"!==t)throw new Error(f);if(null===e)throw new Error(f);if(v&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||v&&ArrayBuffer.isView(e)))throw new Error(f);r=!0}for(var i,code,n=this.blocks,o=this.byteCount,c=e.length,d=this.blockCount,l=0,s=this.s;l<c;){if(this.reset)for(this.reset=!1,n[0]=this.block,i=1;i<d+1;++i)n[i]=0;if(r)for(i=this.start;l<c&&i<o;++l)n[i>>2]|=e[l]<<_[3&i++];else for(i=this.start;l<c&&i<o;++l)(code=e.charCodeAt(l))<128?n[i>>2]|=code<<_[3&i++]:code<2048?(n[i>>2]|=(192|code>>6)<<_[3&i++],n[i>>2]|=(128|63&code)<<_[3&i++]):code<55296||code>=57344?(n[i>>2]|=(224|code>>12)<<_[3&i++],n[i>>2]|=(128|code>>6&63)<<_[3&i++],n[i>>2]|=(128|63&code)<<_[3&i++]):(code=65536+((1023&code)<<10|1023&e.charCodeAt(++l)),n[i>>2]|=(240|code>>18)<<_[3&i++],n[i>>2]|=(128|code>>12&63)<<_[3&i++],n[i>>2]|=(128|code>>6&63)<<_[3&i++],n[i>>2]|=(128|63&code)<<_[3&i++]);if(this.lastByteIndex=i,i>=o){for(this.start=i-o,this.block=n[d],i=0;i<d;++i)s[i]^=n[i];$(s),this.reset=!0}else this.start=i}return this},T.prototype.encode=function(e,r){var t=255&e,n=1,o=[t];for(t=255&(e>>=8);t>0;)o.unshift(t),t=255&(e>>=8),++n;return r?o.push(n):o.unshift(n),this.update(o),o.length},T.prototype.encodeString=function(e){var r,t=typeof e;if("string"!==t){if("object"!==t)throw new Error(f);if(null===e)throw new Error(f);if(v&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||v&&ArrayBuffer.isView(e)))throw new Error(f);r=!0}var n=0,o=e.length;if(r)n=o;else for(var i=0;i<e.length;++i){var code=e.charCodeAt(i);code<128?n+=1:code<2048?n+=2:code<55296||code>=57344?n+=3:(code=65536+((1023&code)<<10|1023&e.charCodeAt(++i)),n+=4)}return n+=this.encode(8*n),this.update(e),n},T.prototype.bytepad=function(e,r){for(var t=this.encode(r),i=0;i<e.length;++i)t+=this.encodeString(e[i]);var n=r-t%r,o=[];return o.length=n,this.update(o),this},T.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,i=this.lastByteIndex,r=this.blockCount,s=this.s;if(e[i>>2]|=this.padding[3&i],this.lastByteIndex===this.byteCount)for(e[0]=e[r],i=1;i<r+1;++i)e[i]=0;for(e[r-1]|=2147483648,i=0;i<r;++i)s[i]^=e[i];$(s)}},T.prototype.toString=T.prototype.hex=function(){this.finalize();for(var e,r=this.blockCount,s=this.s,t=this.outputBlocks,n=this.extraBytes,i=0,o=0,c="";o<t;){for(i=0;i<r&&o<t;++i,++o)e=s[i],c+=w[e>>4&15]+w[15&e]+w[e>>12&15]+w[e>>8&15]+w[e>>20&15]+w[e>>16&15]+w[e>>28&15]+w[e>>24&15];o%r==0&&($(s),i=0)}return n&&(e=s[i],c+=w[e>>4&15]+w[15&e],n>1&&(c+=w[e>>12&15]+w[e>>8&15]),n>2&&(c+=w[e>>20&15]+w[e>>16&15])),c},T.prototype.arrayBuffer=function(){this.finalize();var e,r=this.blockCount,s=this.s,t=this.outputBlocks,n=this.extraBytes,i=0,o=0,c=this.outputBits>>3;e=n?new ArrayBuffer(t+1<<2):new ArrayBuffer(c);for(var f=new Uint32Array(e);o<t;){for(i=0;i<r&&o<t;++i,++o)f[o]=s[i];o%r==0&&$(s)}return n&&(f[i]=s[i],e=e.slice(0,c)),e},T.prototype.buffer=T.prototype.arrayBuffer,T.prototype.digest=T.prototype.array=function(){this.finalize();for(var e,r,t=this.blockCount,s=this.s,n=this.outputBlocks,o=this.extraBytes,i=0,c=0,f=[];c<n;){for(i=0;i<t&&c<n;++i,++c)e=c<<2,r=s[i],f[e]=255&r,f[e+1]=r>>8&255,f[e+2]=r>>16&255,f[e+3]=r>>24&255;c%t==0&&$(s)}return o&&(e=c<<2,r=s[i],f[e]=255&r,o>1&&(f[e+1]=r>>8&255),o>2&&(f[e+2]=r>>16&255)),f},D.prototype=new T,D.prototype.finalize=function(){return this.encode(this.outputBits,!0),T.prototype.finalize.call(this)};var $=function(s){var e,r,t,n,o,c,f,d,l,h,y,m,v,w,E,_,A,R,O,S,C,P,M,x,N,k,I,J,B,F,z,U,V,H,T,D,$,G,W,Y,K,X,L,Q,Z,ee,re,te,ne,oe,ie,se,ae,ue,ce,fe,de,le,pe,he,ye,ge,me;for(t=0;t<48;t+=2)n=s[0]^s[10]^s[20]^s[30]^s[40],o=s[1]^s[11]^s[21]^s[31]^s[41],c=s[2]^s[12]^s[22]^s[32]^s[42],f=s[3]^s[13]^s[23]^s[33]^s[43],d=s[4]^s[14]^s[24]^s[34]^s[44],l=s[5]^s[15]^s[25]^s[35]^s[45],h=s[6]^s[16]^s[26]^s[36]^s[46],y=s[7]^s[17]^s[27]^s[37]^s[47],e=(m=s[8]^s[18]^s[28]^s[38]^s[48])^(c<<1|f>>>31),r=(v=s[9]^s[19]^s[29]^s[39]^s[49])^(f<<1|c>>>31),s[0]^=e,s[1]^=r,s[10]^=e,s[11]^=r,s[20]^=e,s[21]^=r,s[30]^=e,s[31]^=r,s[40]^=e,s[41]^=r,e=n^(d<<1|l>>>31),r=o^(l<<1|d>>>31),s[2]^=e,s[3]^=r,s[12]^=e,s[13]^=r,s[22]^=e,s[23]^=r,s[32]^=e,s[33]^=r,s[42]^=e,s[43]^=r,e=c^(h<<1|y>>>31),r=f^(y<<1|h>>>31),s[4]^=e,s[5]^=r,s[14]^=e,s[15]^=r,s[24]^=e,s[25]^=r,s[34]^=e,s[35]^=r,s[44]^=e,s[45]^=r,e=d^(m<<1|v>>>31),r=l^(v<<1|m>>>31),s[6]^=e,s[7]^=r,s[16]^=e,s[17]^=r,s[26]^=e,s[27]^=r,s[36]^=e,s[37]^=r,s[46]^=e,s[47]^=r,e=h^(n<<1|o>>>31),r=y^(o<<1|n>>>31),s[8]^=e,s[9]^=r,s[18]^=e,s[19]^=r,s[28]^=e,s[29]^=r,s[38]^=e,s[39]^=r,s[48]^=e,s[49]^=r,w=s[0],E=s[1],ee=s[11]<<4|s[10]>>>28,re=s[10]<<4|s[11]>>>28,J=s[20]<<3|s[21]>>>29,B=s[21]<<3|s[20]>>>29,he=s[31]<<9|s[30]>>>23,ye=s[30]<<9|s[31]>>>23,X=s[40]<<18|s[41]>>>14,L=s[41]<<18|s[40]>>>14,H=s[2]<<1|s[3]>>>31,T=s[3]<<1|s[2]>>>31,_=s[13]<<12|s[12]>>>20,A=s[12]<<12|s[13]>>>20,te=s[22]<<10|s[23]>>>22,ne=s[23]<<10|s[22]>>>22,F=s[33]<<13|s[32]>>>19,z=s[32]<<13|s[33]>>>19,ge=s[42]<<2|s[43]>>>30,me=s[43]<<2|s[42]>>>30,ue=s[5]<<30|s[4]>>>2,ce=s[4]<<30|s[5]>>>2,D=s[14]<<6|s[15]>>>26,$=s[15]<<6|s[14]>>>26,R=s[25]<<11|s[24]>>>21,O=s[24]<<11|s[25]>>>21,oe=s[34]<<15|s[35]>>>17,ie=s[35]<<15|s[34]>>>17,U=s[45]<<29|s[44]>>>3,V=s[44]<<29|s[45]>>>3,x=s[6]<<28|s[7]>>>4,N=s[7]<<28|s[6]>>>4,fe=s[17]<<23|s[16]>>>9,de=s[16]<<23|s[17]>>>9,G=s[26]<<25|s[27]>>>7,W=s[27]<<25|s[26]>>>7,S=s[36]<<21|s[37]>>>11,C=s[37]<<21|s[36]>>>11,se=s[47]<<24|s[46]>>>8,ae=s[46]<<24|s[47]>>>8,Q=s[8]<<27|s[9]>>>5,Z=s[9]<<27|s[8]>>>5,k=s[18]<<20|s[19]>>>12,I=s[19]<<20|s[18]>>>12,le=s[29]<<7|s[28]>>>25,pe=s[28]<<7|s[29]>>>25,Y=s[38]<<8|s[39]>>>24,K=s[39]<<8|s[38]>>>24,P=s[48]<<14|s[49]>>>18,M=s[49]<<14|s[48]>>>18,s[0]=w^~_&R,s[1]=E^~A&O,s[10]=x^~k&J,s[11]=N^~I&B,s[20]=H^~D&G,s[21]=T^~$&W,s[30]=Q^~ee&te,s[31]=Z^~re&ne,s[40]=ue^~fe&le,s[41]=ce^~de&pe,s[2]=_^~R&S,s[3]=A^~O&C,s[12]=k^~J&F,s[13]=I^~B&z,s[22]=D^~G&Y,s[23]=$^~W&K,s[32]=ee^~te&oe,s[33]=re^~ne&ie,s[42]=fe^~le&he,s[43]=de^~pe&ye,s[4]=R^~S&P,s[5]=O^~C&M,s[14]=J^~F&U,s[15]=B^~z&V,s[24]=G^~Y&X,s[25]=W^~K&L,s[34]=te^~oe&se,s[35]=ne^~ie&ae,s[44]=le^~he&ge,s[45]=pe^~ye&me,s[6]=S^~P&w,s[7]=C^~M&E,s[16]=F^~U&x,s[17]=z^~V&N,s[26]=Y^~X&H,s[27]=K^~L&T,s[36]=oe^~se&Q,s[37]=ie^~ae&Z,s[46]=he^~ge&ue,s[47]=ye^~me&ce,s[8]=P^~w&_,s[9]=M^~E&A,s[18]=U^~x&k,s[19]=V^~N&I,s[28]=X^~H&D,s[29]=L^~T&$,s[38]=se^~Q&ee,s[39]=ae^~Z&re,s[48]=ge^~ue&fe,s[49]=me^~ce&de,s[0]^=j[t],s[1]^=j[t+1]};if(y)e.exports=J;else{for(i=0;i<B.length;++i)l[B[i]]=J[B[i]];m&&(void 0===(c=function(){return J}.call(r,t,r,e))||(e.exports=c))}}()}).call(this,t(31),t(25))},261:function(e,r,t){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,r,t,n){void 0===n&&(n=t),Object.defineProperty(e,n,{enumerable:!0,get:function(){return r[t]}})}:function(e,r,t,n){void 0===n&&(n=t),e[n]=r[t]}),o=this&&this.__exportStar||function(e,r){for(var p in e)"default"===p||Object.prototype.hasOwnProperty.call(r,p)||n(r,e,p)};Object.defineProperty(r,"__esModule",{value:!0}),o(t(1127),r),o(t(1128),r),o(t(1129),r),o(t(533),r),o(t(534),r),o(t(1132),r)},327:function(e,r){var t={}.toString;e.exports=Array.isArray||function(e){return"[object Array]"==t.call(e)}},350:function(e,r,t){"use strict";var n=Function.prototype.toString,o=/^\s*class\b/,c=function(e){try{var r=n.call(e);return o.test(r)}catch(e){return!1}},f=Object.prototype.toString,d="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;e.exports=function(e){if(!e)return!1;if("function"!=typeof e&&"object"!=typeof e)return!1;if("function"==typeof e&&!e.prototype)return!0;if(d)return function(e){try{return!c(e)&&(n.call(e),!0)}catch(e){return!1}}(e);if(c(e))return!1;var r=f.call(e);return"[object Function]"===r||"[object GeneratorFunction]"===r}},359:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.EthereumProviderError=r.EthereumRpcError=void 0;const n=t(535);class o extends Error{constructor(code,e,data){if(!Number.isInteger(code))throw new Error('"code" must be an integer.');if(!e||"string"!=typeof e)throw new Error('"message" must be a nonempty string.');super(e),this.code=code,void 0!==data&&(this.data=data)}serialize(){const e={code:this.code,message:this.message};return void 0!==this.data&&(e.data=this.data),this.stack&&(e.stack=this.stack),e}toString(){return n.default(this.serialize(),c,2)}}r.EthereumRpcError=o;function c(e,r){if("[Circular]"!==r)return r}r.EthereumProviderError=class extends o{constructor(code,e,data){if(!function(code){return Number.isInteger(code)&&code>=1e3&&code<=4999}(code))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');super(code,e,data)}}},360:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.errorValues=r.errorCodes=void 0,r.errorCodes={rpc:{invalidInput:-32e3,resourceNotFound:-32001,resourceUnavailable:-32002,transactionRejected:-32003,methodNotSupported:-32004,limitExceeded:-32005,parse:-32700,invalidRequest:-32600,methodNotFound:-32601,invalidParams:-32602,internal:-32603},provider:{userRejectedRequest:4001,unauthorized:4100,unsupportedMethod:4200,disconnected:4900,chainDisconnected:4901}},r.errorValues={"-32700":{standard:"JSON RPC 2.0",message:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."},"-32600":{standard:"JSON RPC 2.0",message:"The JSON sent is not a valid Request object."},"-32601":{standard:"JSON RPC 2.0",message:"The method does not exist / is not available."},"-32602":{standard:"JSON RPC 2.0",message:"Invalid method parameter(s)."},"-32603":{standard:"JSON RPC 2.0",message:"Internal JSON-RPC error."},"-32000":{standard:"EIP-1474",message:"Invalid input."},"-32001":{standard:"EIP-1474",message:"Resource not found."},"-32002":{standard:"EIP-1474",message:"Resource unavailable."},"-32003":{standard:"EIP-1474",message:"Transaction rejected."},"-32004":{standard:"EIP-1474",message:"Method not supported."},"-32005":{standard:"EIP-1474",message:"Request limit exceeded."},4001:{standard:"EIP-1193",message:"User rejected the request."},4100:{standard:"EIP-1193",message:"The requested account and/or method has not been authorized by the user."},4200:{standard:"EIP-1193",message:"The requested method is not supported by this Ethereum provider."},4900:{standard:"EIP-1193",message:"The provider is disconnected from all chains."},4901:{standard:"EIP-1193",message:"The provider is disconnected from the specified chain."}}},381:function(e,r){e.exports=o,o.strict=c,o.loose=f;var t=Object.prototype.toString,n={"[object Int8Array]":!0,"[object Int16Array]":!0,"[object Int32Array]":!0,"[object Uint8Array]":!0,"[object Uint8ClampedArray]":!0,"[object Uint16Array]":!0,"[object Uint32Array]":!0,"[object Float32Array]":!0,"[object Float64Array]":!0};function o(e){return c(e)||f(e)}function c(e){return e instanceof Int8Array||e instanceof Int16Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Uint16Array||e instanceof Uint32Array||e instanceof Float32Array||e instanceof Float64Array}function f(e){return n[t.call(e)]}},419:function(e,r){e.exports=function(e){if("string"!=typeof e)throw new Error("[is-hex-prefixed] value must be type 'string', is currently type "+typeof e+", while checking isHexPrefixed.");return"0x"===e.slice(0,2)}},531:function(e,r,t){var n="undefined"!=typeof JSON?JSON:t(1117);e.exports=function(e,r){r||(r={}),"function"==typeof r&&(r={cmp:r});var t=r.space||"";"number"==typeof t&&(t=Array(t+1).join(" "));var f,d="boolean"==typeof r.cycles&&r.cycles,l=r.replacer||function(e,r){return r},h=r.cmp&&(f=r.cmp,function(e){return function(a,b){var r={key:a,value:e[a]},t={key:b,value:e[b]};return f(r,t)}}),y=[];return function e(r,f,m,v){var w=t?"\n"+new Array(v+1).join(t):"",E=t?": ":":";if(m&&m.toJSON&&"function"==typeof m.toJSON&&(m=m.toJSON()),void 0!==(m=l.call(r,f,m))){if("object"!=typeof m||null===m)return n.stringify(m);if(o(m)){for(var _=[],i=0;i<m.length;i++){var j=e(m,i,m[i],v+1)||n.stringify(null);_.push(w+t+j)}return"["+_.join(",")+w+"]"}if(-1!==y.indexOf(m)){if(d)return n.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}y.push(m);var A=c(m).sort(h&&h(m));for(_=[],i=0;i<A.length;i++){var R=e(m,f=A[i],m[f],v+1);if(R){var O=n.stringify(f)+E+R;_.push(w+t+O)}}return y.splice(y.indexOf(m),1),"{"+_.join(",")+w+"}"}}({"":e},"",e,0)};var o=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},c=Object.keys||function(e){var r=Object.prototype.hasOwnProperty||function(){return!0},t=[];for(var n in e)r.call(e,n)&&t.push(n);return t}},533:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.getUniqueId=void 0;let n=Math.floor(4294967295*Math.random());r.getUniqueId=function(){return n=(n+1)%4294967295,n}},534:function(e,r,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.JsonRpcEngine=void 0;const o=n(t(170)),c=t(1130);class f extends o.default{constructor(){super(),this._middleware=[]}push(e){this._middleware.push(e)}handle(e,r){if(r&&"function"!=typeof r)throw new Error('"callback" must be a function if provided.');return Array.isArray(e)?r?this._handleBatch(e,r):this._handleBatch(e):r?this._handle(e,r):this._promiseHandle(e)}asMiddleware(){return async(e,r,t,n)=>{try{const[o,c,d]=await f._runAllMiddleware(e,r,this._middleware);return c?(await f._runReturnHandlers(d),n(o)):t(async e=>{try{await f._runReturnHandlers(d)}catch(r){return e(r)}return e()})}catch(e){return n(e)}}}async _handleBatch(e,r){try{const t=await Promise.all(e.map(this._promiseHandle.bind(this)));return r?r(null,t):t}catch(e){if(r)return r(e);throw e}}_promiseHandle(e){return new Promise(r=>{this._handle(e,(e,t)=>{r(t)})})}async _handle(e,r){if(!e||Array.isArray(e)||"object"!=typeof e){const t=new c.EthereumRpcError(c.errorCodes.rpc.invalidRequest,`Requests must be plain objects. Received: ${typeof e}`,{request:e});return r(t,{id:void 0,jsonrpc:"2.0",error:t})}if("string"!=typeof e.method){const t=new c.EthereumRpcError(c.errorCodes.rpc.invalidRequest,`Must specify a string method. Received: ${typeof e.method}`,{request:e});return r(t,{id:e.id,jsonrpc:"2.0",error:t})}const t=Object.assign({},e),n={id:t.id,jsonrpc:t.jsonrpc};let o=null;try{await this._processRequest(t,n)}catch(e){o=e}return o&&(delete n.result,n.error||(n.error=c.serializeError(o))),r(o,n)}async _processRequest(e,r){const[t,n,o]=await f._runAllMiddleware(e,r,this._middleware);if(f._checkForCompletion(e,r,n),await f._runReturnHandlers(o),t)throw t}static async _runAllMiddleware(e,r,t){const n=[];let o=null,c=!1;for(const d of t)if([o,c]=await f._runMiddleware(e,r,d,n),c)break;return[o,c,n.reverse()]}static _runMiddleware(e,r,t,n){return new Promise(o=>{const f=e=>{const t=e||r.error;t&&(r.error=c.serializeError(t)),o([t,!0])},l=t=>{r.error?f(r.error):(t&&("function"!=typeof t&&f(new c.EthereumRpcError(c.errorCodes.rpc.internal,'JsonRpcEngine: "next" return handlers must be functions. '+`Received "${typeof t}" for request:\n${d(e)}`,{request:e})),n.push(t)),o([null,!1]))};try{t(e,r,l,f)}catch(e){f(e)}})}static async _runReturnHandlers(e){for(const r of e)await new Promise((e,t)=>{r(r=>r?t(r):e())})}static _checkForCompletion(e,r,t){if(!("result"in r||"error"in r))throw new c.EthereumRpcError(c.errorCodes.rpc.internal,`JsonRpcEngine: Response has no error or result for request:\n${d(e)}`,{request:e});if(!t)throw new c.EthereumRpcError(c.errorCodes.rpc.internal,`JsonRpcEngine: Nothing ended request:\n${d(e)}`,{request:e})}}function d(e){return JSON.stringify(e,null,2)}r.JsonRpcEngine=f},536:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.serializeError=r.isValidCode=r.getMessageFromCode=r.JSON_RPC_SERVER_ERROR_MESSAGE=void 0;const n=t(360),o=t(359),c=n.errorCodes.rpc.internal,f={code:c,message:d(c)};function d(code,e="Unspecified error message. This is a bug, please report it."){if(Number.isInteger(code)){const e=code.toString();if(m(n.errorValues,e))return n.errorValues[e].message;if(h(code))return r.JSON_RPC_SERVER_ERROR_MESSAGE}return e}function l(code){if(!Number.isInteger(code))return!1;const e=code.toString();return!!n.errorValues[e]||!!h(code)}function h(code){return code>=-32099&&code<=-32e3}function y(e){return e&&"object"==typeof e&&!Array.isArray(e)?Object.assign({},e):e}function m(e,r){return Object.prototype.hasOwnProperty.call(e,r)}r.JSON_RPC_SERVER_ERROR_MESSAGE="Unspecified server error.",r.getMessageFromCode=d,r.isValidCode=l,r.serializeError=function(e,{fallbackError:r=f,shouldIncludeStack:t=!1}={}){var n,c;if(!r||!Number.isInteger(r.code)||"string"!=typeof r.message)throw new Error("Must provide fallback error with integer number code and string message.");if(e instanceof o.EthereumRpcError)return e.serialize();const h={};if(e&&"object"==typeof e&&!Array.isArray(e)&&m(e,"code")&&l(e.code)){const r=e;h.code=r.code,r.message&&"string"==typeof r.message?(h.message=r.message,m(r,"data")&&(h.data=r.data)):(h.message=d(h.code),h.data={originalError:y(e)})}else{h.code=r.code;const t=null===(n=e)||void 0===n?void 0:n.message;h.message=t&&"string"==typeof t?t:r.message,h.data={originalError:y(e)}}const v=null===(c=e)||void 0===c?void 0:c.stack;return t&&e&&v&&"string"==typeof v&&(h.stack=v),h}}}]);