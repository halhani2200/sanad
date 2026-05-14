import { PublicSidebar } from "@/components/public/public-sidebar";
import { PublicTopbar } from "@/components/public/public-topbar";
import { PublicFooter } from "@/components/public/public-footer";
import { HijriRibbon } from "@/components/public/hijri-ribbon";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <PublicSidebar />
      <div className="flex-1 min-w-0 flex flex-col">
        <HijriRibbon />
        <PublicTopbar />
        <main className="flex-1">{children}</main>
        <PublicFooter />
      </div>
    </div>
  );
}
