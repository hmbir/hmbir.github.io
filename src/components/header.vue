<template>
    <div class="header">
        <a href="https://imglan.com/">{{ msg }}</a>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    props: ["msg"],
    methods: {},
    created() {},
    mounted() {},
};
</script>
<style lang="less" scoped>
.header {
    padding: 25px 0 25px 100px;
    border-bottom: 1px solid #eeeeee;
    a {
        text-decoration: none;
        color: #000;
    }
}
</style>