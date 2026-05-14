"use client";

import Link from "next/link";
import { Search, LogIn, Menu, Heart } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function PublicTopbar() {
  return (
    <header className="sticky top-0 z-30 glass border-b border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center justify-between h-12 px-4">
        {/* Mobile: hamburger + logo */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            aria-label="القائمة"
            className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center text-white font-bold text-sm">
              س
            </div>
            <span className="text-sm font-bold">سَنَد</span>
          </Link>
        </div>

        {/* Search bar (centered on desktop) */}
        <div className="hidden sm:flex items-center gap-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md px-3 py-1.5 w-80 max-w-md">
          <Search className="w-3.5 h-3.5 text-zinc-400" />
          <input
            type="text"
            placeholder="ابحث عن حملة، قصة، كفالة..."
            className="flex-1 bg-transparent outline-none text-xs"
          />
          <kbd className="px-1.5 py-0.5 text-[10px] bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded text-zinc-500">
            ⌘K
          </kbd>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Link
            href="/admin"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-zinc-200 dark:border-zinc-700 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>دخول الموظفين</span>
          </Link>
          <Link
            href="/donate"
            className="lg:hidden inline-flex items-center gap-1.5 px-3 py-1.5 gradient-gold text-white text-xs font-semibold rounded-md"
          >
            <Heart className="w-3 h-3" fill="currentColor" />
            تبرّع
          </Link>
        </div>
      </div>
    </header>
  );
}
