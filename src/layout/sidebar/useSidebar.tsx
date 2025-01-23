import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import DashboardSquares from "@/components/svg/dashboard-squares";

export type TmenuTypeChildren = {
    title: string;
    subPath?: string;
    path?: string;
    icon: JSX.Element;
    subMenus?: {
        title: string;
        path: string;
    }[];
};
export type TmenuType = {
    section: string;
    children: TmenuTypeChildren[];
};

export default function useSidebar() {
    const menus: TmenuType[] = [
        {
            section: "Dashboard",
            children: [
                {
                    title: "Home",
                    path: "/",
                    icon: <DashboardSquares className="text-2xl" />,
                },
            ],
        },
        {
            section: "Activity",
            children: [
                {
                    title: "What we do",
                    subPath: "/what-we-do",
                    icon: <DashboardSquares className="text-2xl" />,
                    subMenus: [
                        {
                            title: "Educational Program",
                            path: "/educational-program",
                        },
                        {
                            title: "Feeding Program",
                            path: "/feeding-program",
                        },
                    ],
                },
            ],
        },
    ];
    const navListRef = useRef<HTMLUListElement>(null);
    const [subMenuClicked, setSubMenuClicked] = useState<string>("");
    const [navOpen, setNavOpen] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_activeMenu, _setActiveMenu] = useState<TmenuType | null>(null);
    const pathName = useLocation().pathname;

    const getActiveUrl = (path: string, subPath?: string): boolean => {
        // Check if the main path matches
        if (pathName === path) {
            return true;
        }
        // Check if the subPath exists and matches
        if (subPath && pathName.startsWith(subPath)) {
            return true;
        }
        return false;
    };

    // useEffect(() => {
    //     const activeMenuObj = menus.find((menu) =>
    //             getActiveUrl(menu.path || "", menu.subPath) ||
    //             (menu.subMenus &&
    //                 menu.subMenus.some((subMenu) => getActiveUrl(subMenu.path)))
    //     );
    //     setActiveMenu(activeMenuObj || null);

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [pathName]);

    useEffect(() => {
        const navList = navListRef.current;

        if (navList) {
            const handleClick = (e: MouseEvent) => {
                // Check if the target is a link tag and then toggle the nav open and close
                if (e.target instanceof HTMLElement) {
                    // This line checks if the target is an <a> tag with a non-empty href attribute and toggles the nav state
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    e.target.tagName === "A" &&
                        e.target.attributes.getNamedItem("href")?.value !==
                            "" &&
                        setNavOpen((p) => !p);
                }
            };

            navList.addEventListener("click", (e) => handleClick(e));

            return () => {
                navList.removeEventListener("click", handleClick);
            };
        }
    }, []);

    return {
        setNavOpen,
        getActiveUrl,
        setSubMenuClicked,
        subMenuClicked,
        navOpen,
        pathName,
        navListRef,
        menus,
    };
}
