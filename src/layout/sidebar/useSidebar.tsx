import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import DashboardSquares from "@/components/svg/dashboard-squares";
import ChartLineUp from "@/components/svg/chart-line-up";
import Cart from "@/components/svg/cart";
import Clock from "@/components/svg/clock";
import CheckedCircle from "@/components/svg/checked-circle";
import RoadArrowForward from "@/components/svg/road-arrow-forward";
import Truck from "@/components/svg/truck";
import Package from "@/components/svg/package";
import Users from "@/components/svg/users";
import FeedbackChatBubble from "@/components/svg/feedback-chat-bubble";
import Receipt from "@/components/svg/receipt";
import CreditCard from "@/components/svg/credit-card";
import CoinStack from "@/components/svg/coin-stack";
import Cog from "@/components/svg/cog";
import ShieldCheck from "@/components/svg/shield-check";
import ClipboardCheck from "@/components/svg/clipboard-check";

export type type_menu_children = {
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
  children: type_menu_children[];
};

export default function useSidebar() {
  const menus: TmenuType[] = [
    {
      section: "Dashboard",
      children: [
        {
          title: "Overview",
          path: "/overview",
          icon: <DashboardSquares className="text-2xl" />,
        },
        {
          title: "Analytics",
          path: "/analytics",
          icon: <ChartLineUp className="text-2xl" />,
        },
        {
          title: "Analytics",
          path: "/super-admin",
          icon: <ChartLineUp className="text-2xl" />,
        },
        {
          title: "Analytics",
          path: "/admin",
          icon: <ChartLineUp className="text-2xl" />,
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
            {
              title: "Analytics",
              path: "/super-admin",
            },
            {
              title: "Analytics",
              path: "/admin",
            },
          ],
        },
      ],
    },
    {
      section: "Orders",
      children: [
        {
          title: "All Orders",
          path: "/orders",
          icon: <Cart className="text-2xl" />,
        },
        {
          title: "Pending Orders",
          path: "/orders/pending",
          icon: <Clock className="text-2xl" />,
        },
        {
          title: "Completed Orders",
          path: "/orders/completed",
          icon: <CheckedCircle className="text-2xl" />,
        },
      ],
    },
    {
      section: "Shipments",
      children: [
        {
          title: "All Shipments",
          path: "/shipments",
          icon: <Truck className="text-2xl" />,
        },
        {
          title: "In-Transit",
          path: "/shipments/in-transit",
          icon: <RoadArrowForward className="text-2xl" />,
        },
        {
          title: "Delivered",
          path: "/shipments/delivered",
          icon: <Package className="text-2xl" />,
        },
      ],
    },
    {
      section: "Customers",
      children: [
        {
          title: "All Customers",
          path: "/customers",
          icon: <Users className="text-2xl" />,
        },
        {
          title: "Feedback",
          path: "/customers/feedback",
          icon: <FeedbackChatBubble className="text-2xl" />,
        },
      ],
    },
    {
      section: "Financials",
      children: [
        {
          title: "Invoices",
          path: "/invoices",
          icon: <Receipt className="text-2xl" />,
        },
        {
          title: "Payments",
          path: "/payments",
          icon: <CreditCard className="text-2xl" />,
        },
        {
          title: "Debtors",
          path: "/debtors",
          icon: <CoinStack className="text-2xl" />,
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
              title: "Feeding Program",
              path: "/feeding-program",
            },
          ],
        },
      ],
    },
    {
      section: "Settings",
      children: [
        {
          title: "General",
          path: "/settings/general",
          icon: <Cog className="text-2xl" />,
        },
        {
          title: "User Management",
          path: "/settings/users",
          icon: <ShieldCheck className="text-2xl" />,
        },
        {
          title: "Audit Logs",
          path: "/settings/audit-logs",
          icon: <ClipboardCheck className="text-2xl" />,
        },
      ],
    },
    {
      section: "Activity",
      children: [
        {
          title: "What we do",
          subPath: "/what-we-do",
          icon: <Cog className="text-2xl" />,
          subMenus: [
            {
              title: "School Program",
              path: "/school-program",
            },
            {
              title: "Library Cafe",
              path: "/library-cafe",
            },
          ],
        },
      ],
    },
  ];
  const navListRef = useRef<HTMLUListElement>(null);
  const [clickedNavYPosition, setClickedNavYPosition] = useState<number>(0);
  const [subMenuClicked, setSubMenuClicked] = useState<string>("");
  const [navOpen, setNavOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_activeMenu, _setActiveMenu] = useState<TmenuType | null>(null);
  const [dockSideBar, setDockSideBar] = useState(false);
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

  useEffect(() => {
    const navList = navListRef.current;

    if (navList) {
      const handleClick = (e: MouseEvent) => {
        console.log("NAV LIST", e);
        console.log("Y position (relative to page):", e.clientY);
        setClickedNavYPosition(e.pageY);
      };

      navList.addEventListener("click", (e) => handleClick(e));

      return () => {
        navList.removeEventListener("click", handleClick);
      };
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setDockSideBar(width <= 640 && false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    setNavOpen,
    getActiveUrl,
    setSubMenuClicked,
    setDockSideBar,
    subMenuClicked,
    navOpen,
    pathName,
    navListRef,
    clickedNavYPosition,
    menus,
    dockSideBar,
  };
}
