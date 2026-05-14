import { PublicNav } from "@/components/public/public-nav";
import { PublicFooter } from "@/components/public/public-footer";
import { HijriRibbon } from "@/components/public/hijri-ribbon";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HijriRibbon />
      <PublicNav />
      <main className="flex-1">{children}</main>
      <PublicFooter />
    </>
  );
}
