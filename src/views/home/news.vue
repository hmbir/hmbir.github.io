<template>
    <div class="blog">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="世界" name="second">
                <div v-for="(item, key) in data.worlddata" :key="key">
                    {{ key + 1 }}、{{ item }}
                </div>
            </el-tab-pane>
            <el-tab-pane label="微博热搜" name="first">
                <div v-for="(item, key) in data.weibodata" :key="item.title">
                    {{ key + 1 }}、<a :href="item.url">{{ item.title }}</a>
                </div>
            </el-tab-pane>

            <el-tab-pane label="知乎" name="zhihu">
                <div v-for="(item, key) in data.zh" :key="item.title">
                    {{ key + 1 }}、<a :href="item.url">{{ item.title }}</a>
                </div>
            </el-tab-pane>
            <el-tab-pane label="360" name="threesixzero">
                <div v-for="(item, key) in data.threesixzero" :key="item.title">
                    {{ key + 1 }}、<a :href="item.url">{{ item.title }}</a>
                </div>
            </el-tab-pane>
            <el-tab-pane label="抖音" name="dy">
                <div v-for="(item, key) in data.dy" :key="item.title">
                    {{ key + 1 }}、<a :href="item.url">{{ item.title }}</a>
                </div>
            </el-tab-pane>
            <el-tab-pane label="哔哩哔哩" name="bili">
                <div v-for="(item, key) in data.bili" :key="item.title">
                    {{ key + 1 }}、<a :href="item.url">{{ item.title }}</a>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    name: "blog",
    data() {
        return {
            activeName: "second",
            data: {
                worlddata: [],
                weibodata: [],
                zh: [],
                dy: [],
                threesixzero: [],
                bili: [],
            },
        };
    },
    components: {},
    methods: {
        handleClick(tab, event) {
            switch (tab.name) {
                case "first":
                    // 韩小韩 微博热搜实时API接口
                    this.$axios({
                        method: "get",
                        url: "https://api.vvhan.com/api/wbhot",
                    }).then((res) => {
                        this.data.weibodata = res.data.data;
                    });
                    break;
                case "second":
                    // 韩小韩 60s
                    this.$axios("https://api.vvhan.com/api/60s?type=json").then(
                        (res) => {
                            this.data.worlddata = res.data.data;
                        }
                    );
                    break;
                case "zhihu":
                    // 故梦 - 知乎热搜排行榜
                    // https://api.gumengya.com/Docs/#/Doc/MD/Api/ZhiHuHot
                    this.$axios({
                        method: "get",
                        url: "https://api.gumengya.com/Api/ZhiHuHot?format=json",
                    }).then((res) => {
                        this.data.zh = res.data.data;
                    });
                    break;
                case "dy":
                    // 故梦 - 抖音热搜排行榜
                    this.$axios({
                        method: "get",
                        url: "https://api.gumengya.com/Api/DouYinHot?format=json",
                    }).then((res) => {
                        this.data.dy = res.data.data;
                    });
                    break;
                case "threesixzero":
                    // 故梦 - 360
                    this.$axios({
                        method: "get",
                        url: "https://api.gumengya.com/Api/SoHot?format=json",
                    }).then((res) => {
                        console.log(res.data);
                        this.data.threesixzero = res.data.data;
                    });
                    break;
                case "bili":
                    // 故梦 - bili
                    this.$axios({
                        method: "get",
                        url: "https://api.gumengya.com/Api/BiliBliHot?format=json",
                    }).then((res) => {
                        this.data.bili = res.data.data;
                    });
                    break;
            }
        },
    },
    mounted() {
        // 韩小韩 60s
        this.$axios("https://api.vvhan.com/api/60s?type=json").then((res) => {
            this.data.worlddata = res.data.data;
        });
    },
};
</script>
<style lang="less" scoped>
.blog {
    width: 100%;
    height: 100%;
    .catimg {
        height: 150px;
        display: block;
    }
    div {
        a {
            color: #000;
            text-decoration: none;
        }
        a:hover {
            color: orange;
        }
    }
}
</style>