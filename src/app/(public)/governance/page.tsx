import Link from "next/link";
import {
  ShieldCheck,
  Users,
  FileText,
  Eye,
  Award,
  BarChart3,
  Download,
  ArrowLeft,
  Briefcase,
  ChevronLeft,
  Scale,
  Building2,
  Target,
  GitBranch,
  HeartHandshake,
  Wallet,
  GraduationCap,
  Search,
  ClipboardList,
  ExternalLink,
} from "lucide-react";

const board = [
  { name: "د. أحمد بن علي الصفّار", role: "رئيس مجلس الإدارة", since: "2024", color: "amber" },
  { name: "م. محمد بن يوسف الحسن", role: "نائب الرئيس", since: "2024", color: "amber" },
  { name: "أ. عبدالله بن سعد القطيفي", role: "الأمين العام", since: "2024", color: "blue" },
  { name: "أ. خالد بن إبراهيم الزهراء", role: "أمين الصندوق", since: "2024", color: "blue" },
  { name: "د. منيرة بنت سالم آل سعد", role: "عضو", since: "2024", color: "slate" },
  { name: "أ. حسن بن محسن الناصر", role: "عضو", since: "2024", color: "slate" },
  { name: "م. عبدالعزيز بن فهد العبدل", role: "عضو", since: "2024", color: "slate" },
  { name: "د. هند بنت ناصر الرشيد", role: "عضو", since: "2024", color: "slate" },
  { name: "أ. سلمان بن عبدالله الدوس", role: "عضو", since: "2024", color: "slate" },
];

const committees = [
  { name: "لجنة الترشيحات والمكافآت", icon: Award, desc: "ترشيح الأعضاء وإدارة المكافآت", members: 5, color: "amber" },
  { name: "لجنة صندوق الزواج", icon: HeartHandshake, desc: "إدارة مساعدات الزواج للمحتاجين", members: 4, color: "rose" },
  { name: "لجنة المراجعة الداخلية", icon: Search, desc: "مراجعة العمليات والامتثال", members: 3, color: "blue" },
  { name: "اللجنة الاجتماعية", icon: Users, desc: "البرامج والفعاليات الاجتماعية", members: 6, color: "emerald" },
  { name: "لجنة التدريب والتأهيل", icon: GraduationCap, desc: "تدريب الموظفين والمتطوعين", members: 4, color: "purple" },
  { name: "لجنة الاستثمار", icon: Wallet, desc: "إدارة استثمارات الأوقاف", members: 4, color: "green" },
];

const documents = [
  { name: "النظام الأساسي", type: "PDF", size: "2.4 MB", updated: "1447/03/15", icon: Scale },
  { name: "الهيكل التنظيمي", type: "PDF", size: "1.1 MB", updated: "1447/01/10", icon: GitBranch },
  { name: "الخطة الاستراتيجية 1447-1450هـ", type: "PDF", size: "5.8 MB", updated: "1447/01/05", icon: Target },
  { name: "الخطة التشغيلية للعام 1447هـ", type: "PDF", size: "3.2 MB", updated: "1447/02/22", icon: ClipboardList },
  { name: "اللائحة المالية", type: "PDF", size: "1.7 MB", updated: "1446/12/03", icon: Wallet },
  { name: "لائحة الموارد البشرية", type: "PDF", size: "2.1 MB", updated: "1446/10/15", icon: Users },
];

const disclosures = [
  { name: "إفصاحات الموظفين", count: 14 },
  { name: "السجلات التجارية", count: 3 },
  { name: "الصلات العائلية", count: 0 },
  { name: "العلاقات التجارية", count: 5 },
  { name: "العقارات والاستثمارات", count: 8 },
];

const licenses = [
  { name: "تصريح جمع التبرعات", number: "M-1447-0042", issuer: "وزارة الموارد البشرية", valid: "1448/06/30" },
  { name: "تصريح الموقع الإلكتروني", number: "W-2024-0187", issuer: "هيئة الاتصالات", valid: "1448/03/15" },
  { name: "شهادة تسجيل الجمعية", number: "C-1407-0023", issuer: "المركز الوطني NCNP", valid: "دائم" },
];

const reports = [
  { year: "1447هـ", admin: true, financial: true, audited: true, hot: true },
  { year: "1446هـ", admin: true, financial: true, audited: true, hot: false },
  { year: "1445هـ", admin: true, financial: true, audited: true, hot: false },
  { year: "1444هـ", admin: true, financial: true, audited: true, hot: false },
];

const boardTerms = [
  { number: "21", years: "1447-1450هـ", current: true },
  { number: "20", years: "1444-1447هـ", current: false },
  { number: "19", years: "1441-1444هـ", current: false },
  { number: "18", years: "1438-1441هـ", current: false },
];

export default function GovernancePage() {
  return (
    <>
      {/* Compact hero */}
      <section className="relative h-44 sm:h-48 overflow-hidden">
        <div className="absolute inset-0 gradient-brand"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-400/20 rounded-full translate-y-1/2 translate-x-1/2 blur-2xl"></div>

        <div className="relative h-full max-w-6xl mx-auto px-6 sm:px-8 flex items-center">
          <div className="text-white">
            <div className="flex items-center gap-2 text-xs text-emerald-100 mb-2">
              <Link href="/about" className="hover:text-white">من نحن</Link>
              <ChevronLeft className="w-3 h-3" />
              <span className="font-medium text-white">الحوكمة</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center gap-3">
              <ShieldCheck className="w-7 h-7 text-amber-300" />
              الحوكمة والشفافية
            </h1>
            <p className="text-xs sm:text-sm text-emerald-50/90 max-w-2xl">
              نلتزم بأعلى معايير الشفافية وفقاً للائحة المركز الوطني لتنمية القطاع غير الربحي
            </p>
          </div>
        </div>

        <svg
          className="absolute bottom-0 right-0 left-0 w-full text-[var(--background)]"
          viewBox="0 0 1440 30"
          preserveAspectRatio="none"
        >
          <path fill="currentColor" d="M0,30 L1440,30 L1440,15 C1200,25 720,5 0,15 Z" />
        </svg>
      </section>

      {/* Quick stats */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 shadow-md">
            <Users className="w-4 h-4 text-emerald-700 mb-1" />
            <div className="text-xl font-bold num">9</div>
            <div className="text-[10px] text-zinc-500">عضو مجلس إدارة</div>
          </div>
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 shadow-md">
            <Briefcase className="w-4 h-4 text-amber-600 mb-1" />
            <div className="text-xl font-bold num">6</div>
            <div className="text-[10px] text-zinc-500">لجنة دائمة</div>
          </div>
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 shadow-md">
            <FileText className="w-4 h-4 text-blue-600 mb-1" />
            <div className="text-xl font-bold num">{documents.length + reports.length}</div>
            <div className="text-[10px] text-zinc-500">وثيقة منشورة</div>
          </div>
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 shadow-md">
            <BarChart3 className="w-4 h-4 text-purple-600 mb-1" />
            <div className="text-xl font-bold num">95%</div>
            <div className="text-[10px] text-zinc-500">معدّل الشفافية</div>
          </div>
        </div>
      </section>

      {/* Anchor nav */}
      <nav className="sticky top-[80px] z-20 bg-white/95 dark:bg-black/95 backdrop-blur border-b border-zinc-200 dark:border-zinc-800 mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1 overflow-x-auto py-2 no-scrollbar">
          {[
            { id: "board", label: "مجلس الإدارة", icon: Users },
            { id: "committees", label: "اللجان", icon: Briefcase },
            { id: "documents", label: "الوثائق", icon: FileText },
            { id: "disclosures", label: "الإفصاحات", icon: Eye },
            { id: "licenses", label: "التراخيص", icon: Award },
            { id: "reports", label: "التقارير", icon: BarChart3 },
            { id: "terms", label: "الدورات السابقة", icon: GitBranch },
          ].map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-emerald-700 dark:hover:text-emerald-400 rounded-md transition-colors whitespace-nowrap"
              >
                <Icon className="w-3.5 h-3.5" />
                {s.label}
              </a>
            );
          })}
        </div>
      </nav>

      {/* SECTION: Board */}
      <section id="board" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-32">
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-700" />
              مجلس الإدارة
            </h2>
            <p className="text-xs text-zinc-500 mt-0.5">
              الدورة الحادية والعشرون · 1447-1450هـ
            </p>
          </div>
          <Link
            href="/governance/board"
            className="text-xs text-emerald-700 dark:text-emerald-400 hover:underline"
          >
            السير الذاتية ←
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {board.map((m, i) => (
            <div
              key={i}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-3 flex items-center gap-3 hover:border-emerald-500 transition-colors"
            >
              <div
                className={`w-11 h-11 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0 ${
                  m.color === "amber"
                    ? "bg-gradient-to-br from-amber-500 to-amber-700"
                    : m.color === "blue"
                    ? "bg-gradient-to-br from-blue-600 to-blue-800"
                    : "bg-gradient-to-br from-zinc-500 to-zinc-700"
                }`}
              >
                {m.name.charAt(2)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold truncate">{m.name}</div>
                <div className="text-[11px] text-zinc-500 mt-0.5">
                  {m.role} · منذ {m.since}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: Committees */}
      <section id="committees" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-32">
        <div className="mb-4">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-amber-600" />
            اللجان الدائمة
          </h2>
          <p className="text-xs text-zinc-500 mt-0.5">
            6 لجان متخصّصة تعمل تحت إشراف مجلس الإدارة
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {committees.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 hover:border-emerald-500 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 bg-${c.color}-100 dark:bg-${c.color}-950/40`}
                  >
                    <Icon
                      className={`w-4 h-4 text-${c.color}-700 dark:text-${c.color}-400`}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold">{c.name}</h3>
                    <p className="text-[11px] text-zinc-500 mt-0.5 leading-relaxed">
                      {c.desc}
                    </p>
                    <div className="text-[10px] text-zinc-400 mt-1.5 num">
                      {c.members} أعضاء
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION: Documents */}
      <section id="documents" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-32">
        <div className="mb-4">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            الوثائق التنظيمية
          </h2>
          <p className="text-xs text-zinc-500 mt-0.5">
            النظام الأساسي واللوائح والخطط — متاحة للتحميل
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl divide-y divide-zinc-100 dark:divide-zinc-800">
          {documents.map((d, i) => {
            const Icon = d.icon;
            return (
              <a
                key={i}
                href="#"
                className="flex items-center gap-3 px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors group"
              >
                <div className="w-9 h-9 rounded-md bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-blue-700 dark:text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                    {d.name}
                  </div>
                  <div className="text-[10px] text-zinc-500 mt-0.5 flex items-center gap-1.5">
                    <span>{d.type}</span>
                    <span>·</span>
                    <span className="num">{d.size}</span>
                    <span>·</span>
                    <span>محدّث {d.updated}</span>
                  </div>
                </div>
                <button className="flex items-center gap-1 px-3 py-1.5 text-[11px] font-semibold border border-zinc-200 dark:border-zinc-700 rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:border-emerald-500 hover:text-emerald-700 transition-colors flex-shrink-0">
                  <Download className="w-3 h-3" />
                  تنزيل
                </button>
              </a>
            );
          })}
        </div>
      </section>

      {/* SECTION: Disclosures */}
      <section id="disclosures" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-32">
        <div className="mb-4">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Eye className="w-5 h-5 text-purple-600" />
            الإفصاحات
          </h2>
          <p className="text-xs text-zinc-500 mt-0.5">
            شفافية كاملة في تضارب المصالح والعلاقات
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {disclosures.map((d, i) => (
            <Link
              key={i}
              href="#"
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 hover:border-emerald-500 transition-colors group"
            >
              <div className="text-2xl font-bold num text-purple-700 dark:text-purple-400 mb-1">
                {d.count}
              </div>
              <div className="text-xs font-medium leading-tight group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                {d.name}
              </div>
              <div className="text-[10px] text-zinc-500 mt-1.5 flex items-center gap-1">
                عرض التفاصيل
                <ArrowLeft className="w-2.5 h-2.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION: Licenses */}
      <section id="licenses" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-32">
        <div className="mb-4">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-700" />
            التراخيص والاعتمادات
          </h2>
          <p className="text-xs text-zinc-500 mt-0.5">جميع التصاريح الرسمية سارية المفعول</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {licenses.map((l, i) => (
            <div
              key={i}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4"
            >
              <div className="flex items-start justify-between mb-2">
                <Award className="w-5 h-5 text-emerald-700" />
                <span className="text-[10px] px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 rounded-full font-semibold">
                  ساري
                </span>
              </div>
              <h3 className="text-sm font-bold mb-1.5">{l.name}</h3>
              <div className="space-y-1 text-[11px] text-zinc-500">
                <div className="flex justify-between">
                  <span>الرقم</span>
                  <span className="num text-zinc-700 dark:text-zinc-300">{l.number}</span>
                </div>
                <div className="flex justify-between">
                  <span>جهة الإصدار</span>
                  <span className="text-zinc-700 dark:text-zinc-300">{l.issuer}</span>
                </div>
                <div className="flex justify-between">
                  <span>سارٍ حتى</span>
                  <span className="num text-zinc-700 dark:text-zinc-300">{l.valid}</span>
                </div>
              </div>
              <button className="mt-3 w-full flex items-center justify-center gap-1 py-1.5 text-[11px] font-semibold border border-zinc-200 dark:border-zinc-700 rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:border-emerald-500 hover:text-emerald-700 transition-colors">
                <ExternalLink className="w-3 h-3" />
                عرض التصريح
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: Annual Reports */}
      <section id="reports" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-32">
        <div className="mb-4">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-rose-600" />
            التقارير السنوية
          </h2>
          <p className="text-xs text-zinc-500 mt-0.5">
            التقارير الإدارية والمالية المُدقّقة
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
          <div className="grid grid-cols-5 px-4 py-2 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-[11px] font-semibold text-zinc-500 uppercase">
            <div>السنة</div>
            <div>إداري</div>
            <div>مالي</div>
            <div>مُدقَّق</div>
            <div className="text-left">إجراءات</div>
          </div>
          {reports.map((r, i) => (
            <div
              key={i}
              className="grid grid-cols-5 px-4 py-3 border-b border-zinc-100 dark:border-zinc-800 last:border-0 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors items-center"
            >
              <div className="flex items-center gap-2">
                <span className="font-semibold num">{r.year}</span>
                {r.hot && (
                  <span className="text-[9px] px-1.5 py-0.5 bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 rounded-full font-semibold">
                    أحدث
                  </span>
                )}
              </div>
              <div>{r.admin && <span className="text-emerald-600">✓</span>}</div>
              <div>{r.financial && <span className="text-emerald-600">✓</span>}</div>
              <div>{r.audited && <span className="text-emerald-600">✓</span>}</div>
              <div className="text-left">
                <button className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-semibold border border-zinc-200 dark:border-zinc-700 rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:border-emerald-500 hover:text-emerald-700 transition-colors">
                  <Download className="w-2.5 h-2.5" />
                  تنزيل
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: Historical board terms */}
      <section id="terms" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-32">
        <div className="mb-4">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-indigo-600" />
            الدورات السابقة
          </h2>
          <p className="text-xs text-zinc-500 mt-0.5">سجل المجالس والدورات السابقة</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {boardTerms.map((t, i) => (
            <Link
              key={i}
              href={`/governance/terms/${t.number}`}
              className={`px-4 py-3 rounded-lg border transition-all ${
                t.current
                  ? "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-700 dark:text-emerald-400"
                  : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-emerald-500"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`text-2xl font-bold num ${
                    t.current
                      ? "text-emerald-700 dark:text-emerald-400"
                      : "text-zinc-400"
                  }`}
                >
                  {t.number}
                </div>
                <div>
                  <div className="text-sm font-semibold">الدورة الـ{t.number}</div>
                  <div className="text-[10px] text-zinc-500 num">{t.years}</div>
                  {t.current && (
                    <div className="text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold mt-0.5">
                      الدورة الحالية
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trust footer */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-gradient-to-l from-emerald-50 to-amber-50 dark:from-emerald-950/30 dark:to-amber-950/30 border border-emerald-200 dark:border-emerald-900 rounded-2xl p-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-right">
            <div className="w-12 h-12 rounded-xl gradient-brand flex items-center justify-center text-white flex-shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold mb-1">معتمدون من جهات رسمية</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                نخضع للرقابة المباشرة من المركز الوطني لتنمية القطاع غير الربحي (NCNP)،
                ونلتزم بنظام حماية البيانات الشخصية (PDPL)، وبفوترة زاتكا الإلكترونية.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg text-xs font-semibold hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors flex-shrink-0"
            >
              تواصل مع الحوكمة
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
