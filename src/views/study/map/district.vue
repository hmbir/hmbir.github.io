<template>
    <div class="EchartPractice">
        <div id="main"></div>
    </div>
</template>

<script>
export default {
    name: "EchartPractice",
    data() {
        return {};
    },
    methods: {
        drawChart() {
            var myChart = this.$echarts.init(document.getElementById("main"));
            this.$echarts.registerMap("district", this.commonJson);
            var option = {
                series: [
                    {
                        map: "district",
                        type: "map",
                        aspectScale: 1.0,
                        selectedMode: "single", //选择类型,
                        hoverable: false, //鼠标经过高亮
                        roam: true, //鼠标滚轮缩放
                        itemStyle: {
                            borderWidth: 1,
                            borderColor: "#ffffff", //区域边框色
                            areaColor: "#FFDAB9", //区域背景色
                        },
                        label: {
                            show: true,
                            color: "#6495ED", //文字颜色
                            fontSize: 18, //文字大小
                        },
                        emphasis: {
                            // 选中样式
                            borderWidth: 1,
                            borderColor: "#00ffff",
                            color: "#ffffff",
                            label: {
                                show: true,
                                color: "#ff0000",
                            },
                        },
                    },
                ],
            };
            myChart.setOption(option);
        },
    },
    mounted() {
        this.$axios
            .get(
                "https://geo.datav.aliyun.com/areas_v3/bound/" +
                    this.$route.query.id +
                    ".json"
            )
            .then((res) => {
                this.commonJson = res.data;

                this.$nextTick(() => {
                    this.drawChart();
                });
            });
    },
};
</script>

<style scoped>
#main {
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    margin: auto;
}
</style>