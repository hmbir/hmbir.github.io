<template>
    <div class="blog">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="随机一言" name="day">
                {{ data.daymsg }}
            </el-tab-pane>
            <el-tab-pane label="猫" name="cat">
                <img :src="data.catsrc" class="catimg" alt="" />
            </el-tab-pane>
            <el-tab-pane label="彩虹" name="fourth"> 定时任务补偿 </el-tab-pane>
            <el-tab-pane label="英语" name="dayeng"> english </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    name: "blog",
    data() {
        return {
            activeName: "day",
            data: {
                catsrc: "",
                daymsg: "",
            },
        };
    },
    components: {},
    methods: {
        handleClick(tab, event) {
            switch (tab.name) {
                case "cat":
                    this.$axios({
                        method: "get",
                        url: "https://api.thecatapi.com/v1/images/search?limit=1",
                    }).then((res) => {
                        this.data.catsrc = res.data[0].url;
                    });
                    break;
                case "fourth":
                    // 大米API - 彩虹屁
                    this.$axios({
                        method: "get",
                        url: "https://api.qqsuu.cn/api/dm-caihongpi",
                    }).then((res) => {
                        console.log(res.data.data.content);
                    });
                    break;
                case "day":
                    // 松鼠-随机一言
                    this.$axios({
                        method: "get",
                        url: "https://api.szfx.top/yiyan/?code=json",
                    }).then((res) => {
                        this.data.daymsg = res.data.msg;
                    });
                    break;
                case "dayeng":
                    // 大米API - 每日英语
                    this.$axios({
                        method: "get",
                        url: "https://api.qqsuu.cn/api/dm-everyday",
                    }).then((res) => {
                        console.log(res.data.data.content);
                        console.log(res.data.data.note);
                    });
                    break;
            }
        },
    },
    mounted() {
        this.$axios({
            method: "get",
            url: "https://api.szfx.top/yiyan/?code=json",
        }).then((res) => {
            this.data.daymsg = res.data.msg;
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