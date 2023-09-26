<template>
    <div class="index">
        <div class="header"></div>
        <div class="content">
            <router-link to="home/index">建站</router-link>
            <router-link to="study">技术</router-link>
            <router-link to="life">生活</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "index",
    props: {
        msg: String,
    },
    components: {},
    data() {
        return {};
    },
    methods: {},
    mounted() {},
};
</script>

<style lang="less" scoped>
* {
    padding: 0;
    margin: 0;
}
.index {
    .content {
        max-width: 300px;
        margin: 150px auto 0;
        display: flex;
        justify-content: space-around;
        a {
            text-decoration: none;
            color: #000;
        }
        a:hover {
            color: pink;
        }
    }
}
</style>
