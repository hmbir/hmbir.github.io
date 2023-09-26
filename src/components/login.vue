<template>
    <div class="login">
        <el-input type="password" v-model="pwd" @keyup.enter.native="btnClick()" />
        <el-button @click="btnClick">登录</el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pwd: "",
        };
    },
    created() {},
    mounted() {
    },
    methods: {
        btnClick() {
            if (this.pwd == "") {
                this.$message.info("请输入密码");
            } else if (this.pwd == "11") {
                sessionStorage.setItem("token", "11");
                this.$message.success("登录成功");
                this.$router.push({ path: "/index" });
            } else if (this.pwd == "aa") {
                sessionStorage.setItem("token", "aa");
                this.$message.success("欢迎");
                this.$router.push({ path: "/index" });
            } else if (this.pwd == "sys") {
                localStorage.setItem("tokens", "yes");
                this.$message.success("欢迎您");
                this.$router.push({ path: "/index" });
            } else {
                this.$message.error("密码错误");
            }
        },
    },
};
</script>
<style lang="less" scoped>
.login {
    .el-input {
        width: 130px !important;
    }
}
</style>