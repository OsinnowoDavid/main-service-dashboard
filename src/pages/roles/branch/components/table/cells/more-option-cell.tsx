import { useRef, useState } from "react";
import MoreDotVertical from "@/components/svg/more-dot-vertical";
import { useClickAway } from "react-use";
import { MoreOverlayMenu } from "./more-overlay-menu";
import { Row } from "@tanstack/react-table";

export default function MoreOptionCell({ row }: { row: Row<unknown> }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useClickAway(menuRef, () => setMenuOpen(false));

  const handleView = (id: string) => {
    console.log("View record for ID:", id);
    // Add navigation or modal logic here
  };

  const handleEdit = (id: string) => {
    console.log("Edit record for ID:", id);
    // Add form or navigation logic here
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this record?")) {
      console.log("Delete record for ID:", id);
      // Perform API call or state update
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setMenuOpen((prev) => !prev)}
        className="flex items-center rounded-md p-2 hover:bg-gray-100"
      >
        <MoreDotVertical className="text-gray-600" />
      </button>
      {menuOpen && (
        <div ref={menuRef}>
          <MoreOverlayMenu
            onView={() => handleView((row.original as { id: string }).id)}
            onEdit={() => handleEdit((row.original as { id: string }).id)}
            onDelete={() => handleDelete((row.original as { id: string }).id)}
          />
        </div>
      )}
    </div>
  );
}
