import HeaderMenu from '@/app/components/header-menu';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen min-w-screen bg-gray-100 p-10">
      <HeaderMenu />
      <div className="py-6">{children}</div>
    </div>
  );
}
