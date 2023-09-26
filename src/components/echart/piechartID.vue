<template>
    <div class="Echarts">
        <div id="piechart"></div>
        <!-- 当页面需要引用一个子组件时使用 -->
    </div>
</template>

<script>
export default {
    name: "Echarts",
    data() {
        return {
            // piedata: [
            //     { value: 1048, name: "Search Engine22" },
            //     { value: 735, name: "Direct" },
            //     { value: 580, name: "Email" },
            //     { value: 484, name: "Union Ads" },
            //     { value: 300, name: "Video Ads" },
            // ],
        };
    },
    props: ["piedata1"],
    methods: {
        myEcharts() {
            let myChart = this.$echarts.init(
                document.getElementById("piechart")
            );
            //配置图表
            let option = {
                title: {
                    text: this.piedata1.text,
                    subtext: this.piedata1.subtext,
                    left: "center",
                },
                // title: {
                //     text: "Referer of a Website",
                //     subtext: "Fake Data",
                //     left: "center",
                // },
                tooltip: {
                    trigger: "item",
                    formatter: "{b} <br/>{a} : {c} ({d}%)",
                },
                legend: {
                    orient: "vertical",
                    left: "left",
                },
                series: [
                    {
                        name: this.piedata1.name,
                        // name: "Access From",
                        type: "pie",
                        radius: "50%",
                        data: this.piedata1.datas,
                        label: {
                            fontSize: 15,
                            fontWeight: "normal",
                            formatter: "{b} {d}%",
                            // formatter: "{b}:{c}: ({d}%)",
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)",
                            },
                        },
                    },
                ],
            };
            myChart.setOption(option, true);
        },
    },
    mounted() {
        // this.myEcharts();
    },
};
</script>

<style scoped>
#piechart {
    max-width: 600px;
    height: 400px;
    border: 1px solid pink;
}
</style>