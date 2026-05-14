import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Heart, Search, LogIn } from "lucide-react";

const navItems = [
  { label: "الرئيسية", href: "/" },
  { label: "الحملات", href: "/campaigns" },
  { label: "الكفالات", href: "/sponsorships" },
  { label: "قصص النجاح", href: "/stories" },
  { label: "الأخبار", href: "/news" },
  { label: "التطوع", href: "/volunteer" },
  { label: "من نحن", href: "/about" },
  { label: "التقارير", href: "/reports" },
  { label: "اتصل بنا", href: "/contact" },
];

export function PublicNav() {
  return (
    <header className="sticky top-0 z-40 glass border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-9 h-9 rounded-xl gradient-brand flex items-center justify-center text-white font-bold shadow-lg">
              س
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold">سَنَد</div>
              <div className="text-[10px] text-zinc-500">منصة الجمعيات</div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button
              aria-label="بحث"
              className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
            <ThemeToggle />
            <Link
              href="/admin"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-sm border border-zinc-200 dark:border-zinc-700 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              <LogIn className="w-4 h-4" />
              <span>دخول</span>
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 gradient-gold text-white text-sm font-semibold rounded-md shadow-md hover:shadow-lg transition-shadow"
            >
              <Heart className="w-3.5 h-3.5" fill="currentColor" />
              تبرّع
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
