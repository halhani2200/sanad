import { AdminSidebar } from "@/components/admin/admin-sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-zinc-50 dark:bg-black">
      <AdminSidebar />
      <main className="flex-1 overflow-hidden flex flex-col">{children}</main>
    </div>
  );
}
