"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Megaphone,
  Heart,
  Award,
  Newspaper,
  HandHeart,
  Info,
  BarChart3,
  Phone,
  Sparkles,
  Baby,
  GraduationCap,
} from "lucide-react";

const navItems = [
  { label: "الرئيسية", href: "/", icon: Home },
  { label: "الحملات", href: "/campaigns", icon: Megaphone, badge: "3" },
  { label: "الكفالات", href: "/sponsorships", icon: Heart, badge: "489" },
  { label: "كفالة يتيم", href: "/sponsorships/orphans", icon: Baby, indent: true },
  { label: "كفالة طالب", href: "/sponsorships/students", icon: GraduationCap, indent: true },
  { label: "حاسبة الزكاة", href: "/zakat", icon: Sparkles },
  { label: "قصص النجاح", href: "/stories", icon: Award },
  { label: "الأخبار", href: "/news", icon: Newspaper },
  { label: "التطوع", href: "/volunteer", icon: HandHeart },
  { label: "من نحن", href: "/about", icon: Info },
  { label: "التقارير السنوية", href: "/reports", icon: BarChart3 },
  { label: "اتصل بنا", href: "/contact", icon: Phone },
];

export function PublicSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex flex-col w-56 bg-white dark:bg-black border-l border-zinc-200 dark:border-zinc-800 flex-shrink-0 sticky top-0 h-screen overflow-y-auto">
      {/* Logo */}
      <Link
        href="/"
        className="px-4 py-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0">
          س
        </div>
        <div className="min-w-0">
          <div className="text-sm font-bold">سَنَد</div>
          <div className="text-[10px] text-zinc-500 truncate">منصة الجمعيات</div>
        </div>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-3 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors mb-0.5 ${
                item.indent ? "mr-4" : ""
              } ${
                isActive
                  ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400"
                  : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-emerald-700 dark:hover:text-emerald-400"
              }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="text-[10px] px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded-full text-zinc-500 font-semibold num">
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Donate CTA at bottom */}
      <div className="p-3 border-t border-zinc-200 dark:border-zinc-800">
        <Link
          href="/donate"
          className="flex items-center justify-center gap-2 w-full px-3 py-2.5 gradient-gold text-white text-sm font-bold rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Heart className="w-4 h-4" fill="currentColor" />
          تبرّع الآن
        </Link>
        <p className="text-[10px] text-zinc-500 text-center mt-2 leading-relaxed">
          عطاؤك يصنع فرقاً حقيقياً
        </p>
      </div>
    </aside>
  );
}
