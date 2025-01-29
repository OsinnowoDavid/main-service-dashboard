interface OverlayMenuProps {
  onEdit: () => void;
  onView: () => void;
  onDelete: () => void;
}

export const MoreOverlayMenu = ({ onEdit, onView, onDelete }: OverlayMenuProps) => (
  <div className="absolute right-0 z-10 w-32 rounded-lg border bg-white shadow-lg">
    <button className="block w-full px-4 py-2 text-left hover:bg-gray-100" onClick={onView}>
      View
    </button>
    <button className="block w-full px-4 py-2 text-left hover:bg-gray-100" onClick={onEdit}>
      Edit
    </button>
    <button
      className="block w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
      onClick={onDelete}
    >
      Delete
    </button>
  </div>
);
