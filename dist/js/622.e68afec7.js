"use strict";(self["webpackChunkir"]=self["webpackChunkir"]||[]).push([[622],{622:function(t,e,a){a.r(e),a.d(e,{default:function(){return u}});var r=function(){var t=this;t._self._c;return t._m(0)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"EchartPractice"},[e("div",{attrs:{id:"bar"}})])}],s={name:"EchartPractice",data(){return{bardata:[14e3,2e4,1e4,1e4,8e3],barname:["杭州","宁波","嘉兴","湖州","绍兴"]}},methods:{resetEcharts(){let t=this.$echarts.init(document.getElementById("bar"));null!=t&&""!=t&&void 0!=t&&t.dispose()},drawChart(){let t=this.$echarts.init(document.getElementById("bar")),e={title:{text:"Vue中使用Echarts小练习"},tooltip:{},legend:{data:["销量"]},xAxis:{data:this.barname},yAxis:{},series:[{name:"销量",type:"bar",data:this.bardata}]};t.setOption(e,!0)}},mounted(){this.drawChart()}},n=s,d=a(1001),c=(0,d.Z)(n,r,i,!1,null,"3d114bf4",null),u=c.exports}}]);
//# sourceMappingURL=622.e68afec7.js.map