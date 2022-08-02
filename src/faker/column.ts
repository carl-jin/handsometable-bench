import { faker } from "@faker-js/faker";

const renders = [
  //  下拉框
  function (instance, td, row, col, prop, value, cellProperties) {
    const arr = value.split(" ");
    td.innerHTML =
      arr.reduce((prev, current) => {
        const style = {
          backgroundColor: faker.color.rgb({ format: "hex" }),
          color: faker.color.rgb({ format: "hex" }),
        };
        prev += `<div class="select-item" style="background:${style.backgroundColor};color:${style.color}">${current}</div>`;
        return prev;
      }, '<div class="select-widget">') + "</div>";
  },
  //  关联表
  function (instance, td, row, col, prop, value, cellProperties) {
    const arr = value.split(" ");
    td.innerHTML =
      arr.reduce((prev, current) => {
        prev += `<div class="associated-item">${current}</div>`;
        return prev;
      }, '<div class="associated-widget">') + "</div>";
  },
  //  富文本
  function (instance, td, row, col, prop, value, cellProperties) {
    const rowHeight = instance.getRowHeight(row);
    let html = `<div class='rich-text' style='height:${rowHeight}px'>`;
    for (let i = 1; i < 7; i++) {
      html += `<h${i}>${value}</h${i}>`;
    }

    td.innerHTML = html + "</div>";
  },
  //  头像
  function (instance, td, row, col, prop, value, cellProperties) {
    const arr = value.split(" ");
    td.innerHTML =
      arr.reduce((prev, current) => {
        prev += `<div class="member-item">
        <div class="avatar"><img width="40" height="40" src="${faker.image.imageUrl(
          40,
          40,
          "cat"
        )}" /></div>
        <span class="name">${current}</span> 
        </div>`;
        return prev;
      }, '<div class="member-widget">') + "</div>";
  },
  //  链接
  function (instance, td, row, col, prop, value, cellProperties) {
    const rowHeight = instance.getRowHeight(row);

    td.innerHTML = `<div class="hyperlink-widget" style="height:${rowHeight}px"><a href="https://google.com" target="_blank">${value}</a></div>`;
  },
];

export function genColumns() {
  const names = faker.helpers.uniqueArray(
    faker.company.companyName,
    parseInt(faker.random.numeric(2))
  );
  return names.map((name, index) => {
    return {
      title: name,
      data: `col-${index}`,
      renderer: renders[Math.floor(Math.random() * renders.length)],
    };
  });
}
