<template>
    <div class="Echarts">
        <div id="piechart"></div>
    </div>
</template>

<script>
export default {
    name: "Echarts",
    data() {
        return {
            piedata: [
                { value: 1048, name: "Search Engine22" },
                { value: 735, name: "Direct" },
                { value: 580, name: "Email" },
                { value: 484, name: "Union Ads" },
                { value: 300, name: "Video Ads" },
            ],
        };
    },
    // props: ["piedata"],
    methods: {
        resetEcharts() {
            let myChart = this.$echarts.init(document.getElementById("piechart"));
            if (myChart != null && myChart != "" && myChart != undefined) {
                myChart.dispose(); //销毁
            }
        },
        myEcharts() {
            var myChart = this.$echarts.init(document.getElementById("piechart"));

            //配置图表
            var option = {
                title: {
                    text: "Referer of a Website",
                    subtext: "Fake Data",
                    left: "center",
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c} ({d}%)",
                },
                legend: {
                    orient: "vertical",
                    left: "left",
                },
                series: [
                    {
                        name: "Access From",
                        type: "pie",
                        radius: "50%",
                        data: this.piedata,
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
        this.myEcharts();
    },
};
</script>

<style scoped>
#piechart {
    max-width: 600px;
    height: 400px;
}
</style>