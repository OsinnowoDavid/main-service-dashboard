import { useState } from "react";
import { TLayoutProps } from "@/layout/layout";
import { getInitials } from "@/utils/formatting";
import NotificationBell from "@/components/svg/notification-bell";
import MenuRight from "@/components/svg/menu-right";

export default function Topbar({ sidebarOpen, setSidebarOpen }: TLayoutProps) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [user, _setUser] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "XXXXXXXXXXXXXXXXX",
        role: "admin",
        profilePicture: "XXXXXXXXXXXXXXXXXXXXXXXXX",
    });

    return (
        <div className="px-2 md:px-10 py-4 border-b-2 mb-4 w-full">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-medium hidden md:inline">
                    Overview
                </h2>
                <div
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="cursor-pointer text-4xl font-medium md:hidden inline w-fit"
                >
                    <MenuRight />
                </div>

                <div className="flex items-center gap-5">
                    <div className="">
                        <NotificationBell className="text-3xl text-primary cursor-pointer" />
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary rounded-full text-center justify-center text-white pb-0 mb-0 leading-none flex items-center">
                            <small className="text-center justify-center self-center  text-white pb-0 mb-0 leading-none text-sm">
                                {getInitials(
                                    `${user?.firstName} ${user?.lastName}`
                                )}
                            </small>
                        </div>
                        <h4 className="font-normal">
                            {user?.firstName} {user?.lastName}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}
