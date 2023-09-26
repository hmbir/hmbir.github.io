<template>
    <div id="table">
        <iheader :msg="title"></iheader>
        <div class="content">
            <!-- 使用普通input+原生js标签获取xlsx数据 -->
            <input
                type="file"
                accept=".xls,.xlsx"
                class="upload_file"
                @change="handleClick($event)"
                id="excel"
            />

            <div class="table"></div>
        </div>
    </div>
</template>

<script>
import * as XLSX from "xlsx/xlsx.mjs";
import iheader from "@/components/header.vue";

export default {
    props: {},
    components: {
        iheader,
    },
    data() {
        return {
            title: "title",
        };
    },
    methods: {
        handleClick(e) {
            let fileObj = e.target.files[0];
            const reader = new FileReader();
            reader.readAsArrayBuffer(fileObj);

            reader.onload = function (event) {
                const fileData = event.target.result;
                const workbook = XLSX.read(fileData, {
                    type: "binary",
                });
                // 转换成JSON？
                // const wsname = workbook.SheetNames[0];
                // const sheetJson = XLSX.utils.sheet_to_json(
                //     workbook.Sheets[wsname]
                // );
                // sheetJson.forEach((item) => {
                // });

                // 转换成csv格式
                // html-readWorkbook()
                var csv = XLSX.utils.sheet_to_csv(workbook.Sheets.Sheet1);
                var rows = csv.split("\n"); // 转化为数组
                // rows.pop(); // 最后一行没用的
                console.log(rows); // 打印输出的数组
                let table = ``;
                rows.forEach((v) => {
                    let tr = ``;
                    let td = ``;
                    v.split(",").forEach((item) => {
                        td += `<td>${item}</td>`;
                    });
                    tr = `<tr>${td}</tr>`;
                    table += tr;
                });
                table = `<table>${table}</table>`;
                document.querySelector(".table").innerHTML = table; // 显示table表格
            };
        },
    },
    mounted() {},
};
</script>

<style lang="less" scoped>
#table {
    .content {
        width: 80%;
        margin: 50px auto 0;

        /deep/ .table {
            border-collapse: collapse;
            td {
                border: 1px solid #ccc;
                text-align: center;
                height: 30px;
            }
            tr:first-child {
                background: #ccc;
            }
        }
    }
}
</style>
