<template>
    <div class="index">
        <div class="header"></div>
        <div class="content">
            <router-link to="bar">条形</router-link>
            <router-link to="pie">扇形</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "index",
    props: {
        msg: String,
    },
    data() {
        return {};
    },
    methods: {},
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
