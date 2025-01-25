import { useEffect, useState } from "react";
import { type_menu_children } from "./useSidebar";
import { NavLink } from "react-router-dom";
import ChevronRight from "@/components/svg/chevron-right";
import HorizontalLine from "@/components/svg/horizontal-line";

export const MenuItem = ({
  menu,
  dockSideBar,
  clickedNavYPosition,
}: {
  menu: type_menu_children;
  dockSideBar: boolean;
  clickedNavYPosition: number;
}) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  useEffect(() => {
    setSubMenuOpen(false);
  }, [clickedNavYPosition]);

  return (
    <li className="">
      <NavLink
        className={({ isActive }) =>
          isActive && !menu.subMenus
            ? `relative flex items-center justify-between gap-1 bg-light/25 py-2 pl-3 ${
                subMenuOpen && "bg-light/25"
              }`
            : `relative flex items-center justify-between gap-1 py-2 pl-3 hover:bg-light/25 ${
                subMenuOpen && "bg-light/25"
              }`
        }
        title={menu.title}
        to={menu.subMenus ? "#" : menu.path || "#"}
        onClick={() => {
          if (menu.subMenus) setSubMenuOpen(!subMenuOpen);
        }}
      >
        <div className="flex items-center gap-1">
          {menu.icon}
          {!dockSideBar && <p>{menu.title}</p>}
        </div>
        {menu.subMenus && (
          <ChevronRight
            className={`-rotate-90 text-2xl font-bold ${subMenuOpen && "!rotate-90"}`}
          />
        )}
      </NavLink>
      <div
        style={{ top: clickedNavYPosition }}
        className={`overflow-hidden ${subMenuOpen ? "h-fit" : "h-0"} ${
          dockSideBar && `absolute left-[calc(4rem)] z-50 w-56 rounded bg-primary shadow`
        }`}
      >
        {menu.subMenus && (
          <ul>
            {menu.subMenus.map((subMenu: { title: string; path: string; external?: boolean }) => (
              <li className="" key={subMenu.title}>
                <NavLink
                  to={subMenu.path || ""}
                  className={({ isActive }) =>
                    isActive
                      ? `group flex w-full items-center gap-1 bg-light p-2 pl-5 text-sm text-primary hover:bg-light hover:text-primary`
                      : `group flex w-full items-center gap-1 p-2 pl-5 text-sm text-light hover:bg-light hover:text-primary`
                  }
                >
                  <HorizontalLine className="w-5" />
                  <p>{subMenu.title}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
};
