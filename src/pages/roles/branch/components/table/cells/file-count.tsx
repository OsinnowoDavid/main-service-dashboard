import File from "@/components/svg/file";
import { CellContext } from "@tanstack/react-table";

export default function FileCount({ info }: { info: CellContext<unknown, unknown> }) {
  return (
    <>
      <div className="relative">
        <File className="text-2xl" />
        <span className="absolute -top-1 -ml-1 flex aspect-square h-5 w-5 flex-col items-center justify-center rounded-full bg-error text-center">
          <small className="text-xs text-light">
            {(info.getValue() as number) > 99 ? "99+" : (info.getValue() as number)}
          </small>
        </span>
      </div>
    </>
  );
}
