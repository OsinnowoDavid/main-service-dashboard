import { useState } from "react";
import { TLayoutProps } from "@/layout/layout";
import { getInitials } from "@/utils/formatting";
import NotificationBell from "@/components/svg/notification-bell";
import MenuRight from "@/components/svg/menu-right";
import toast from "react-hot-toast";

export default function Topbar({ sidebarOpen, setSidebarOpen }: TLayoutProps) {
  let time = new Date().toLocaleTimeString();
  const [ctime, setTime] = useState(time);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, _setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "XXXXXXXXXXXXXXXXX",
    role: "admin",
    profilePicture: "XXXXXXXXXXXXXXXXXXXXXXXXX",
  });

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  };
  setInterval(UpdateTime);

  return (
    <div className="mb-4 w-full border-b-2 px-2 py-4 md:px-10">
      <div className="flex items-center justify-between">
        <h2 className="font-digital hidden text-lg font-medium lg:inline">{ctime}</h2>
        <div
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="inline w-fit cursor-pointer text-4xl font-medium lg:hidden"
        >
          <MenuRight />
        </div>

        <div className="flex items-center gap-5">
          <div onClick={() => toast("Hello")} className="">
            <NotificationBell className="cursor-pointer text-3xl text-primary" />
          </div>

          <div className="flex items-center gap-3">
            <div className="mb-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary pb-0 text-center leading-none text-white">
              <small className="mb-0 justify-center self-center pb-0 text-center text-sm leading-none text-white">
                {getInitials(`${user?.firstName} ${user?.lastName}`)}
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
