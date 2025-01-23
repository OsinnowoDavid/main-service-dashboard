import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { TLayoutProps } from "@/layout/layout";
import Logo from "@/components/svg/logo";
import useSidebar, { TmenuTypeChildren } from "./useSidebar";
import ChevronLeft from "@/components/svg/chevron-left";
import ChevronRight from "@/components/svg/chevron-right";
import LogoutDoorOut from "@/components/svg/logout-door-out";

export default function Sidebar({ sidebarOpen, setSidebarOpen }: TLayoutProps) {
    const { menus } = useSidebar();
    const [dockSideBar, setDockSideBar] = useState(false);

    return (
        <div
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`${
                sidebarOpen ? "-translate-x-0" : "-translate-x-full"
            } lg:translate-x-0 transition top-0 bottom-0 lg:relative z-50 fixed lg:w-fit w-full bg-black/40 backdrop-blur cursor-pointer overflow-y-auto lg:overflow-y-clip`}
        >
            <button
                onClick={() => setDockSideBar(!dockSideBar)}
                className={`btn md:block hidden -mr-3 mt-2 ring-1 w-fit aspect-square p-1 text-center border border-primary/25 bg-light text-primary absolute -right-0 ml-24 rounded-full ${
                    dockSideBar && "rotate-180"
                }`}
            >
                <ChevronLeft className="font-bold text-xl" />
            </button>
            <div
                onClick={(e) => e.stopPropagation()}
                className={`min-h-screen h-full max-w-80 bg-primary text-light border-r-2 border-primary-50 cursor-default pb-3 transition-all ${
                    dockSideBar ? "md:w-16" : "md:w-56"
                }`}
            >
                <Link
                    to={"#"}
                    className={`flex flex-col items-center gap-1 mb-8 ${
                        dockSideBar && "md:hidden"
                    }`}
                >
                    <Logo className={`w-32 text-light py-3`} />
                    <div className="bg-light text-sm text-primary text-center p-1 w-full">
                        <p>Administrator</p>
                    </div>
                </Link>

                <nav
                    className={`h-[calc(100vh-70px)] pb-20 overflow-x-scroll ${
                        dockSideBar && "pt-16"
                    }`}
                >
                    <ul>
                        {menus.map((menu) => (
                            <>
                                {!dockSideBar && (
                                    <h3 className="text-sm/6 text-light font-bold uppercase px-5 py-2 ">
                                        {menu.section}
                                    </h3>
                                )}
                                {menu.children.map((child) => (
                                    <MenuItem
                                        key={child.title}
                                        dockSideBar={dockSideBar}
                                        menu={child}
                                    />
                                ))}
                                <br />
                            </>
                        ))}

                        <br />
                        <hr />
                        <li
                            className="flex items-center justify-between gap-1 text-sm p-2 w-full pl-5 cursor-pointer text-light hover:bg-light/25"
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

const MenuItem = ({
    menu,
    dockSideBar,
}: {
    menu: TmenuTypeChildren;
    dockSideBar: boolean;
}) => {
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    return (
        <li>
            <Link
                className="flex items-center justify-between gap-1 py-2 pl-3 hover:bg-light/25"
                title={menu.title}
                to={menu.subMenus ? "#" : menu.path || "#"}
                onClick={() => {
                    if (menu.subMenus) {
                        setSubMenuOpen(!subMenuOpen);
                    }
                }}
            >
                <div className="flex items-center gap-1">
                    {menu.icon}
                    {!dockSideBar && <p>{menu.title}</p>}
                </div>
                {menu.subMenus && (
                    <ChevronRight
                        className={`-rotate-90 text-2xl font-bold ${
                            subMenuOpen && "!rotate-90"
                        }`}
                    />
                )}
            </Link>
            <div
                className={`overflow-hidden ${subMenuOpen ? "h-fit" : "h-0"} ${
                    dockSideBar &&
                    "absolute bg-primary shadow left-16 rounded w-56"
                }`}
            >
                {menu.subMenus && (
                    <ul>
                        {menu.subMenus.map(
                            (subMenu: {
                                title: string;
                                path: string;
                                external?: boolean;
                            }) => (
                                <li
                                    className="flex items-center hover:bg-light hover:text-primary text-light group"
                                    key={subMenu.title}
                                >
                                    <hr className="w-5 group-hover:border-primary" />
                                    <NavLink
                                        to={subMenu.path || ""}
                                        className="flex items-center gap-1 text-sm p-2 w-full pl-5"
                                    >
                                        {subMenu.title}
                                    </NavLink>
                                </li>
                            )
                        )}
                    </ul>
                )}
            </div>
        </li>
    );
};
