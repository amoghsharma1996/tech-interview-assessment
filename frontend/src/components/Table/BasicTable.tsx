import { useState } from 'react';

import './BasicTable.css';

interface DataRow {
  id: number;
  [key: string]: string | number;
}

interface BasicTableProps {
  columnHeaders: string[];
  data: DataRow[];
  onRowSelect: (rowId: number) => void;
}

export const BasicTable = ({
  columnHeaders,
  data,
  onRowSelect,
}: BasicTableProps) => {
  const [selectedRow, setSelectedRow] = useState<number>(0);
  const properties = Object.keys(data[0]).filter((key) => key !== 'id');

  // TODO: Enhancement would be to allow multi-select of invoices, would have to update API also to
  // accept multiple invoice IDs
  const toggleRowSelection = (rowId: number) => {
    if (selectedRow === rowId) {
      setSelectedRow(0);
    } else {
      setSelectedRow(rowId);
    }

    onRowSelect(rowId);
  };

  return (
    <table className="basic-table">
      <thead>
        <tr>
          <th className="select-column" />
          {columnHeaders.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>
              <input
                type="checkbox"
                checked={selectedRow === row.id}
                onChange={() => toggleRowSelection(row.id)}
              />
            </td>
            {properties.map((property) => (
              <td key={property}>{row[property]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
