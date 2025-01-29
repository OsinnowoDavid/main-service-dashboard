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
      <div className="h-4" />
      <button onClick={() => rerender()} className="">
        Rerender
      </button>
      <div className="mt-4 flex items-center gap-4">
        <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          Previous
        </button>
        <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Next
        </button>
      </div>
      <pre className="mt-4 rounded bg-gray-100 p-2">
        Selected Rows:{" "}
        {JSON.stringify(
          table.getSelectedRowModel().flatRows.map((row) => row.original),
          null,
          2,
        )}
      </pre>
    </>
  );
};
