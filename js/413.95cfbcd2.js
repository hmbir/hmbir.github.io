"use strict";(self["webpackChunkir"]=self["webpackChunkir"]||[]).push([[413],{2413:function(t,e,a){a.r(e),a.d(e,{default:function(){return h}});var r=function(){var t=this;t._self._c;return t._m(0)},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"EchartPractice"},[e("div",{attrs:{id:"main"}})])}],i=(a(7658),{name:"EchartPractice",data(){return{data:[]}},methods:{drawChart(){let t=this;var e=this.$echarts.init(document.getElementById("main"));this.$echarts.registerMap("province",this.commonJson);var a={series:[{map:"province",type:"map",aspectScale:1,selectedMode:"single",hoverable:!1,roam:!0,itemStyle:{normal:{borderWidth:1,borderColor:"#ffffff",areaColor:"#FFDAB9",label:{show:!0,textStyle:{color:"#6495ED",fontSize:18}}},emphasis:{borderWidth:1,borderColor:"#00ffff",color:"#ffffff",label:{show:!0,textStyle:{color:"#ff0000"}}}}}]};e.setOption(a),e.on("click",(function(e){t.data.forEach((a=>{a.name==e.name&&t.$router.push({path:"/city",query:{id:a.id}})}))}))}},mounted(){this.$axios.get("https://geo.datav.aliyun.com/areas/bound/"+this.$route.query.id+"_full.json").then((t=>{this.commonJson=t.data,t.data.features.forEach((t=>{this.data.push({name:t.properties.name,id:t.properties.adcode})})),this.$nextTick((()=>{this.drawChart()}))}))}}),s=i,n=a(1001),c=(0,n.Z)(s,r,o,!1,null,"959c75fa",null),h=c.exports}}]);
//# sourceMappingURL=413.95cfbcd2.js.map