"use strict";(self["webpackChunkir"]=self["webpackChunkir"]||[]).push([[715],{1715:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var a=function(){var t=this;t._self._c;return t._m(0)},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"EchartPractice"},[e("div",{attrs:{id:"main"}})])}],i={name:"EchartPractice",data(){return{}},methods:{drawChart(){var t=this.$echarts.init(document.getElementById("main"));this.$echarts.registerMap("zhejiang",this.commonJson);var e={series:[{map:"zhejiang",type:"map",aspectScale:1,selectedMode:"single",hoverable:!1,roam:!0,itemStyle:{normal:{borderWidth:1,borderColor:"#ffffff",areaColor:"#FFDAB9",label:{show:!0,textStyle:{color:"#6495ED",fontSize:18}}},emphasis:{borderWidth:1,borderColor:"#00ffff",color:"#ffffff",label:{show:!0,textStyle:{color:"#ff0000"}}}}}]};t.setOption(e)}},mounted(){this.$axios.get("https://geo.datav.aliyun.com/areas/bound/"+this.$route.query.id+"_full.json").then((t=>{this.commonJson=t.data,this.$nextTick((()=>{this.drawChart()}))}))}},s=i,n=r(1001),l=(0,n.Z)(s,a,o,!1,null,"d1dee4ba",null),h=l.exports}}]);
//# sourceMappingURL=715.c783d952.js.map