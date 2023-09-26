<template>
    <div class="index">
        <logout></logout>

        <div class="content">
            <router-link to="/home/index">主页</router-link>
            <router-link to="/home/news">新闻</router-link>
            <router-link to="/home/blog">测试</router-link>
            <router-link to="/home/blog">新增26</router-link>
        </div>

        <router-view />

        <!-- <live2d v-show="is2d"></live2d> -->
    </div>
</template>

<script>
// import live2d from "vue-live2d";
import logout from "@/components/logout.vue";
export default {
    name: "index",
    props: {
        msg: String,
    },
    components: {
        logout,
        // live2d,
    },
    data() {
        return {
            timer: "",
            is2d: true,
        };
    },
    methods: {},
    mounted() {
        // if (sessionStorage.getItem("token") == "11") {
        //     this.is2d = false;
        // }
    },
};
</script>

<style lang="less" scoped>
* {
    padding: 0;
    margin: 0;
}
.index {
    .content {
        margin: 5px auto 10px;
        max-width: 300px;
        padding: 30px 0;
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid #eee;
        a {
            text-decoration: none;
            color: #000;
            cursor: pointer;
        }
        a:hover {
            color: pink;
        }
    }
    .vue-live2d {
        position: fixed;
        left: 0;
        bottom: 0;
    }
}
</style>
