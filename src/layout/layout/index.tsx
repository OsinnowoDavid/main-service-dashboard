import { useState } from "react";
import AdminSidebar from "@/layout/sidebar";
import AdminTopbar from "@/layout/topbar";

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
            <div className="flex h-full w-full min-h-screen">
                <AdminSidebar
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />
                <div className="flex flex-col w-full lg:max-w-[calc(100vw-208px)]">
                    <AdminTopbar
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
