import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { TLayoutProps } from "@/layout/layout";
import { MdOutlineReviews } from "react-icons/md";
import { FiActivity, FiUsers } from "react-icons/fi";
import { PiSquaresFourThin } from "react-icons/pi";
import { FaRegAddressCard } from "react-icons/fa6";
import Logo from "@/components/svg/logo";

export default function AdminSidebar({
    sidebarOpen,
    setSidebarOpen,
}: TLayoutProps) {
    const [navLinks] = useState([
        {
            section: "Menu",
            links: [
                {
                    name: "Overview",
                    link: "/admin/overview",
                    icon: <PiSquaresFourThin className="text-xl" />,
                },
                {
                    name: "Activity",
                    link: "/admin/activity",
                    icon: <FiActivity className="text-xl" />,
                },
                {
                    name: "Review Mgt.",
                    link: "/admin/review-management",
                    icon: <MdOutlineReviews className="text-xl" />,
                },
            ],
        },
        {
            section: "Users",
            links: [
                {
                    name: "Users",
                    link: "/admin/users",
                    icon: <FiUsers className="text-xl" />,
                },
                {
                    name: "Business",
                    link: "/admin/business",
                    icon: <FaRegAddressCard className="text-xl" />,
                },
            ],
        },
        // {
        //     section: "Other",
        //     links: [
        //         {
        //             name: "Support",
        //             link: "/admin/support",
        //             icon: <MdOutlineContactSupport className="text-3xl" />,
        //         },
        //         {
        //             name: "Setting",
        //             link: "/admin/setting",
        //             icon: <IoSettingsOutline className="text-3xl" />,
        //         },
        //     ],
        // },
    ]);

    return (
        <div
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`${
                sidebarOpen ? "-translate-x-0" : "-translate-x-full"
            } lg:translate-x-0 transition top-0 bottom-0 lg:relative z-50 fixed lg:w-fit w-full bg-black/40 backdrop-blur cursor-pointer overflow-y-auto lg:overflow-y-clip`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="min-h-screen h-full min-w-40 lg:min-w-60 max-w-80 bg-primary text-light border-r-2 border-primary-50 cursor-default pb-3"
            >
                <Link to={"/"} className="flex flex-col items-center gap-1">
                    <Logo className="w-32 text-light py-3" />
                    <div className="bg-light text-sm text-primary text-center p-1 w-full">
                        <p>Administrator</p>
                    </div>
                </Link>

                <div className="mt-6 pb-10">
                    {navLinks.map((links, index) => (
                        <React.Fragment key={index}>
                            <div className="text-sm mb-2 p-1 w-full pl-2">
                                <p>{links.section}</p>
                            </div>
                            {links.links.map((link, index) => (
                                <NavLink
                                    key={index}
                                    to={link.link}
                                    className="flex items-center gap-2 text-light text-sm p-2 w-full hover:bg-light hover:text-primary pl-5"
                                >
                                    {link.icon}
                                    <p>{link.name}</p>
                                </NavLink>
                            ))}
                            <hr className="mb-4 pt-4" />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}
