import * as React from "react";

export interface IDatatableColumn<T = any> {
  key: string;
  label: string;
  centered: boolean;
  render: (item: T) => React.ReactNode;
}

interface IDatatableProps<T = any> {
  columns: IDatatableColumn<T>[];
  data: T[];
}

const Datatable = <T extends object>({ data, columns }: IDatatableProps<T>) => {
  if (data.length > 0) {
    return (
      <table className="datatable">
        <thead className="datatable__header datatable__header--sticky">
          {columns.map((column) => {
            return (
              <th key={column.key} className="datatable__header-item">
                {column.label}
              </th>
            );
          })}
        </thead>
        <tbody className="datatable__body">
          {data.map((row, index) => {
            return (
              <tr key={index} className="datatable__row">
                {columns.map((cell, index) => {
                  return (
                    <Cell
                      key={index}
                      centered={cell.centered}
                      render={cell.render(row)}
                    />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  } else return <span>No Record Found!</span>;
};

export default Datatable;

interface ICellProps {
  centered: boolean;
  render: React.ReactNode;
}

const Cell: React.FC<ICellProps> = ({ centered, render }) => {
  return (
    <td
      className={`datatable__cell ${
        centered ? "datatable__cell--centered" : ""
      }`}
    >
      {render}
    </td>
  );
};
