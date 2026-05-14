"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  Home,
  Users,
  FileText,
  Heart,
  Megaphone,
  Wallet,
  BarChart3,
  Shield,
  Truck,
  Settings,
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  icon: typeof Home;
  count?: string;
};

const sections: { title?: string; items: NavItem[] }[] = [
  {
    items: [
      { label: "اليوم", href: "/admin", icon: Home },
    ],
  },
  {
    title: "العمليات",
    items: [
      { label: "المستفيدون", href: "/admin/beneficiaries", icon: Users, count: "547" },
      { label: "الطلبات", href: "/admin/requests", icon: FileText, count: "23" },
      { label: "الكفالات والأيتام", href: "/admin/sponsorships", icon: Heart, count: "312" },
      { label: "الحملات", href: "/admin/campaigns", icon: Megaphone, count: "3" },
    ],
  },
  {
    title: "المالية",
    items: [
      { label: "التبرعات", href: "/admin/donations", icon: Wallet },
      { label: "المالية", href: "/admin/finance", icon: BarChart3 },
    ],
  },
  {
    title: "الإدارة",
    items: [
      { label: "الحوكمة", href: "/admin/governance", icon: Shield },
      { label: "الإعلام والاستقبال", href: "/admin/media", icon: Truck },
      { label: "التقارير", href: "/admin/reports", icon: BarChart3 },
      { label: "الإعدادات", href: "/admin/settings", icon: Settings },
    ],
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 bg-white dark:bg-black border-l border-zinc-200 dark:border-zinc-800 flex flex-col flex-shrink-0">
      {/* Logo */}
      <div className="px-3 py-3 border-b border-zinc-200 dark:border-zinc-800 flex items-center gap-2">
        <div className="w-7 h-7 rounded-md gradient-brand flex items-center justify-center text-white font-bold text-xs">
          س
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[13px] font-semibold truncate">سَنَد</div>
          <div className="text-[10px] text-zinc-500 truncate">النظام الإداري</div>
        </div>
      </div>

      {/* Search hint */}
      <div className="p-2 border-b border-zinc-200 dark:border-zinc-800">
        <button className="w-full flex items-center gap-2 px-2 py-1.5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md text-zinc-500 text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
          <Search className="w-3.5 h-3.5" />
          <span className="flex-1 text-right">بحث...</span>
          <kbd className="px-1.5 py-0.5 text-[10px] bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-2 py-2">
        {sections.map((section, si) => (
          <div key={si}>
            {section.title && (
              <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400 px-2 pt-3 pb-1">
                {section.title}
              </div>
            )}
            {section.items.map((item) => {
              const Icon = item.icon;
              const isActive =
                item.href === "/admin"
                  ? pathname === "/admin"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[13px] font-medium transition-colors ${
                    isActive
                      ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="flex-1">{item.label}</span>
                  {item.count && (
                    <span className="text-[11px] text-zinc-400 num">
                      {item.count}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Bottom: user + theme */}
      <div className="border-t border-zinc-200 dark:border-zinc-800 p-2 flex items-center gap-1">
        <button className="flex-1 flex items-center gap-2 p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-md transition-colors min-w-0">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-700 to-emerald-900 flex items-center justify-center text-white text-[10px] font-semibold flex-shrink-0">
            ح
          </div>
          <div className="flex-1 min-w-0 text-right">
            <div className="text-xs font-semibold truncate">حسين آل هاني</div>
            <div className="text-[10px] text-zinc-500 truncate">فني شبكات</div>
          </div>
          <ChevronDown className="w-3 h-3 text-zinc-400" />
        </button>
        <ThemeToggle />
      </div>
    </aside>
  );
}
