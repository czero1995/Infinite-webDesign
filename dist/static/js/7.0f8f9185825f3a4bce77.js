webpackJsonp([7],{sVag:function(t,e){},wC2p:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("3nlj"),s=a("Hj6f"),n=a("NYxO"),r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},o={data:function(){return{dataList:[],mainarea:!1,slidename:"slide-up"}},components:{Headersec:i.a,Nopage:s.a},computed:r({},Object(n.mapGetters)(["this.$store.state.searchid"])),mounted:function(){},activated:function(){this.getData(),this.setSearchid(this.$route.query.text),this.mainarea=!0},deactivated:function(){this.mainarea=!1},methods:r({getData:function(){var t=this;console.log("this.$route.params.text",this.$route.query.text),this.$http.post(this.$baseURL+"recommend/search",{text:this.$route.query.text}).then(function(e){t.dataList=e.data.data}).catch(function(t){console.log(t)})},toDetail:function(t){this.$router.push({path:"/detail",query:{id:t}})}},Object(n.mapMutations)({setSearchid:"SET_SEARCHID"}))},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("headersec",{attrs:{tabname:"搜索详情"}}),t._v(" "),a("transition",{directives:[{name:"show",rawName:"v-show",value:t.mainarea,expression:"mainarea"}],attrs:{name:t.slidename}},[a("div",{staticClass:"container"},[0!=t.dataList.length?a("div",{staticClass:"list_box"},t._l(t.dataList,function(e,i){return a("div",{key:i,staticClass:"list_item flex",on:{click:function(a){t.toDetail(e._id)}}},[a("div",{staticClass:"item_title"},[t._v(t._s(e.title))]),t._v(" "),a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.post,expression:"item.post"}],staticClass:"item_post"})])})):a("Nopage")],1)])],1)},staticRenderFns:[]},u=a("VU/8")(o,c,!1,function(t){a("sVag")},"data-v-4742778c",null);e.default=u.exports}});