import HeaderMenu from "@/app/components/header-menu";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-gray-100 min-h-screen min-w-screen p-5">
            <HeaderMenu/>
            {children}
        </div>
    )
}