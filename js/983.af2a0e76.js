"use strict";(self["webpackChunkir"]=self["webpackChunkir"]||[]).push([[983],{7983:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login"},[t("el-input",{attrs:{type:"text"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.btnClick()}},model:{value:e.pwd,callback:function(t){e.pwd=t},expression:"pwd"}}),t("el-button",{on:{click:e.btnClick}},[e._v("登录")])],1)},i=[],r=(n(7658),{data(){return{pwd:""}},created(){},methods:{btnClick(){sessionStorage.setItem("token","yes"),"11"==this.pwd?(this.$message.success("登录成功"),this.$router.push({path:"/index"})):this.$message.error("密码错误")}}}),u=r,l=n(1001),a=(0,l.Z)(u,s,i,!1,null,"78a52d31",null),c=a.exports}}]);
//# sourceMappingURL=983.af2a0e76.js.map