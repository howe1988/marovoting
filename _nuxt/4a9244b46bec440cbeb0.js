(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1279:function(t,e,o){"use strict";o.r(e);o(80),o(59),o(45),o(43),o(60),o(61);var r=o(3),n=o(4),c=o(30),d=o(1274);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var v,h,f,_={name:"Vote",computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)("metamask",["ethAccount"]),{},Object(c.c)("vote",["proposeEndTime","proposeStartTime","voteEndTime","addressUrl","txUrl","voteStatus","voteTxHash"])),components:{NewOrEditPropose:d.a},data:function(){return{proposalId:0,propose:null,votes:null,buttonLoading:!1,disabled:!1}},watch:{voteStatus:function(t){1==t&&(this.buttonLoading=!1,this.getVotes(),this.$buefy.snackbar.open({message:"Voted",actionText:"OK",position:"is-bottom-right",container:"root-container",indefinite:!1,onAction:function(){}})),-2==t&&(this.buttonLoading=!1,this.$buefy.snackbar.open({message:"Vote failed",actionText:"OK",position:"is-bottom-right",container:"root-container",indefinite:!1,onAction:function(){}}))}},mounted:function(){var t=this.$route.params.id;this.proposalId=t,console.info("vote id",t),this.getPropose(),this.getVotes()},methods:{back:function(){},editPropose:function(){window.maroVoteModal=this.$buefy.modal.open({parent:this,component:d.a,props:{old:this.propose.content,isEdit:!0,proposeId:this.propose.id}})},deletePropose:function(){},votePropose:(f=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.buttonLoading=!0,t.prev=1,t.next=4,this.$store.dispatch("vote/votePropose",{proposeId:this.proposalId});case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),this.buttonLoading=!1;case 9:case"end":return t.stop()}}),t,this,[[1,6]])}))),function(){return f.apply(this,arguments)}),isOwner:function(){return!(!this.ethAccount||!this.propose)&&this.ethAccount.toLowerCase()==this.propose.proposer.toLowerCase()},getPropose:(h=Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("vote/getPropose",{proposeId:this.proposalId});case 2:e=t.sent,this.propose=e;case 4:case"end":return t.stop()}}),t,this)}))),function(){return h.apply(this,arguments)}),getVotes:(v=Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("vote/displayRecs",{proposeId:this.proposalId});case 2:e=t.sent,this.votes=e;case 4:case"end":return t.stop()}}),t,this)}))),function(){return v.apply(this,arguments)})}},m=o(48),component=Object(m.a)(_,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"card-container"},[o("div",{staticClass:"content-container"},[o("nuxt-link",{attrs:{to:"/"}},[o("p",{staticClass:"header-close-btn has-text-white",on:{click:t.back}},[o("b-icon",{attrs:{icon:"arrow-left"}})],1)]),t._v(" "),t.propose?o("div",[o("div",{staticClass:"c-flex"},[o("p",{staticClass:"c-title-1 has-text-white margin-v"},[t._v("Proposal#"+t._s(t.propose.id)),o("span",{staticClass:"propser"},[o("span",{staticClass:"created"},[t._v("Created by")]),t._v(" "),o("a",{staticClass:"has-text-gray link",attrs:{target:"_blank",href:""+t.addressUrl+t.propose.proposer}},[t._v("\n          "+t._s(t.propose.proposer)+"\n        ")])])]),t._v(" "),o("div",{staticClass:"right"},[o("b-button",{staticClass:"c-button-blue",attrs:{loading:t.buttonLoading},on:{click:t.votePropose}},[t._v("Vote")]),t._v(" "),t.isOwner()?o("b-dropdown",{staticClass:"c-dropdown",attrs:{"aria-role":"list",hoverable:"",position:"is-bottom-left"}},[o("p",{staticClass:"has-text-white propose-more-button",attrs:{slot:"trigger"},slot:"trigger"},[o("b-icon",{attrs:{icon:"dots-horizontal"}})],1),t._v(" "),o("b-dropdown-item",{attrs:{"aria-role":"listitem"},on:{click:function(e){return t.editPropose()}}},[t._v("\n            Update Propoal\n           ")])],1):t._e()],1)]),t._v(" "),o("p",{staticClass:"c-title-2 has-text-white"},[t._v(" "+t._s(t.propose.content))]),t._v(" "),o("p",{staticClass:"has-text-white margin-v"},[t._v("Voting wil be ended "+t._s(t._f("dateFormat")(1e3*t.voteEndTime,"YYYY/mm/dd")))]),t._v(" "),t.propose?o("div",{staticClass:"c-banner vote"},[o("div",{staticClass:"c-flex padding-v padding-h"},[o("div",{staticClass:"c-title-3"},[t._v("\n              Locked Amount\n            ")]),t._v(" "),o("div",{staticClass:"right"},[t._v("\n              "+t._s(t.propose.depositH)+" MARO\n            ")])]),t._v(" "),o("div",{staticClass:"c-flex padding-v topless padding-h"},[o("div",{staticClass:"c-title-3"},[t._v("\n              Total Votes\n            ")]),t._v(" "),o("div",{staticClass:"right"},[t._v("\n              "+t._s(t.propose.voteCountH)+" MARO\n            ")])])]):t._e(),t._v(" "),t.votes?o("div",{staticClass:"margin-v"},[o("p",{staticClass:"has-text-white c-title-2"},[t._v("Votes")]),t._v(" "),t._l(t.votes,(function(e,r){return o("div",{staticClass:"c-flex has-text-white"},[o("div",[o("a",{staticClass:"has-text-gray",attrs:{target:"_blank",href:""+t.addressUrl+e.address}},[t._v("\n              "+t._s(e.address)+"\n            ")])]),t._v(" "),o("div",{staticClass:"right"},[t._v("\n              "+t._s(e.votesH)+" MARO\n            ")])])}))],2):t._e(),t._v(" "),t.votes&&0==t.votes.length?o("div",{staticClass:"empty"},[t._v("\n          There are no votes yet.\n        ")]):t._e()]):t._e(),t._v(" "),o("br")],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);