const fs = require("fs");
/**
 * give it a columnheading and a value and it prints out the entire row where that column has that value
 * @param column: column name
 * @param value: a value in the clumn
 * @return: the entire row where that column has that value
 */
function getRow(column, value) {
  const data = fs
    .readFileSync("challenge7.csv", "utf8")
    .split("\r\n")
    .map((row) => row.split(","));
  const columnHeadings = data[0];
  const rows = data.slice(1, data.length);
  const columnIndex = columnHeadings.indexOf(column);
  const printRows = [];
  if (columnIndex === -1) return `column ${column} does not exist`;
  else {
    rows.forEach((row) => {
      if (row[columnIndex] === value) printRows.push(row);
    });
    if (printRows.length === 0) return `column ${column} has not ${value}`;
  }
  return printRows;
}

console.log(getRow("name", "jade"));
