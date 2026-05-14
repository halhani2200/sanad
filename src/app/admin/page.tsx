import { TrendingUp, Users, Heart, FileText, Wallet } from "lucide-react";

const kpis = [
  { label: "مستفيد نشط", value: "547", trend: "+12 هذا الأسبوع", icon: Users, color: "emerald" },
  { label: "متبرع مسجّل", value: "21,432", trend: "+147 الشهر", icon: Heart, color: "rose" },
  { label: "تبرعات هذا الشهر", value: "384,250", trend: "↑ 23%", icon: Wallet, color: "amber", suffix: "ر.س" },
  { label: "يتيم/مكفول", value: "489", trend: "312 كافل", icon: Heart, color: "purple" },
];

const activity = [
  { who: "عبدالله الدوسري", what: "تبرع بـ 500 ر.س", when: "قبل دقيقتين", type: "donation" },
  { who: "أم خالد العتيبي", what: "قدّمت طلب مساعدة", when: "قبل 8 دقائق", type: "request" },
  { who: "محمد القحطاني", what: "كفل يتيماً جديداً", when: "قبل 15 دقيقة", type: "sponsor" },
  { who: "نظام", what: "صدر إيصال DEMO-2026-04832", when: "قبل 23 دقيقة", type: "receipt" },
  { who: "أسرة آل صالح", what: "اعتُمد طلبهم", when: "قبل 38 دقيقة", type: "approved" },
];

export default function AdminDashboardPage() {
  return (
    <>
      {/* Top breadcrumb */}
      <header className="h-11 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black flex items-center px-4 flex-shrink-0">
        <div className="text-xs text-zinc-600 dark:text-zinc-400">
          <span className="text-zinc-900 dark:text-white font-medium">اليوم</span>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-7xl mx-auto">
          {/* Greeting */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1 text-xs text-emerald-700 dark:text-emerald-400">
              <span className="w-2 h-2 bg-emerald-500 rounded-full live-dot"></span>
              النظام يعمل بشكل طبيعي
            </div>
            <h1 className="text-2xl font-bold">أهلاً بك، أبا محمد</h1>
            <p className="text-sm text-zinc-500 mt-1">
              لديك <strong className="text-zinc-900 dark:text-white">8</strong> مهمة لليوم،{" "}
              <strong className="text-amber-600">3</strong> منها تتطلّب اعتمادك
            </p>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
            {kpis.map((kpi, i) => {
              const Icon = kpi.icon;
              return (
                <div
                  key={i}
                  className="admin-card p-4"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div
                      className={`w-8 h-8 rounded-md flex items-center justify-center bg-${kpi.color}-100 dark:bg-${kpi.color}-950/40`}
                    >
                      <Icon className={`w-4 h-4 text-${kpi.color}-700 dark:text-${kpi.color}-400`} />
                    </div>
                    <TrendingUp className="w-3 h-3 text-emerald-600" />
                  </div>
                  <div className="text-2xl font-bold num">
                    {kpi.value}
                    {kpi.suffix && (
                      <span className="text-xs font-normal text-zinc-500 mr-1">
                        {kpi.suffix}
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">{kpi.label}</div>
                  <div className="text-[10px] text-emerald-600 mt-1">{kpi.trend}</div>
                </div>
              );
            })}
          </div>

          {/* Two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {/* Activity */}
            <div className="lg:col-span-2 admin-card overflow-hidden">
              <div className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                <h2 className="text-sm font-bold">النشاط اللحظي</h2>
                <span className="flex items-center gap-1.5 text-[11px] text-emerald-700 dark:text-emerald-400">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full live-dot"></span>
                  مباشر
                </span>
              </div>
              <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {activity.map((a, i) => (
                  <div
                    key={i}
                    className="px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="text-sm">
                          <span className="font-medium">{a.who}</span>{" "}
                          <span className="text-zinc-600 dark:text-zinc-400">{a.what}</span>
                        </div>
                      </div>
                      <span className="text-[11px] text-zinc-500 flex-shrink-0">
                        {a.when}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick actions */}
            <div className="admin-card overflow-hidden">
              <div className="px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
                <h2 className="text-sm font-bold">إجراءات سريعة</h2>
              </div>
              <div className="p-3 space-y-2">
                <a
                  href="/admin/beneficiaries"
                  className="flex items-center gap-2 px-3 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-md text-sm transition-colors"
                >
                  <Users className="w-4 h-4 text-emerald-700" />
                  <span className="flex-1">عرض المستفيدين</span>
                  <span className="text-[10px] text-zinc-400">547</span>
                </a>
                <a
                  href="/admin/requests"
                  className="flex items-center gap-2 px-3 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-md text-sm transition-colors"
                >
                  <FileText className="w-4 h-4 text-amber-600" />
                  <span className="flex-1">طلبات معلّقة</span>
                  <span className="text-[10px] text-amber-600 font-semibold">23</span>
                </a>
                <a
                  href="/admin/donations"
                  className="flex items-center gap-2 px-3 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 rounded-md text-sm transition-colors"
                >
                  <Wallet className="w-4 h-4 text-blue-600" />
                  <span className="flex-1">سجل التبرعات</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
