import React, { useEffect, useState } from "react";
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  CellContext,
  Row,
} from "@tanstack/react-table";
import Checkbox from "@/components/checkbox";
import { convertCurrency } from "@/utils/format-number";
import StatusIndicator from "@/components/status-indicator";
import FileCount from "./cells/file-count";
import MoreOptionCell from "./cells/more-option-cell";

export type User = {
  id: number;
  image: string;
  name: string;
  isActive: boolean;
  email: string;
  gender: string;
  phone: string;
  count: number;
  netWorth: number;
};

export const userData: User[] = [
  {
    id: 1,
    image: "http://dummyimage.com/235x100.png/5fa2dd/ffffff",
    name: "Bruno Garret",
    isActive: true,
    email: "bgarret0@oakley.com",
    gender: "Male",
    phone: "+62 (659) 237-2589",
    count: 53,
    netWorth: 956460,
  },
  {
    id: 2,
    image: "http://dummyimage.com/176x100.png/5fa2dd/ffffff",
    name: "Ami Currm",
    isActive: false,
    email: "acurrm1@npr.org",
    gender: "Female",
    phone: "+66 (848) 687-9138",
    count: 85,
    netWorth: 544613,
  },
  {
    id: 3,
    image: "http://dummyimage.com/212x100.png/5fa2dd/ffffff",
    name: "Jolyn Kimbury",
    isActive: true,
    email: "jkimbury2@prlog.org",
    gender: "Female",
    phone: "+375 (742) 276-8475",
    count: 77,
    netWorth: 420941,
  },
  {
    id: 4,
    image: "http://dummyimage.com/190x100.png/5fa2dd/ffffff",
    name: "Ivy Llopis",
    isActive: true,
    email: "illopis3@smh.com.au",
    gender: "Female",
    phone: "+81 (207) 711-0142",
    count: 5,
    netWorth: 324784,
  },
  {
    id: 5,
    image: "http://dummyimage.com/173x100.png/cc0000/ffffff",
    name: "Andreas Speerman",
    isActive: false,
    email: "aspeerman4@nature.com",
    gender: "Male",
    phone: "+62 (717) 214-9046",
    count: 100,
    netWorth: 1300,
  },
];

export default function useTable() {
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
        <img
          src={info.getValue() as string}
          className="h-10 w-10 rounded-full object-cover"
          alt={info.getValue() as string}
        />
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
      cell: ({ row }) => {
        <>
          <MoreOptionCell row={row as Row<unknown>} />;
        </>;
      },
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

  return { table, rerender };
}
