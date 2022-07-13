import React, { Key, useState } from "react";
import "./Table.css";

const setArrayObjAllProperty = <T, K extends string, V>(
  arrObj: Record<K, V>[],
  value: T
): Record<string, T>[] => {
  return Array.from(arrObj, (row) =>
    Object.keys(row).reduce((acc, key) => {
      return { ...acc, [key]: value };
    }, {})
  );
};

const setIndexObject = <T extends object[], V>(
  arr: T,
  value: V
): Record<number, V> => {
  const obj = {} as Record<number, V>;
  for (let i = 0; i < arr.length; i++) {
    obj[i] = value;
  }
  return obj;
};

interface ITableProps<RowType> {
  columnHeader: RowType;
  rowList: RowType[];
  onChange?: (value: RowType[]) => void;
  editable?: boolean;
}

const Table = <RowType extends Record<Key, string>, Key extends keyof RowType>({
  columnHeader,
  rowList,
  onChange,
  editable = false,
}: ITableProps<RowType>) => {
  const initialCellEditable = setArrayObjAllProperty(rowList, false);
  const initialRowsChecked = setIndexObject(rowList, false);
  const [cellEditable, setCellEditable] = useState(initialCellEditable);
  const [rowsChecked, setRowChecked] = useState(initialRowsChecked);
  const handleCellChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    key: Key
  ) => {
    onChange?.(
      rowList.map((row, i) => {
        if (i === index) {
          return { ...row, [key]: e.target.value };
        }
        return row;
      })
    );
  };

  const setCellEditableFun = (index: number, key: Key, boo: boolean) => {
    setCellEditable(
      cellEditable.map((cell, i) => {
        if (i === index) {
          return { ...cell, [key]: boo };
        }
        return cell;
      })
    );
  };

  const handleAddNewLine = () => {
    const newRowList = [
      ...rowList,
      Object.keys(columnHeader).reduce((acc, key) => {
        return { ...acc, [key]: "" };
      }, {}) as RowType,
    ];
    onChange?.(newRowList);
    setCellEditable(setArrayObjAllProperty(newRowList, false));
    setRowChecked((rows) => ({ ...rows, [newRowList.length - 1]: false }));
  };

  const handleDeleteRows = () => {
    const newRowList = rowList.filter((row, index) => !rowsChecked[index]);
    onChange?.(newRowList);
    setCellEditable(setArrayObjAllProperty(newRowList, false));
    setRowChecked(setIndexObject(newRowList, false));
  };

  const dataCells = (index: number, key: Key, value: string) => {
    if (editable) {
      return (
        <td
          key={String(key)}
          onDoubleClick={() => setCellEditableFun(index, key, true)}
        >
          {(cellEditable[index] as Record<Key, boolean>)[key] ? (
            <div className="inputCell">
              <input
                autoFocus
                value={value}
                onChange={(e) => handleCellChange(e, index, key)}
                onBlur={() => setCellEditableFun(index, key, false)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setCellEditableFun(index, key, false);
                }}
              />
            </div>
          ) : (
            <div className="dataCell">{value}</div>
          )}
        </td>
      );
    } else {
      return (
        <td key={String(key)}>
          <div className="dataCell">{value}</div>
        </td>
      );
    }
  };

  const columnHeaders = (
    Object.entries(columnHeader) as [string, string][]
  ).map(([key, value]) => (
    <th key={key}>
      <div className="dataCell">{value}</div>
    </th>
  ));

  const dataRows = rowList.map((row, index) => {
    return (
      <tr key={String(index)}>
        {editable && (
          <td>
            <input
              type="checkbox"
              id={String(index)}
              checked={rowsChecked[index]}
              onChange={(e) =>
                setRowChecked((rows) => ({
                  ...rows,
                  [index]: e.target.checked,
                }))
              }
            />
          </td>
        )}
        {(Object.entries(row) as [Key, string][]).map(([key, value]) =>
          dataCells(index, key, value)
        )}
      </tr>
    );
  });

  return (
    <div className="Table">
      {editable && (
        <div>
          <button onClick={handleAddNewLine}>Add</button>
          <button onClick={handleDeleteRows}>Delete</button>
        </div>
      )}
      <table>
        <thead>
          <tr>
            {editable && (
              <th>
                <input type="checkbox" />
              </th>
            )}
            {columnHeaders}
          </tr>
        </thead>
        <tbody>{dataRows}</tbody>
      </table>
    </div>
  );
};

export default Table;
