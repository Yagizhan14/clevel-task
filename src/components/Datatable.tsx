import * as React from "react";
import { Box } from "./Box";
import { IconButton } from "./IconButton";

export interface IDatatableColumn {
  key: string;
  label: string;
  centered: boolean;
}

interface IDatatableProps {
  keyExtractorField: string;
  columns: IDatatableColumn[];
  data: any[];
  onEditClick: (item: any) => void;
  onDeleteClick: (item: any) => void;
}

const Datatable: React.FC<IDatatableProps> = ({
  data,
  columns,
  onDeleteClick,
  onEditClick,
  keyExtractorField,
}) => {
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
        {data.map((row) => {
          return (
            <tr key={row.id} className="datatable__row">
              {columns.map((cell, index) => {
                return (
                  <td
                    key={index}
                    className={`datatable__cell ${
                      cell.centered ? "datatable__cell--centered" : ""
                    }`}
                  >
                    {row[cell.key]}
                  </td>
                );
              })}
              <td className="datatable__cell  datatable__cell--centered">
                <Box display="flex" justifyContent="evenly">
                  <IconButton
                    icon="Edit"
                    onClick={() => onEditClick(row[keyExtractorField])}
                    bgColor="transparent"
                  />
                  <IconButton
                    icon="Trash2"
                    iconColor="red"
                    onClick={() => onDeleteClick(row[keyExtractorField])}
                    bgColor="transparent"
                  />
                </Box>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Datatable;
