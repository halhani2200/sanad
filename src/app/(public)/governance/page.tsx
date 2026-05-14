"use client";

import { useState, useMemo } from "react";
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
  Phone,
  AlertTriangle,
  Clock,
  CalendarDays,
  Filter,
  CheckCircle2,
} from "lucide-react";

const board = [
  { name: "د. أحمد بن علي الصفّار", role: "رئيس مجلس الإدارة", since: "1447", committees: ["الترشيحات", "الاستثمار"], color: "amber" },
  { name: "م. محمد بن يوسف الحسن", role: "نائب الرئيس", since: "1447", committees: ["المراجعة الداخلية"], color: "amber" },
  { name: "أ. عبدالله بن سعد القطيفي", role: "الأمين العام", since: "1447", committees: ["الاجتماعية"], color: "blue" },
  { name: "أ. خالد بن إبراهيم الزهراء", role: "أمين الصندوق", since: "1447", committees: ["الاستثمار", "المراجعة"], color: "blue" },
  { name: "د. منيرة بنت سالم آل سعد", role: "عضو", since: "1447", committees: ["التدريب"], color: "slate" },
  { name: "أ. حسن بن محسن الناصر", role: "عضو", since: "1447", committees: ["الترشيحات"], color: "slate" },
  { name: "م. عبدالعزيز بن فهد العبدل", role: "عضو", since: "1447", committees: ["الاستثمار"], color: "slate" },
  { name: "د. هند بنت ناصر الرشيد", role: "عضو", since: "1447", committees: ["صندوق الزواج"], color: "slate" },
  { name: "أ. سلمان بن عبدالله الدوس", role: "عضو", since: "1447", committees: ["الاجتماعية"], color: "slate" },
];

const committees = [
  { name: "لجنة الترشيحات والمكافآت", icon: Award, desc: "ترشيح الأعضاء وإدارة المكافآت", members: 5, color: "amber" },
  { name: "لجنة صندوق الزواج", icon: HeartHandshake, desc: "إدارة مساعدات الزواج للمحتاجين", members: 4, color: "rose" },
  { name: "لجنة المراجعة الداخلية", icon: Search, desc: "مراجعة العمليات والامتثال", members: 3, color: "blue" },
  { name: "اللجنة الاجتماعية", icon: Users, desc: "البرامج والفعاليات الاجتماعية", members: 6, color: "emerald" },
  { name: "لجنة التدريب والتأهيل", icon: GraduationCap, desc: "تدريب الموظفين والمتطوعين", members: 4, color: "purple" },
  { name: "لجنة الاستثمار", icon: Wallet, desc: "إدارة استثمارات الأوقاف", members: 4, color: "green" },
];

type DocType = "نظام" | "لائحة" | "خطة" | "تقرير" | "محضر" | "إفصاح" | "ترخيص" | "سياسة";

const documents: {
  name: string;
  type: DocType;
  year: string;
  size: string;
  updated: string;
  approvedBy: string;
  status: "ساري" | "أرشيف";
  icon: typeof Scale;
}[] = [
  { name: "النظام الأساسي للجمعية", type: "نظام", year: "1447", size: "2.4 MB", updated: "1447/03/15", approvedBy: "الجمعية العمومية", status: "ساري", icon: Scale },
  { name: "الهيكل التنظيمي", type: "نظام", year: "1447", size: "1.1 MB", updated: "1447/01/10", approvedBy: "مجلس الإدارة", status: "ساري", icon: GitBranch },
  { name: "الخطة الاستراتيجية 1447-1450هـ", type: "خطة", year: "1447", size: "5.8 MB", updated: "1447/01/05", approvedBy: "الجمعية العمومية", status: "ساري", icon: Target },
  { name: "الخطة التشغيلية 1447هـ", type: "خطة", year: "1447", size: "3.2 MB", updated: "1447/02/22", approvedBy: "مجلس الإدارة", status: "ساري", icon: ClipboardList },
  { name: "اللائحة المالية", type: "لائحة", year: "1446", size: "1.7 MB", updated: "1446/12/03", approvedBy: "مجلس الإدارة", status: "ساري", icon: Wallet },
  { name: "لائحة الموارد البشرية", type: "لائحة", year: "1446", size: "2.1 MB", updated: "1446/10/15", approvedBy: "مجلس الإدارة", status: "ساري", icon: Users },
  { name: "لائحة المشتريات والعقود", type: "لائحة", year: "1445", size: "1.4 MB", updated: "1445/07/22", approvedBy: "مجلس الإدارة", status: "ساري", icon: ClipboardList },
  { name: "سياسة مكافحة غسل الأموال", type: "سياسة", year: "1446", size: "0.9 MB", updated: "1446/04/18", approvedBy: "مجلس الإدارة", status: "ساري", icon: ShieldCheck },
  { name: "سياسة تضارب المصالح", type: "سياسة", year: "1446", size: "0.7 MB", updated: "1446/02/10", approvedBy: "مجلس الإدارة", status: "ساري", icon: Eye },
  { name: "سياسة الإبلاغ عن المخالفات", type: "سياسة", year: "1447", size: "0.6 MB", updated: "1447/01/22", approvedBy: "مجلس الإدارة", status: "ساري", icon: AlertTriangle },
  { name: "محضر اجتماع الجمعية العمومية 1447", type: "محضر", year: "1447", size: "1.8 MB", updated: "1447/05/14", approvedBy: "الجمعية العمومية", status: "ساري", icon: FileText },
  { name: "محضر اجتماع مجلس الإدارة (الربع 1)", type: "محضر", year: "1447", size: "0.8 MB", updated: "1447/03/01", approvedBy: "مجلس الإدارة", status: "ساري", icon: FileText },
];

const docTypeColors: Record<DocType, string> = {
  نظام: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400",
  لائحة: "bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400",
  خطة: "bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-400",
  تقرير: "bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400",
  محضر: "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400",
  إفصاح: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400",
  ترخيص: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400",
  سياسة: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
};

const disclosures = [
  { name: "إفصاحات الموظفين", count: 14, desc: "تضارب المصالح للموظفين الإداريين" },
  { name: "السجلات التجارية", count: 3, desc: "أعضاء المجلس الذين يملكون سجلات" },
  { name: "الصلات العائلية", count: 0, desc: "علاقات قرابة بين الموظفين والأعضاء" },
  { name: "العلاقات التجارية", count: 5, desc: "تعاملات بين الجمعية والموردين" },
  { name: "العقارات والاستثمارات", count: 8, desc: "أصول ثابتة + محافظ استثمارية" },
];

const licenses = [
  { name: "تصريح جمع التبرعات", number: "M-1447-0042", issuer: "وزارة الموارد البشرية", valid: "1448/06/30" },
  { name: "تصريح الموقع الإلكتروني", number: "W-2024-0187", issuer: "هيئة الاتصالات", valid: "1448/03/15" },
  { name: "شهادة تسجيل الجمعية", number: "C-1407-0023", issuer: "المركز الوطني NCNP", valid: "دائم" },
];

const reports = [
  { year: "1447هـ", admin: "/files/report-admin-1447.pdf", financial: "/files/report-fin-1447.pdf", audited: true, hot: true },
  { year: "1446هـ", admin: "/files/report-admin-1446.pdf", financial: "/files/report-fin-1446.pdf", audited: true, hot: false },
  { year: "1445هـ", admin: "/files/report-admin-1445.pdf", financial: "/files/report-fin-1445.pdf", audited: true, hot: false },
  { year: "1444هـ", admin: "/files/report-admin-1444.pdf", financial: "/files/report-fin-1444.pdf", audited: true, hot: false },
];

const boardTerms = [
  { number: "21", years: "1447-1450هـ", current: true },
  { number: "20", years: "1444-1447هـ", current: false },
  { number: "19", years: "1441-1444هـ", current: false },
  { number: "18", years: "1438-1441هـ", current: false },
];

const docTypes: (DocType | "الكل")[] = ["الكل", "نظام", "لائحة", "خطة", "سياسة", "محضر"];
const docYears = ["الكل", "1447", "1446", "1445"];

export default function GovernancePage() {
  const [docQuery, setDocQuery] = useState("");
  const [docType, setDocType] = useState<DocType | "الكل">("الكل");
  const [docYear, setDocYear] = useState("الكل");

  const filteredDocs = useMemo(() => {
    return documents.filter((d) => {
      if (docType !== "الكل" && d.type !== docType) return false;
      if (docYear !== "الكل" && d.year !== docYear) return false;
      if (docQuery && !d.name.includes(docQuery)) return false;
      return true;
    });
  }, [docQuery, docType, docYear]);

  return (
    <>
      {/* Compact hero — gold/governance tone */}
      <section className="relative h-44 sm:h-48 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #064E3B 0%, #047857 35%, #A16207 90%)",
          }}
        ></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-amber-300/15 rounded-full -translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-400/15 rounded-full translate-y-1/2 translate-x-1/2 blur-2xl"></div>

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

      {/* Last-updated bar */}
      <div className="bg-emerald-50 dark:bg-emerald-950/30 border-b border-emerald-200 dark:border-emerald-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-3 flex-wrap text-xs">
          <div className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300">
            <Clock className="w-3.5 h-3.5" />
            <span className="font-medium">آخر تحديث للصفحة:</span>
            <span className="num">14 جمادى الأولى 1447هـ</span>
            <span className="text-emerald-700/70">·</span>
            <span>بواسطة لجنة الحوكمة</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-emerald-800 dark:text-emerald-300">معتمد NCNP</span>
          </div>
        </div>
      </div>

      {/* Verified metrics (replaced "95%" vague stat) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3">
            <Users className="w-4 h-4 text-emerald-700 mb-1" />
            <div className="text-xl font-bold num">9</div>
            <div className="text-[10px] text-zinc-500">عضو مجلس إدارة</div>
            <div className="text-[10px] text-zinc-400 mt-0.5">الدورة 21</div>
          </div>
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3">
            <Briefcase className="w-4 h-4 text-amber-600 mb-1" />
            <div className="text-xl font-bold num">6</div>
            <div className="text-[10px] text-zinc-500">لجنة دائمة</div>
            <div className="text-[10px] text-zinc-400 mt-0.5">26 عضواً</div>
          </div>
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3">
            <FileText className="w-4 h-4 text-blue-600 mb-1" />
            <div className="text-xl font-bold num">{documents.length}</div>
            <div className="text-[10px] text-zinc-500">وثيقة منشورة</div>
            <div className="text-[10px] text-zinc-400 mt-0.5">كلها بـ PDF</div>
          </div>
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3">
            <CalendarDays className="w-4 h-4 text-purple-600 mb-1" />
            <div className="text-xl font-bold num">39</div>
            <div className="text-[10px] text-zinc-500">سنة من الخدمة</div>
            <div className="text-[10px] text-zinc-400 mt-0.5">منذ 1407هـ</div>
          </div>
        </div>
      </section>

      {/* Sticky anchor nav */}
      <nav className="sticky top-12 z-20 bg-white/95 dark:bg-black/95 backdrop-blur border-b border-zinc-200 dark:border-zinc-800 mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1 overflow-x-auto py-2 no-scrollbar">
          {[
            { id: "board", label: "مجلس الإدارة", icon: Users },
            { id: "committees", label: "اللجان", icon: Briefcase },
            { id: "documents", label: "الوثائق", icon: FileText },
            { id: "disclosures", label: "الإفصاحات", icon: Eye },
            { id: "licenses", label: "التراخيص", icon: Award },
            { id: "reports", label: "التقارير", icon: BarChart3 },
            { id: "terms", label: "الدورات السابقة", icon: GitBranch },
            { id: "contact", label: "تواصل", icon: Phone },
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

      {/* Board */}
      <section id="board" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-32">
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-700" />
              مجلس الإدارة
            </h2>
            <p className="text-xs text-zinc-500 mt-0.5">
              الدورة الحادية والعشرون · 1447-1450هـ · 9 أعضاء
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {board.map((m, i) => (
            <Link
              key={i}
              href={`/governance/board/${i + 1}`}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-3 flex items-start gap-3 hover:border-emerald-500 transition-colors group"
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
                <div className="text-sm font-semibold truncate group-hover:text-emerald-700 transition-colors">
                  {m.name}
                </div>
                <div className="text-[11px] text-zinc-500 mt-0.5">{m.role}</div>
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {m.committees.map((c, ci) => (
                    <span
                      key={ci}
                      className="text-[9px] px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded text-zinc-600 dark:text-zinc-400"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Committees */}
      <section id="committees" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-32">
        <div className="mb-4">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-amber-600" />
            اللجان الدائمة
          </h2>
          <p className="text-xs text-zinc-500 mt-0.5">6 لجان متخصّصة</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {committees.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4"
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

      {/* Documents library — with search + filters */}
      <section id="documents" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-32">
        <div className="mb-4">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" />
            مكتبة الوثائق ({documents.length})
          </h2>
          <p className="text-xs text-zinc-500 mt-0.5">
            الأنظمة واللوائح والخطط والسياسات والمحاضر — جميعها بصيغة PDF
          </p>
        </div>

        {/* Search + filters */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-3 mb-3">
          <div className="flex items-center gap-2 mb-3">
            <Search className="w-4 h-4 text-zinc-400 flex-shrink-0" />
            <input
              type="text"
              value={docQuery}
              onChange={(e) => setDocQuery(e.target.value)}
              placeholder="ابحث في الوثائق..."
              className="flex-1 bg-transparent outline-none text-sm"
            />
            <span className="text-[10px] text-zinc-500 num">{filteredDocs.length} نتيجة</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
              <Filter className="w-3 h-3" />
              النوع:
            </div>
            <div className="flex flex-wrap gap-1">
              {docTypes.map((t) => (
                <button
                  key={t}
                  onClick={() => setDocType(t)}
                  className={`px-2.5 py-0.5 text-[11px] font-medium rounded-md transition-colors ${
                    docType === t
                      ? "bg-emerald-700 text-white"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="h-3 w-px bg-zinc-200 dark:bg-zinc-700 mx-1"></div>

            <div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
              السنة:
            </div>
            <div className="flex flex-wrap gap-1">
              {docYears.map((y) => (
                <button
                  key={y}
                  onClick={() => setDocYear(y)}
                  className={`px-2.5 py-0.5 text-[11px] font-medium rounded-md transition-colors num ${
                    docYear === y
                      ? "bg-emerald-700 text-white"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200"
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Documents list */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl divide-y divide-zinc-100 dark:divide-zinc-800">
          {filteredDocs.length === 0 && (
            <div className="px-4 py-8 text-center text-sm text-zinc-500">
              لا توجد وثائق تطابق البحث
            </div>
          )}
          {filteredDocs.map((d, i) => {
            const Icon = d.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
              >
                <div className="w-9 h-9 rounded-md bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-blue-700 dark:text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-sm font-medium">{d.name}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${docTypeColors[d.type]}`}>
                      {d.type}
                    </span>
                  </div>
                  <div className="text-[10px] text-zinc-500 flex items-center gap-1.5 flex-wrap">
                    <span className="num">{d.year}هـ</span>
                    <span>·</span>
                    <span className="num">{d.size}</span>
                    <span>·</span>
                    <span>اعتُمد من: {d.approvedBy}</span>
                    <span>·</span>
                    <span>محدّث {d.updated}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <button
                    title="عرض"
                    className="p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                  <button
                    title="تنزيل"
                    className="p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-[10px] text-zinc-400 mt-2 text-center">
          ⚠️ نموذج تجريبي — روابط الملفات ستُربط بالـ PDFs الفعلية عند الإطلاق الرسمي
        </p>
      </section>

      {/* Disclosures */}
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
              href={`/governance/disclosures/${i + 1}`}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 hover:border-emerald-500 transition-colors group"
            >
              <div className="text-2xl font-bold num text-purple-700 dark:text-purple-400 mb-1">
                {d.count}
              </div>
              <div className="text-xs font-medium leading-tight group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors mb-1">
                {d.name}
              </div>
              <div className="text-[10px] text-zinc-500 leading-snug">
                {d.desc}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Licenses */}
      <section id="licenses" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-32">
        <div className="mb-4">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-700" />
            التراخيص والاعتمادات
          </h2>
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
            </div>
          ))}
        </div>
      </section>

      {/* Reports */}
      <section id="reports" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-32">
        <div className="mb-4">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-rose-600" />
            التقارير السنوية
          </h2>
          <p className="text-xs text-zinc-500 mt-0.5">
            التقارير الإدارية والمالية المُدقّقة منذ 1444هـ
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
              <div className="text-emerald-600">✓</div>
              <div className="text-emerald-600">✓</div>
              <div className="text-emerald-600">✓</div>
              <div className="text-left flex gap-1 justify-start">
                <button className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-semibold border border-zinc-200 dark:border-zinc-700 rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:border-emerald-500 hover:text-emerald-700 transition-colors">
                  <Download className="w-2.5 h-2.5" />
                  إداري
                </button>
                <button className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-semibold border border-zinc-200 dark:border-zinc-700 rounded-md hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:border-emerald-500 hover:text-emerald-700 transition-colors">
                  <Download className="w-2.5 h-2.5" />
                  مالي
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Historical terms */}
      <section id="terms" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-32">
        <div className="mb-4">
          <h2 className="text-lg font-bold flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-indigo-600" />
            الدورات السابقة
          </h2>
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
                    t.current ? "text-emerald-700 dark:text-emerald-400" : "text-zinc-400"
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

      {/* Contact + Report violation */}
      <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Contact governance officer */}
          <div className="bg-gradient-to-l from-emerald-50 to-emerald-100/50 dark:from-emerald-950/40 dark:to-emerald-900/30 border border-emerald-200 dark:border-emerald-900 rounded-xl p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-700 flex items-center justify-center text-white flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold mb-1">تواصل مع مسؤول الحوكمة</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  لأي استفسار يخص الحوكمة، الإفصاحات، أو الوثائق
                </p>
              </div>
            </div>
            <div className="space-y-1.5 text-xs">
              <a
                href="tel:0136643028"
                className="flex items-center gap-2 hover:text-emerald-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-zinc-500" />
                <span className="num">0136643028</span>
                <span className="text-zinc-500">· داخلي 105</span>
              </a>
              <a
                href="mailto:governance@alsafa-charity.org.sa"
                className="flex items-center gap-2 hover:text-emerald-700 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
                <span>governance@alsafa-charity.org.sa</span>
              </a>
            </div>
            <Link
              href="/contact?subject=governance"
              className="inline-flex items-center gap-1.5 mt-4 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-md transition-colors"
            >
              إرسال استفسار
              <ArrowLeft className="w-3 h-3" />
            </Link>
          </div>

          {/* Report violation */}
          <div className="bg-gradient-to-l from-amber-50 to-amber-100/50 dark:from-amber-950/40 dark:to-amber-900/30 border border-amber-200 dark:border-amber-900 rounded-xl p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-amber-600 flex items-center justify-center text-white flex-shrink-0">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold mb-1">الإبلاغ عن مخالفة</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  بلاغك سرّي ويُعالج خلال 48 ساعة
                </p>
              </div>
            </div>
            <div className="text-xs text-zinc-600 dark:text-zinc-400 space-y-1 mb-4 leading-relaxed">
              <div>• مالية أو إدارية</div>
              <div>• تضارب مصالح</div>
              <div>• تمييز أو تحرّش</div>
              <div>• سوء استخدام للموارد</div>
            </div>
            <Link
              href="/report"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold rounded-md transition-colors"
            >
              تقديم بلاغ سرّي
              <ArrowLeft className="w-3 h-3" />
            </Link>
          </div>
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
          </div>
        </div>
      </section>
    </>
  );
}
