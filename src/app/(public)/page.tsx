import Link from "next/link";
import {
  Heart,
  TrendingUp,
  Users,
  Baby,
  ArrowLeft,
  Newspaper,
  Sparkles,
  ShieldCheck,
  Award,
  Megaphone,
  HandHeart,
  GraduationCap,
  Home as HomeIcon,
} from "lucide-react";

const campaigns = [
  {
    id: "eid-clothing",
    title: "كسوة العيد للأيتام",
    description: "توفير ملابس العيد لـ 500 يتيم في صفوى والقطيف",
    raised: 125000,
    goal: 250000,
    donors: 312,
    daysLeft: 15,
    urgent: true,
    color: "brand",
  },
  {
    id: "widow-homes",
    title: "تأهيل منازل الأرامل",
    description: "صيانة 32 منزل للأسر التي تعولها نساء",
    raised: 187500,
    goal: 320000,
    donors: 89,
    daysLeft: 42,
    urgent: false,
    color: "gold",
  },
  {
    id: "university-students",
    title: "كفالة طالب جامعي",
    description: "دعم 47 طالب وطالبة للعام الجامعي القادم",
    raised: 71800,
    goal: 188000,
    donors: 54,
    daysLeft: 78,
    urgent: false,
    color: "blue",
  },
];

const services = [
  { icon: HandHeart, label: "تبرّع عام", href: "/donate", color: "emerald" },
  { icon: Baby, label: "كفالة يتيم", href: "/sponsorships", color: "amber" },
  { icon: HomeIcon, label: "إعانة أسرة", href: "/aid", color: "blue" },
  { icon: GraduationCap, label: "دعم طالب", href: "/students", color: "purple" },
  { icon: Sparkles, label: "حاسبة الزكاة", href: "/zakat", color: "green" },
  { icon: Megaphone, label: "حملات نشطة", href: "/campaigns", color: "rose" },
  { icon: Newspaper, label: "آخر الأخبار", href: "/news", color: "indigo" },
  { icon: Award, label: "قصص النجاح", href: "/stories", color: "pink" },
];

const news = [
  {
    title: "إطلاق حملة كسوة العيد للأيتام للعام السابع",
    date: "قبل 3 ساعات",
    category: "حملات",
  },
  {
    title: "توقيع شراكة مع جمعية البر بالقطيف",
    date: "أمس",
    category: "شراكات",
  },
  {
    title: "اجتماع الجمعية العمومية السنوي 1447هـ",
    date: "قبل يومين",
    category: "حوكمة",
  },
  {
    title: "افتتاح مركز التدريب المهني للأرامل",
    date: "قبل 4 أيام",
    category: "مشاريع",
  },
  {
    title: "تقرير الربع الأول · شفافية مالية كاملة",
    date: "قبل أسبوع",
    category: "تقارير",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Compact banner + sections immediately visible (Sanad-style dense) */}
      <section className="bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
            {/* Compact banner (left, 5 cols) */}
            <div className="lg:col-span-5 relative overflow-hidden rounded-xl gradient-brand p-6 text-white min-h-[260px] flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
              <div className="relative">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-white/15 rounded-full text-[10px] font-medium mb-3">
                  <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full live-dot"></span>
                  3 حملات نشطة الآن
                </div>
                <h1 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                  عطاؤك يصنع <span className="text-amber-300">فرقاً حقيقياً</span>
                </h1>
                <p className="text-sm opacity-90 leading-relaxed">
                  منصة موحّدة لإدارة التبرعات، الكفالات، والمستفيدين بكل شفافية
                  واحتراف.
                </p>
              </div>
              <div className="relative flex gap-2">
                <Link
                  href="/donate"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white text-emerald-800 rounded-md text-sm font-semibold hover:bg-amber-50 transition-colors"
                >
                  <Heart className="w-4 h-4" fill="currentColor" />
                  تبرّع الآن
                </Link>
                <Link
                  href="/campaigns"
                  className="inline-flex items-center gap-1 px-4 py-2 border border-white/30 rounded-md text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  الحملات
                  <ArrowLeft className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Latest news (middle, 4 cols) */}
            <div className="lg:col-span-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-bold flex items-center gap-1.5">
                  <Newspaper className="w-4 h-4 text-emerald-700" />
                  آخر الأخبار
                </h2>
                <Link
                  href="/news"
                  className="text-xs text-emerald-700 dark:text-emerald-400 hover:underline"
                >
                  الكل ←
                </Link>
              </div>
              <ul className="space-y-2.5">
                {news.map((item, i) => (
                  <li key={i} className="group">
                    <Link
                      href="/news"
                      className="flex items-start gap-2 py-1.5 -mx-2 px-2 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium leading-snug group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-zinc-500 mt-0.5 flex items-center gap-1.5">
                          <span>{item.date}</span>
                          <span>·</span>
                          <span>{item.category}</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Live stats (right, 3 cols) */}
            <div className="lg:col-span-3 space-y-2">
              <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-semibold uppercase text-zinc-500 tracking-wide">
                    تبرعات هذا الشهر
                  </span>
                  <TrendingUp className="w-3 h-3 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold num text-emerald-700 dark:text-emerald-400">
                  384,250
                </div>
                <div className="text-[10px] text-zinc-500">
                  ر.س · <span className="text-emerald-600">↑ 23%</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-3">
                  <Users className="w-3.5 h-3.5 text-blue-600 mb-1" />
                  <div className="text-lg font-bold num">547</div>
                  <div className="text-[10px] text-zinc-500">مستفيد</div>
                </div>
                <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-3">
                  <Baby className="w-3.5 h-3.5 text-purple-600 mb-1" />
                  <div className="text-lg font-bold num">489</div>
                  <div className="text-[10px] text-zinc-500">يتيم مكفول</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active campaigns */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-end justify-between mb-5">
          <div>
            <h2 className="text-lg font-bold">حملات نشطة</h2>
            <p className="text-xs text-zinc-500 mt-0.5">
              3 حملات تجمع التبرعات الآن
            </p>
          </div>
          <Link
            href="/campaigns"
            className="text-xs text-emerald-700 dark:text-emerald-400 hover:underline"
          >
            كل الحملات ←
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {campaigns.map((c) => {
            const percent = Math.round((c.raised / c.goal) * 100);
            const gradient =
              c.color === "brand"
                ? "gradient-brand"
                : c.color === "gold"
                ? "gradient-gold"
                : "bg-gradient-to-br from-blue-700 to-indigo-900";
            return (
              <div
                key={c.id}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className={`h-24 ${gradient} relative flex items-end p-4`}>
                  {c.urgent && (
                    <span className="absolute top-2 left-2 px-2 py-0.5 bg-amber-400 text-amber-900 text-[10px] rounded-full font-bold">
                      🔥 عاجلة
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm mb-1">{c.title}</h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed line-clamp-2">
                    {c.description}
                  </p>

                  <div className="mb-3">
                    <div className="flex justify-between items-end text-[11px] text-zinc-600 dark:text-zinc-400 mb-1">
                      <span className="font-bold text-emerald-700 dark:text-emerald-400 num">
                        {c.raised.toLocaleString("ar-SA")} ر.س
                      </span>
                      <span className="num">
                        {percent}% من {c.goal.toLocaleString("ar-SA")}
                      </span>
                    </div>
                    <div className="h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${gradient} rounded-full`}
                        style={{ width: `${percent}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-zinc-500 mb-3">
                    <span>{c.donors} متبرع</span>
                    <span>{c.daysLeft} يوم متبقي</span>
                  </div>

                  <Link
                    href={`/campaigns/${c.id}`}
                    className={`block w-full py-2 ${gradient} text-white text-xs font-semibold rounded-md text-center hover:opacity-95 transition-opacity`}
                  >
                    تبرّع للحملة
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick services grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="mb-4">
          <h2 className="text-lg font-bold">خدمات سريعة</h2>
          <p className="text-xs text-zinc-500 mt-0.5">
            ابدأ من هنا حسب ما تحتاج
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Link
                key={i}
                href={s.href}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 text-center hover:border-emerald-500 hover:-translate-y-0.5 transition-all"
              >
                <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
                </div>
                <div className="text-xs font-medium">{s.label}</div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Trust + CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-l from-emerald-50 via-amber-50 to-emerald-50 dark:from-emerald-950/30 dark:via-amber-950/30 dark:to-emerald-950/30 border border-emerald-200 dark:border-emerald-900 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold mb-2">
                لماذا التبرع من خلال سَنَد؟
              </h2>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                منصة موحّدة آمنة، تبرع يصل لمستحقيه بشفافية كاملة. إيصال زاتكا
                فوري، تتبّع لحظي، وتقارير سنوية مُدقّقة.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-zinc-900 rounded-md text-xs font-medium border border-zinc-200 dark:border-zinc-700">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  PDPL متوافق
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-zinc-900 rounded-md text-xs font-medium border border-zinc-200 dark:border-zinc-700">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  مرخّصة من المركز الوطني
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-zinc-900 rounded-md text-xs font-medium border border-zinc-200 dark:border-zinc-700">
                  <Award className="w-3.5 h-3.5 text-amber-600" />
                  إيصال زكاة معتمد
                </span>
              </div>
            </div>
            <div className="text-center md:text-left">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 gradient-gold text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-shadow"
              >
                <Heart className="w-4 h-4" fill="currentColor" />
                تبرّع الآن
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
