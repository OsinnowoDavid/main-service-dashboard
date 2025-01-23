import { useState } from "react";
import Sidebar from "@/layout/sidebar";
import Topbar from "@/layout/topbar";

export type TLayoutProps = {
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    sidebarOpen: boolean;
    children?: React.ReactNode;
};

export default function Layouts({ children }: { children?: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            {/* <AuthProvider>
                <BusinessProvider> */}
            <div className="flex h-screen overflow-hidden">
                <Sidebar
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                    <Topbar
                        sidebarOpen={sidebarOpen}
                        setSidebarOpen={setSidebarOpen}
                    />
                    {children}
                </div>
            </div>
            {/* </BusinessProvider>
            </AuthProvider> */}
        </>
    );
}
