import { useState } from 'react';

import './BasicTable.css';

interface DataRow {
  id: number;
  [key: string]: string | number;
}

interface BasicTableProps {
  columnHeaders: string[];
  data: DataRow[];
}

export const BasicTable = ({ columnHeaders, data }: BasicTableProps) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const properties = Object.keys(data[0]).filter((key) => key !== 'id');

  const toggleRowSelection = (rowId: number) => {
    if (selectedRows.includes(rowId)) {
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
    } else {
      setSelectedRows([...selectedRows, rowId]);
    }
  };

  return (
    <table className="basic-table">
      <thead>
        <tr>
          <th className="select-column">Select</th>
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
                checked={selectedRows.includes(row.id)}
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
