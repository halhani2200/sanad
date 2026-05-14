import Link from "next/link";
import { HeroBanner } from "@/components/public/hero-banner";
import {
  TrendingUp,
  Users,
  Baby,
  Newspaper,
  Sparkles,
  Award,
  Megaphone,
  HandHeart,
  GraduationCap,
  Home as HomeIcon,
  Heart,
  ShieldCheck,
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
      <HeroBanner />

      {/* Live stats strip */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 shadow-lg">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-semibold uppercase text-zinc-500 tracking-wide">
                هذا الشهر
              </span>
              <TrendingUp className="w-3 h-3 text-emerald-600" />
            </div>
            <div className="text-2xl font-bold num text-emerald-700 dark:text-emerald-400">
              384,250
            </div>
            <div className="text-[10px] text-zinc-500">ر.س تبرعات · ↑ 23%</div>
          </div>
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 shadow-lg">
            <Users className="w-4 h-4 text-blue-600 mb-1" />
            <div className="text-2xl font-bold num">547</div>
            <div className="text-[10px] text-zinc-500">أسرة مستفيدة</div>
          </div>
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 shadow-lg">
            <Baby className="w-4 h-4 text-purple-600 mb-1" />
            <div className="text-2xl font-bold num">489</div>
            <div className="text-[10px] text-zinc-500">يتيم مكفول</div>
          </div>
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 shadow-lg">
            <Heart className="w-4 h-4 text-rose-600 mb-1" />
            <div className="text-2xl font-bold num">21,432</div>
            <div className="text-[10px] text-zinc-500">متبرع مسجّل</div>
          </div>
        </div>
      </section>

      {/* Latest news + campaigns */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Campaigns column (2/3) */}
          <div className="lg:col-span-2">
            <div className="flex items-end justify-between mb-4">
              <div>
                <h2 className="text-xl font-bold">حملات نشطة</h2>
                <p className="text-xs text-zinc-500 mt-0.5">3 حملات تجمع التبرعات الآن</p>
              </div>
              <Link
                href="/campaigns"
                className="text-xs text-emerald-700 dark:text-emerald-400 hover:underline"
              >
                كل الحملات ←
              </Link>
            </div>

            <div className="space-y-3">
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
                    className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden flex flex-col sm:flex-row hover:shadow-lg transition-shadow"
                  >
                    {/* Color block */}
                    <div className={`${gradient} sm:w-40 h-24 sm:h-auto flex-shrink-0 relative`}>
                      {c.urgent && (
                        <span className="absolute top-2 right-2 px-2 py-0.5 bg-amber-400 text-amber-900 text-[10px] rounded-full font-bold">
                          عاجلة
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4 flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="min-w-0 flex-1">
                          <h3 className="font-bold mb-0.5">{c.title}</h3>
                          <p className="text-xs text-zinc-600 dark:text-zinc-400">
                            {c.description}
                          </p>
                        </div>
                        <Link
                          href={`/campaigns/${c.id}`}
                          className={`px-3 py-1.5 ${gradient} text-white text-xs font-semibold rounded-md hover:opacity-95 transition-opacity flex-shrink-0`}
                        >
                          تبرّع
                        </Link>
                      </div>

                      <div className="mt-2">
                        <div className="flex justify-between items-baseline text-[11px] text-zinc-600 dark:text-zinc-400 mb-1">
                          <span className="font-bold text-emerald-700 dark:text-emerald-400 num">
                            {c.raised.toLocaleString("ar-SA")} ر.س
                          </span>
                          <span className="num">
                            {percent}% · {c.donors} متبرع · {c.daysLeft}ي
                          </span>
                        </div>
                        <div className="h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${gradient} rounded-full`}
                            style={{ width: `${percent}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* News column (1/3) */}
          <div>
            <div className="flex items-end justify-between mb-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Newspaper className="w-5 h-5 text-emerald-700" />
                آخر الأخبار
              </h2>
              <Link
                href="/news"
                className="text-xs text-emerald-700 dark:text-emerald-400 hover:underline"
              >
                الكل ←
              </Link>
            </div>

            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl divide-y divide-zinc-100 dark:divide-zinc-800">
              {news.map((item, i) => (
                <Link
                  key={i}
                  href="/news"
                  className="block px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors group"
                >
                  <div className="text-sm font-medium leading-snug group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors mb-1">
                    {item.title}
                  </div>
                  <div className="text-[10px] text-zinc-500 flex items-center gap-1.5">
                    <span>{item.date}</span>
                    <span>·</span>
                    <span className="px-1.5 py-0.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 rounded font-medium">
                      {item.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick services */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-4">
          <h2 className="text-xl font-bold">خدمات سريعة</h2>
          <p className="text-xs text-zinc-500 mt-0.5">ابدأ من هنا حسب ما تحتاج</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Link
                key={i}
                href={s.href}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 text-center hover:border-emerald-500 hover:-translate-y-0.5 transition-all"
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

      {/* CTA strip */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-gradient-to-l from-emerald-50 via-amber-50 to-emerald-50 dark:from-emerald-950/30 dark:via-amber-950/30 dark:to-emerald-950/30 border border-emerald-200 dark:border-emerald-900 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold mb-2">لماذا التبرع من خلال سَنَد؟</h2>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                منصة موحّدة آمنة، تبرع يصل لمستحقيه بشفافية كاملة. إيصال زاتكا فوري،
                تتبّع لحظي، وتقارير سنوية مُدقّقة.
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
