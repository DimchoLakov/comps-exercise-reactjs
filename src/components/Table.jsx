import { Fragment } from "react";

function Table({ data, config, keyFn }) {
  const renderedHeaders = config.map((column, index) => {
    if (column.header) {
      return <Fragment key={index}>{column.header()}</Fragment>;
    }

    return <th key={index}>{column.label}</th>;
  });

  const renderedRows = data.map((rowData, rowIndex) => {
    const renderedCells = config.map((column, columnIndex) => {
      return (
        <td className="p-3" key={columnIndex}>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      //   <tr className="border-b" key={keyFn(rowData)}>
      <tr key={rowIndex} className="border-b">
        {renderedCells}
      </tr>
    );
  });

  return (
    <>
      <table className="table-auto border-spacing-2">
        <thead>
          <tr className="border-b-2">{renderedHeaders}</tr>
        </thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </>
  );
}

export default Table;
