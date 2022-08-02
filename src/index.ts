import Handsontable from "handsontable";
import "handsontable/dist/handsontable.full.css";
import { faker } from "@faker-js/faker";
import { genColumns } from "./faker/column";
import { genData } from "./faker/data";
import { genRowHeights } from "./faker/rowHeights";
import "./style.css";
import { genColWidth } from "./faker/colWidth";
faker.setLocale("zh_CN");

console.time("模拟生成数据");
const columns = genColumns();
const data = genData(columns.length);
const rowHeights = genRowHeights(data.length);
const colWidths = genColWidth(columns.length);
console.timeEnd("模拟生成数据");

const container = document.getElementById("example");

const hot = new Handsontable(container, {
  data: data,
  columns: columns,
  rowHeaders: true,
  colHeaders: true,
  colWidths: colWidths,
  rowHeights: rowHeights,
  autoRowSize: false,
  autoColumnSize: false,
  viewportRowRenderingOffset: 20,
  viewportColumnRenderingOffset: 10,
  manualRowResize: true,
  height: window.innerHeight - 100,
  licenseKey: "non-commercial-and-evaluation", // for non-commercial use only
});
