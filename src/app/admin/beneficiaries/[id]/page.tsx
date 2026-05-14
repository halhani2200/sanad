import Link from "next/link";
import { notFound } from "next/navigation";
import { beneficiaries, statusLabels, statusBadgeClass } from "@/lib/sample-data";
import {
  ArrowLeft,
  Phone,
  MessageCircle,
  Edit,
  Plus,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type Params = Promise<{ id: string }>;

export default async function BeneficiaryProfilePage({ params }: { params: Params }) {
  const { id: rawId } = await params;
  const id = decodeURIComponent(rawId);
  const b = beneficiaries.find((x) => x.id === id);
  if (!b) return notFound();

  return (
    <>
      <header className="h-11 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black flex items-center px-4 flex-shrink-0">
        <Link
          href="/admin/beneficiaries"
          className="text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white flex items-center gap-1"
        >
          <ArrowLeft className="w-3 h-3" />
          العودة للقائمة
        </Link>
        <div className="text-xs text-zinc-600 dark:text-zinc-400 mr-3 flex items-center gap-1.5">
          <span>›</span>
          <span className="text-zinc-900 dark:text-white font-medium">{b.name}</span>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto bg-zinc-50 dark:bg-black">
        {/* Profile hero */}
        <section className="bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800 px-6 py-5">
          <div className="max-w-7xl mx-auto flex items-start gap-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-700 to-emerald-900 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
              {b.name.charAt(0)}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h1 className="text-xl font-semibold">{b.name}</h1>
                    <span className="badge badge-new">
                      <ShieldCheck className="w-3 h-3" />
                      موثّق
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-zinc-600 dark:text-zinc-400 flex-wrap">
                    <span className="num">🇸🇦 {b.id}</span>
                    <span>·</span>
                    <span>📍 {b.region}</span>
                    <span>·</span>
                    <span>{b.members} أفراد</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-zinc-200 dark:border-zinc-700 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                    <Phone className="w-3.5 h-3.5" /> اتصال
                  </button>
                  <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-zinc-200 dark:border-zinc-700 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                    <MessageCircle className="w-3.5 h-3.5" /> واتساب
                  </button>
                  <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-zinc-200 dark:border-zinc-700 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                    <Edit className="w-3.5 h-3.5" /> تعديل
                  </button>
                  <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-emerald-700 hover:bg-emerald-800 text-white rounded-md transition-colors">
                    <Plus className="w-3.5 h-3.5" /> صرف مساعدة
                  </button>
                </div>
              </div>

              {/* Roles */}
              <div className="flex items-center gap-1.5 flex-wrap mt-3">
                <span className={`badge ${statusBadgeClass[b.status]}`}>
                  <span className="badge-dot"></span>
                  مستفيد · فئة {b.grade} · {statusLabels[b.status]}
                </span>
                <span className="badge badge-info">
                  <span className="badge-dot"></span>
                  متبرع · 47,500 ر.س
                </span>
                <span className="badge badge-info">
                  <span className="badge-dot"></span>
                  كافل · 3 أيتام
                </span>
              </div>
            </div>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-7xl mx-auto mt-5">
            <div className="admin-card p-3">
              <div className="text-[10px] font-semibold uppercase text-zinc-500 tracking-wide mb-1">
                إجمالي المستلم
              </div>
              <div className="text-lg font-semibold num">
                {b.total.toLocaleString("ar-SA")}{" "}
                <span className="text-xs text-zinc-500 font-normal">ر.س</span>
              </div>
            </div>
            <div className="admin-card p-3">
              <div className="text-[10px] font-semibold uppercase text-zinc-500 tracking-wide mb-1">
                إجمالي التبرّع
              </div>
              <div className="text-lg font-semibold num">
                47,500 <span className="text-xs text-zinc-500 font-normal">ر.س</span>
              </div>
            </div>
            <div className="admin-card p-3">
              <div className="text-[10px] font-semibold uppercase text-zinc-500 tracking-wide mb-1">
                عدد الأفراد
              </div>
              <div className="text-lg font-semibold num">{b.members}</div>
            </div>
            <div className="admin-card p-3">
              <div className="text-[10px] font-semibold uppercase text-zinc-500 tracking-wide mb-1">
                آخر زيارة
              </div>
              <div className="text-lg font-semibold">{b.lastAid}</div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 space-y-5">
            {/* AI Insight */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/30 dark:to-amber-900/20 border border-amber-200 dark:border-amber-900 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-md bg-gradient-to-br from-amber-600 to-amber-700 flex items-center justify-center text-white flex-shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-amber-900 dark:text-amber-200">
                      رؤية ذكية
                    </span>
                  </div>
                  <ul className="text-xs space-y-1.5 text-amber-900/90 dark:text-amber-200/90 leading-relaxed">
                    <li>• التقرير الاجتماعي قبل 8 أشهر — مستحقّ مراجعة</li>
                    <li>• نشاط التبرع تباطأ — لم يتبرّع منذ 47 يوم</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Aid status */}
            <div className="admin-card overflow-hidden">
              <div className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                <h3 className="text-sm font-semibold">حالة المساعدات الشهرية</h3>
              </div>
              <div className="p-4">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  المساعدات الشهرية مستمرة، آخر صرف قبل {b.lastAid}.
                </p>
                <div className="mt-3 grid grid-cols-3 gap-3 pt-3 border-t border-zinc-100 dark:border-zinc-800 text-xs">
                  <div>
                    <div className="text-zinc-500">الفئة</div>
                    <div className="font-medium mt-0.5">
                      {b.grade} · أولوية عالية
                    </div>
                  </div>
                  <div>
                    <div className="text-zinc-500">المتوسط</div>
                    <div className="font-medium mt-0.5 num">2,500 ر.س</div>
                  </div>
                  <div>
                    <div className="text-zinc-500">المراجعة القادمة</div>
                    <div className="font-medium mt-0.5">قبل 14 يوم</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="space-y-5">
            <div className="admin-card overflow-hidden">
              <div className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                <h3 className="text-sm font-semibold">المعلومات الشخصية</h3>
              </div>
              <div className="p-4 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-zinc-500">الهوية</span>
                  <span className="num">{b.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">المنطقة</span>
                  <span>{b.region}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">الباحث</span>
                  <span>{b.worker}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">عدد الأفراد</span>
                  <span className="num">{b.members}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
