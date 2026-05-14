"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  beneficiaries,
  statusLabels,
  statusBadgeClass,
  type Status,
} from "@/lib/sample-data";
import { Plus, Download, Filter, Search, MoreHorizontal } from "lucide-react";

const statusOptions: { value: Status | "all"; label: string; count: number }[] = [
  { value: "all", label: "الكل", count: beneficiaries.length },
  { value: "active", label: "نشط", count: beneficiaries.filter((b) => b.status === "active").length },
  { value: "new", label: "جديد", count: beneficiaries.filter((b) => b.status === "new").length },
  { value: "pending", label: "معلّق", count: beneficiaries.filter((b) => b.status === "pending").length },
  { value: "ended", label: "منتهي", count: beneficiaries.filter((b) => b.status === "ended").length },
];

export default function BeneficiariesPage() {
  const [selectedStatus, setSelectedStatus] = useState<Status | "all">("all");
  const [query, setQuery] = useState("");
  const [selectedRow, setSelectedRow] = useState<string | null>("1010101010");

  const filtered = useMemo(() => {
    return beneficiaries.filter((b) => {
      if (selectedStatus !== "all" && b.status !== selectedStatus) return false;
      if (query && !b.name.includes(query) && !b.id.includes(query)) return false;
      return true;
    });
  }, [selectedStatus, query]);

  return (
    <>
      {/* Top breadcrumb */}
      <header className="h-11 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black flex items-center px-4 flex-shrink-0">
        <div className="text-xs text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5">
          <span>العمليات</span>
          <span>›</span>
          <span className="text-zinc-900 dark:text-white font-medium">المستفيدون</span>
        </div>
      </header>

      {/* Page header */}
      <div className="px-4 pt-4 pb-3 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black flex-shrink-0">
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-base font-semibold flex items-center gap-2">
            المستفيدون
            <span className="text-xs font-normal text-zinc-500 num">
              {beneficiaries.length}
            </span>
          </h1>
          <div className="flex items-center gap-1.5">
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-zinc-200 dark:border-zinc-700 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
              <Download className="w-3.5 h-3.5" />
              تصدير
            </button>
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-emerald-700 hover:bg-emerald-800 text-white rounded-md transition-colors">
              <Plus className="w-3.5 h-3.5" />
              مستفيد جديد
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-0.5 bg-zinc-50 dark:bg-zinc-900 rounded-md p-0.5 border border-zinc-200 dark:border-zinc-800">
            {statusOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setSelectedStatus(opt.value)}
                className={`px-3 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  selectedStatus === opt.value
                    ? "bg-white dark:bg-zinc-800 shadow-sm"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900"
                }`}
              >
                {opt.label}
                <span className="text-[10px] text-zinc-400 num">{opt.count}</span>
              </button>
            ))}
          </div>

          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-zinc-200 dark:border-zinc-700 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
            <Filter className="w-3 h-3" />
            المنطقة
          </button>
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-zinc-200 dark:border-zinc-700 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
            <Filter className="w-3 h-3" />
            الفئة
          </button>

          <div className="flex-1"></div>

          <div className="flex items-center gap-1.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-md px-2 py-1 w-64">
            <Search className="w-3.5 h-3.5 text-zinc-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ابحث بالاسم أو الهوية..."
              className="flex-1 bg-transparent outline-none text-xs"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto bg-white dark:bg-black">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800">
            <tr className="text-right">
              <th className="w-8 px-3 py-2">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wide px-3 py-2 text-right">
                الهوية
              </th>
              <th className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wide px-3 py-2 text-right">
                الاسم
              </th>
              <th className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wide px-3 py-2 text-right">
                الحالة
              </th>
              <th className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wide px-3 py-2 text-right">
                الفئة
              </th>
              <th className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wide px-3 py-2 text-right">
                المنطقة
              </th>
              <th className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wide px-3 py-2 text-right">
                الأفراد
              </th>
              <th className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wide px-3 py-2 text-right">
                آخر مساعدة
              </th>
              <th className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wide px-3 py-2 text-right">
                الإجمالي
              </th>
              <th className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wide px-3 py-2 text-right">
                الباحث
              </th>
              <th className="w-8 px-3 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((b) => (
              <tr
                key={b.id}
                onClick={() => setSelectedRow(b.id)}
                className={`border-b border-zinc-100 dark:border-zinc-800 cursor-pointer transition-colors ${
                  selectedRow === b.id
                    ? "bg-emerald-50 dark:bg-emerald-950/30"
                    : "hover:bg-zinc-50 dark:hover:bg-zinc-900"
                }`}
              >
                <td className="px-3 py-2" onClick={(e) => e.stopPropagation()}>
                  <input type="checkbox" className="rounded" />
                </td>
                <td className="px-3 py-2 num text-zinc-500 text-xs">{b.id}</td>
                <td className="px-3 py-2">
                  <Link
                    href={`/admin/beneficiaries/${b.id}`}
                    className="flex items-center gap-2 hover:underline"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-700 to-emerald-900 flex items-center justify-center text-white text-[10px] font-semibold flex-shrink-0">
                      {b.name.charAt(0)}
                    </div>
                    <span className="font-medium">{b.name}</span>
                  </Link>
                </td>
                <td className="px-3 py-2">
                  <span className={`badge ${statusBadgeClass[b.status]}`}>
                    <span className="badge-dot"></span>
                    {statusLabels[b.status]}
                  </span>
                </td>
                <td className="px-3 py-2">
                  <span
                    className={`inline-flex items-center justify-center w-5 h-5 rounded text-[10px] font-bold ${
                      b.grade === "A"
                        ? "bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400"
                        : b.grade === "B"
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400"
                        : b.grade === "C"
                        ? "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400"
                        : "bg-zinc-50 text-zinc-400 dark:bg-zinc-900"
                    }`}
                  >
                    {b.grade}
                  </span>
                </td>
                <td className="px-3 py-2 text-xs text-zinc-600 dark:text-zinc-400">{b.region}</td>
                <td className="px-3 py-2 num text-xs text-zinc-600 dark:text-zinc-400">{b.members}</td>
                <td className="px-3 py-2 text-xs text-zinc-600 dark:text-zinc-400">{b.lastAid}</td>
                <td className="px-3 py-2 num font-medium text-xs">
                  {b.total.toLocaleString("ar-SA")}
                  <span className="text-zinc-400 text-[10px] mr-1">ر.س</span>
                </td>
                <td className="px-3 py-2 text-xs text-zinc-600 dark:text-zinc-400">{b.worker}</td>
                <td className="px-3 py-2" onClick={(e) => e.stopPropagation()}>
                  <button className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded transition-colors">
                    <MoreHorizontal className="w-3.5 h-3.5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom bar */}
      <div className="h-9 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black flex items-center justify-between px-4 flex-shrink-0 text-xs text-zinc-500">
        <div>
          عرض <span className="num text-zinc-900 dark:text-white">{filtered.length}</span> من{" "}
          <span className="num">{beneficiaries.length}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full live-dot"></span>
          مزامنة لحظية
        </div>
      </div>
    </>
  );
}
