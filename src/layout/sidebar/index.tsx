import { Link } from "react-router-dom";
import { TLayoutProps } from "@/layout/layout";
import Logo from "@/components/svg/logo";
import useSidebar from "./useSidebar";
import ChevronLeft from "@/components/svg/chevron-left";
import LogoutDoorOut from "@/components/svg/logout-door-out";
import { MenuItem } from "./menu-item";
import React from "react";

export default function Sidebar({ sidebarOpen, setSidebarOpen }: TLayoutProps) {
  const { menus, dockSideBar, navListRef, clickedNavYPosition, setDockSideBar } = useSidebar();

  return (
    <div
      onClick={() => setSidebarOpen(!sidebarOpen)}
      className={`${
        sidebarOpen ? "-translate-x-0" : "-translate-x-full"
      } fixed bottom-0 top-0 z-40 w-full cursor-pointer overflow-y-auto bg-black/40 backdrop-blur transition lg:relative lg:w-fit lg:translate-x-0 lg:overflow-y-clip`}
    >
      <button
        onClick={() => setDockSideBar(!dockSideBar)}
        className={`btn absolute -right-0 -mr-3 ml-24 mt-2 hidden aspect-square w-fit rounded-full border border-primary/25 bg-light p-1 text-center text-primary ring-1 md:block ${
          dockSideBar && "rotate-180"
        }`}
      >
        <ChevronLeft className="text-xl font-bold" />
      </button>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`border-primary-50 h-[calc(100vh+7rem)] min-h-screen max-w-80 cursor-default border-r-2 bg-primary pb-3 text-light transition-all ${
          dockSideBar ? "md:w-16" : "md:w-56"
        }`}
      >
        <Link
          to={"#"}
          className={`mb-8 flex flex-col items-center gap-1 ${dockSideBar && "md:hidden"}`}
        >
          <Logo className={`w-32 py-3 text-light`} />
          <div className="w-full bg-light p-1 text-center text-sm text-primary">
            <p>Administrator</p>
          </div>
        </Link>

        <nav
          className={`h-screen overflow-auto pb-20 md:h-[calc(100vh-70px)] ${dockSideBar ? "pt-16" : ""}`}
        >
          <ul ref={navListRef}>
            {menus.map((menu) => (
              <React.Fragment key={menu.section}>
                {!dockSideBar && (
                  <h3 className="px-5 py-2 text-sm/6 font-bold uppercase text-light">
                    {menu.section}
                  </h3>
                )}
                {menu.children.map((child) => (
                  <MenuItem
                    key={child.title}
                    dockSideBar={dockSideBar}
                    menu={child}
                    clickedNavYPosition={clickedNavYPosition}
                  />
                ))}
                <br />
              </React.Fragment>
            ))}

            <hr className="mt-10" />
            <li
              className="flex w-full cursor-pointer items-center justify-between gap-1 p-2 pl-5 text-sm text-light hover:bg-light/25"
              onClick={() => console.log("logout")}
            >
              <div className="flex items-center gap-1">
                <LogoutDoorOut className="text-2xl font-bold" />
                {!dockSideBar && <p>Logout</p>}
              </div>
            </li>
            <hr />
          </ul>
        </nav>
      </div>
    </div>
  );
}
