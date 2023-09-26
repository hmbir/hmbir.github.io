<template>
    <div id="table">
        <iheader :msg="title"></iheader>

        <div class="content">
            <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="importExcel"
                multiple
                :limit="3"
                accept=".xls,.xlsx"
            >
                <el-button size="small" type="primary"> 点击上传 </el-button>
            </el-upload>

            <el-table :data="tableData">
                <el-table-column
                    type="index"
                    label="星期"
                    :index="indexMethod"
                    width="80"
                >
                </el-table-column>
                <el-table-column prop="0" label="数据一" width="">
                </el-table-column>
                <el-table-column prop="1" label="数据二" width="">
                </el-table-column>
                <el-table-column prop="2" label="数据三" width="">
                </el-table-column>
                <el-table-column prop="3" label="数据四" width="">
                </el-table-column>
                <el-table-column prop="4" label="备注" width="">
                </el-table-column>
                <el-table-column prop="5" label="数据五" width="">
                </el-table-column>
                <el-table-column prop="6" label="备注"> </el-table-column>
            </el-table>

            <pie :piedata="piedata.pie1" ref="pie1"></pie>
            <pie :piedata="piedata.pie2" ref="pie2"></pie>

            <bar :bardata="bardata" ref="mybar"></bar>
        </div>
    </div>
</template>

<script>
// import XLSX from "xlsx";
import * as XLSX from "xlsx/xlsx.mjs";
import iheader from "@/components/header.vue";
import pie from "@/components/echart/piechart.vue";
import bar from "@/components/echart/bar.vue";

export default {
    props: {},
    components: {
        iheader,
        pie,
        bar,
    },
    data() {
        return {
            title: "table",
            tableData: [],
            sheetdata: [],
            piedata: {
                pie1: {
                    data: [],
                    text: "一周的销量",
                    subtext: "一周总结",
                    name: "销量",
                },
                pie2: {
                    data: [],
                    text: "每一类的销量",
                    subtext: "一周总结",
                    name: "销量",
                },
            },
            bardata: {
                datas: [0, 0, 0, 0, 0, 0, 0], // 每天的数量
                text: "一周的销量",
                name: "销量",
                week: [
                    "星期一",
                    "星期二",
                    "星期三",
                    "星期四",
                    "星期五",
                    "星期六",
                    "星期日",
                ],
                data2: [0, 0, 0, 0, 0], // 每一类的数量
                type: ["类型1", "类型2", "类型3", "类型4", "类型5"],
            },
        };
    },
    methods: {
        importExcel(file) {
            // let file = file.files[0] // 使用传统的input方法需要加上这一步
            const types = file.name.split(".")[1];
            const fileType = [
                "xlsx",
                "xlc",
                "xlm",
                "xls",
                "xlt",
                "xlw",
                "csv",
            ].some((item) => item === types);
            if (!fileType) {
                alert("格式错误！请重新选择");
                return;
            }
            this.file2Xce(file).then((tabJson) => {
                if (tabJson && tabJson.length > 0) {
                    this.xlsxJson = tabJson;
                    // xlsxJson就是解析出来的json数据,数据格式如下
                    // [
                    //   {
                    //     sheetName: sheet1
                    //     sheet: sheetData
                    //   }
                    // ]
                    this.tableData = this.xlsxJson[0].sheet;
                    this.sheetdata = this.xlsxJson[0].sheet;
                }
            });
            // 转换为echart数据
            this.editData();
        },

        file2Xce(file) {
            // eslint-disable-next-line no-unused-vars
            return new Promise(function (resolve, reject) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const data = e.target.result;
                    this.wb = XLSX.read(data, {
                        type: "binary",
                    });
                    const result = [];
                    this.wb.SheetNames.forEach((sheetName) => {
                        result.push({
                            sheetName: sheetName,
                            sheet: XLSX.utils.sheet_to_json(
                                this.wb.Sheets[sheetName]
                            ),
                        });
                    });
                    resolve(result);
                };
                reader.readAsBinaryString(file.raw);
                // reader.readAsBinaryString(file) // 传统input方法
            });
        },

        // 获取echart数据,并对其初始化
        editData() {
            for (let i = 0; i < this.sheetdata.length; i++) {
                // 将表格数据赋值给echart条形图数据，每天
                for (let j = 0; j < 10; j++) {
                    if (typeof this.sheetdata[i][j] == "number") {
                        this.bardata.datas[i] += this.sheetdata[i][j];
                    }
                }

                // 赋值给每一类的数量;
                this.bardata.data2[0] += this.sheetdata[i][0];
                this.bardata.data2[1] += this.sheetdata[i][1];
                this.bardata.data2[2] += this.sheetdata[i][2];
                this.bardata.data2[3] += this.sheetdata[i][3];
                this.bardata.data2[4] += this.sheetdata[i][5];
            }

            // 将data1表格数据转为echart扇形图数据（每天）
            for (let i = 0; i < this.bardata.datas.length; i++) {
                if (this.bardata.datas[i] !== 0) {
                    this.piedata.pie1.data.push({
                        value: this.bardata.datas[i],
                        name: this.bardata.week[i],
                    });
                }
            }
            // 将表格数据转为echart扇形图数据（每一类）
            for (let i = 0; i < this.bardata.data2.length; i++) {
                if (this.bardata.data2[i] !== 0) {
                    this.piedata.pie2.data.push({
                        value: this.bardata.data2[i],
                        name: this.bardata.type[i],
                    });
                }
            }

            this.$refs.pie1.myEcharts();
            this.$refs.pie2.myEcharts();
            this.$refs.mybar.drawChart();
        },

        // 表格的序号,星期几
        indexMethod(index) {
            return this.bardata.week[index];
        },
    },
    mounted() {},
};
</script>

<style lang="less" scoped>
#table {
    .content {
        width: 90%;
        margin: 20px auto 0;

        /deep/ .el-table {
            border: 1px solid #ccc;
            margin-top: 20px;
            margin-bottom: 30px;
            // width: 80%;
            width: 650px;
            .el-table__header {
                .el-table__cell {
                    padding: 5px 0;
                    text-align: center;
                    .cell {
                        color: #999;
                    }
                }
            }
            .el-table__row {
                border: 1px solid pink;
                .el-table__cell {
                    padding: 5px 0;
                    text-align: center;
                    .cell {
                        color: #000;
                    }
                }
            }
        }

        /deep/ .upload-demo {
            .el-upload-list {
                display: none;
            }
        }
    }
}
</style>
