<template>
    <div class="Echarts">
        <div class="echart" ref="pie1"></div>
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
    props: ["piedata"],
    methods: {
        myEcharts() {
            let myChart = this.$echarts.init(this.$refs.pie1);

            //配置图表
            let option = {
                title: {
                    text: this.piedata.text,
                    subtext: this.piedata.subtext,
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
                        name: this.piedata.name,
                        // name: "Access From",
                        type: "pie",
                        radius: "50%",
                        data: this.piedata.data,
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
.echart {
    max-width: 600px;
    height: 400px;
}
</style>