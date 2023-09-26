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
            // bardata: {
            //     datas: [14000, 20000, 10000, 10000, 8000],
            //     week: ["杭州", "宁波", "嘉兴", "湖州", "绍兴"],
            // },
        };
    },
    props: ["bardata"],

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
                    text: this.bardata.text,
                    // text: "Vue中使用Echarts小练习",
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{b} <br/> {a} : {c}个",
                },
                legend: {
                    data: ["销量"],
                },
                xAxis: {
                    data: this.bardata.week,
                },
                yAxis: {},
                series: [
                    {
                        name: this.bardata.name,
                        // name: "销量测试",
                        type: "bar",
                        data: this.bardata.datas,
                        label: {
                            show: true,
                            position: "top",
                        },
                        itemStyle: {
                            color: function (params) {
                                var colorList = [
                                    "#f8d6ff",
                                    "#2eddc1",
                                    "#FCCE10",
                                    "#E87C25",
                                    "#4fb8fe",
                                    "#5295bc",
                                    "#277bbb",
                                ];
                                //若返回的list长度不足，不足部分自动显示为最后一个颜色
                                return colorList[params.dataIndex];
                            },
                        },
                    },
                ],
            };
            myEchart.setOption(option, true);
        },
    },
    mounted() {
        // this.drawChart();
    },
};
</script>

<style scoped>
#bar {
    max-width: 600px;
    height: 400px;
}
</style>