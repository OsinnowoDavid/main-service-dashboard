import React from "react";
import { flexRender } from "@tanstack/react-table";
import useTable from "./useTable";

export const SelectableTable: React.FC = () => {
  const { rerender, table } = useTable();

  return (
    <>
      <table className="w-full border-collapse">
        <thead className="">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className="border-b-2" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="p-2 text-left text-sm font-semibold text-textcolor/70"
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="divide-y-2 border-t-2 even:bg-textcolor/5">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-2 py-4 text-left">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.footer, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <br />
      <hr />
      <br />
      <button onClick={() => rerender()} className="btn">
        Rerender
      </button>
      <div className="mt-4 flex items-center gap-4">
        <button
          className="btn"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </button>
        <button className="btn" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Next
        </button>
      </div>
      {/* Page Size Selector */}
      <select
        value={10}
        onChange={(e) => table.setPageSize(Number(e.target.value))}
        className="rounded border p-2"
      >
        {[5, 10, 20, 50].map((size) => (
          <option key={size} value={size}>
            Show {size}
          </option>
        ))}
      </select>
      {/* <pre className="mt-4 rounded bg-gray-100 p-2">
        Selected Rows:{" "}
        {JSON.stringify(
          table.getSelectedRowModel().flatRows.map((row) => row.original),
          null,
          2,
        )}
      </pre> */}
    </>
  );
};
