<template>
    <div id="app">
        <router-view></router-view>
        <!-- <live2d v-if="isshow"></live2d> -->
    </div>
</template>

<script>
// import live2d from "vue-live2d";
export default {
    name: "App",
    components: {
        // live2d,
    },
    data() {
        return {
            // isshow: false,
        };
    },
    mounted() {},
    watch: {
        // "$route.path": {
        //     handler(to, from) {
        //         if (to == "/login") {
        //             this.isshow = false;
        //         } else {
        //             if (sessionStorage.getItem("token") !== "11") {
        //                 setTimeout(() => {
        //                     this.isshow = true;
        //                 }, 500);
        //             }
        //         }
        //     },
        //     deep: true,
        // },
    },
};
</script>

<style lang="less" scoped>
* {
    margin: 0;
    padding: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    .vue-live2d {
        position: fixed;
        left: 0;
        bottom: 0;
    }
}
</style>
