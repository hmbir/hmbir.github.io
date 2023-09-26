<template>
    <div class="EchartPractice">
        <div id="bar"></div>
    </div>
</template>

<script>
export default {
    name: "EchartPractice",
    data() {
        return {
            bardata: [14000, 20000, 10000, 10000, 8000],
            barname: ["杭州", "宁波", "嘉兴", "湖州", "绍兴"],
        };
    },
    // props: ["bardata", "barname"],

    methods: {
        resetEcharts() {
            let myChart = this.$echarts.init(document.getElementById("bar"));
            if (myChart != null && myChart != "" && myChart != undefined) {
                myChart.dispose(); //销毁
            }
        },
        drawChart() {
            let myEchart = this.$echarts.init(document.getElementById("bar"));
            let option = {
                title: {
                    text: "Vue中使用Echarts小练习",
                },
                tooltip: {},
                legend: {
                    data: ["销量"],
                },
                xAxis: {
                    data: this.barname,
                },
                yAxis: {},
                series: [
                    {
                        name: "销量",
                        type: "bar",
                        data: this.bardata,
                    },
                ],
            };
            myEchart.setOption(option, true);
        },
    },
    mounted() {
        this.drawChart();
    },
};
</script>

<style scoped>
#bar {
    max-width: 600px;
    height: 400px;
}
</style>