"use strict";(self["webpackChunkir"]=self["webpackChunkir"]||[]).push([[752],{752:function(t,i,s){s.r(i),s.d(i,{default:function(){return l}});var a=function(){var t=this,i=t._self._c;return i("div",{staticClass:"blog"},[i("div",{staticClass:"header"},[i("div",{class:{active:t.isworld},on:{click:function(i){return t.topath("world")}}},[t._v(" 世界 ")]),i("div",{class:{active:t.iswb},on:{click:function(i){return t.topath("wb")}}},[t._v("微博热搜")]),i("div",{class:{active:t.iszh},on:{click:function(i){return t.topath("zhihu")}}},[t._v("知乎")]),i("div",{class:{active:t.isthree},on:{click:function(i){return t.topath("three")}}},[t._v("360")]),i("div",{class:{active:t.isdy},on:{click:function(i){return t.topath("dy")}}},[t._v("抖音")]),i("div",{class:{active:t.isbl},on:{click:function(i){return t.topath("bl")}}},[t._v("哔哩哔哩")])]),t._l(t.data,(function(s,a){return i("div",{directives:[{name:"show",rawName:"v-show",value:t.isurl,expression:"isurl"}],key:s.title},[t._v(" "+t._s(a+1)+"、"),i("a",{attrs:{href:s.url}},[t._v(t._s(s.title))])])})),t._l(t.data2,(function(s,a){return i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isurl,expression:"!isurl"}],key:a},[t._v(" "+t._s(a+1)+"、"+t._s(s)+" ")])}))],2)},h=[],e={name:"blog",data(){return{data:[],data2:[],isurl:!1,isworld:!0,iswb:!1,iszh:!1,isthree:!1,isdy:!1,isbl:!1}},components:{},methods:{topath(t){switch(t){case"world":this.$axios("https://api.vvhan.com/api/60s?type=json").then((t=>{this.data2=t.data.data,this.isurl=!1,this.isworld=!0,this.iswb=this.iszh=this.isthree=this.isdy=this.isbl=!1}));break;case"wb":this.$axios({method:"get",url:"https://api.vvhan.com/api/wbhot"}).then((t=>{this.data=t.data.data,this.isurl=!0,this.iswb=!0,this.isworld=this.iszh=this.isthree=this.isdy=this.isbl=!1}));break;case"zhihu":this.$axios({method:"get",url:"https://api.gumengya.com/Api/ZhiHuHot?format=json"}).then((t=>{this.isurl=!0,this.data=t.data.data,this.iszh=!0,this.isworld=this.iswb=this.isthree=this.isdy=this.isbl=!1}));break;case"dy":this.$axios({method:"get",url:"https://api.gumengya.com/Api/DouYinHot?format=json"}).then((t=>{this.isurl=!0,this.data=t.data.data,this.isdy=!0,this.iswb=this.isworld=this.iszh=this.isthree=this.isbl=!1}));break;case"three":this.$axios({method:"get",url:"https://api.gumengya.com/Api/SoHot?format=json"}).then((t=>{this.isurl=!0,this.data=t.data.data,this.isthree=!0,this.isworld=this.iswb=this.iszh=this.isdy=this.isbl=!1}));break;case"bl":this.$axios({method:"get",url:"https://api.gumengya.com/Api/BiliBliHot?format=json"}).then((t=>{this.isurl=!0,this.data=t.data.data,this.isbl=!0,this.isworld=this.iswb=this.iszh=this.isthree=this.isdy=!1}));break}}},mounted(){this.$axios("https://api.vvhan.com/api/60s?type=json").then((t=>{this.data2=t.data.data}))}},r=e,o=s(1001),n=(0,o.Z)(r,a,h,!1,null,"4eac2a86",null),l=n.exports}}]);
//# sourceMappingURL=752.0ad679ad.js.map