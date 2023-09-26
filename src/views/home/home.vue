<template>
    <div class="home">
        <div class="content">
            <a href="https://www.sulvblog.cn/">Sulv's Blog </a>

            <p>
                个人博客选择 WordPress 还是 Typecho 好？
                <a
                    href="https://www.zhihu.com/question/29771102/answer/212218184"
                >
                    知乎用户的回答
                </a>
            </p>
            <br />
        </div>
    </div>
</template>
<script>
export default {
    name: "Home",
    components: {},
    data() {
        return {
            msg: "建站",
        };
    },
    created() {},
    methods: {},
};
</script>

<style lang="less" scoped>
.home {
    .content {
        width: 80%;
        margin: 0 auto;
        a {
            text-decoration: none;
            color: orange;
        }
    }
}
</style>