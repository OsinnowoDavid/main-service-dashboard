import React, { useEffect, useState } from "react";
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
  CellContext,
} from "@tanstack/react-table";
import Checkbox from "@/components/checkbox";
import { convertCurrency } from "@/utils/format-number";
import StatusIndicator from "@/components/status-indicator";
import FileCount from "./cells/file-count";
import MoreOptionCell from "./cells/more-option-cell";
import { User, userData } from "./useTable";

export const SelectableTable: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[]>([]);
  const [rowSelection, setRowSelection] = useState({});

  useEffect(() => {
    // simulate new promise and resolve it then take useData and set it to data variable
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(userData);
      }, 1000);
    });
    promise.then((data) => {
      return setData(data as User[]);
    });
  }, []);

  const columns: ColumnDef<User>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      ),
      cell: ({ row }) => (
        <Checkbox checked={row.getIsSelected()} onChange={row.getToggleSelectedHandler()} />
      ),
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "count",
      header: "",
      cell: (info) => <FileCount info={info as CellContext<unknown, unknown>} />,
    },
    {
      accessorKey: "isActive",
      header: "Status",
      cell: (info) => <StatusIndicator statusIndicator={info.getValue() as boolean} />,
    },
    {
      accessorKey: "image",
      header: "Profile",
      cell: (info) => (
        <>
          <img
            src={info.getValue() as string}
            className="h-10 w-10 rounded-full object-cover"
            alt={info.getValue() as string}
          />
        </>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: "netWorth",
      header: "Amount",
      cell: (info) => <>${convertCurrency(info.getValue() as number, "NGN", "USD").toFixed(2)}</>,
    },
    {
      accessorKey: "id",
      header: "More",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      cell: ({ row }) => <MoreOptionCell row={row as any} />,
    },
  ];

  const rerender = React.useReducer(() => ({}), {})[1];
  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

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
