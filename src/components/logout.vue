<template>
    <div class="logout">
        <el-button>
            <span @click="logout">退出&nbsp;</span>
            /
            <span @click="toreturn">&nbsp;返回</span>
        </el-button>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    props: ["msg"],
    methods: {
        logout() {
            sessionStorage.removeItem("token");
            localStorage.removeItem("tokens");
            this.$router.push({ path: "/" });
        },
        toreturn() {
            this.$router.push({ path: "/index" });
        },
    },
    created() {},
    mounted() {},
};
</script>
<style lang="less" scoped>
.logout {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
</style>