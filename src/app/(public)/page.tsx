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
  Stethoscope,
  Wrench,
  BookOpen,
  Gift,
  ArrowLeft,
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
    domain: "orphans",
    gradient: "grad-warm-orphan",
    icon: Baby,
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
    domain: "aid",
    gradient: "grad-warm-aid",
    icon: HomeIcon,
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
    domain: "edu",
    gradient: "grad-warm-edu",
    icon: GraduationCap,
  },
];

// 6 colored work domains
const workDomains = [
  {
    icon: HandHeart,
    title: "إعانة الأسر",
    desc: "مساعدات شهرية ودورية للأسر المتعفّفة",
    count: "547 أسرة",
    domain: "domain-aid",
    gradient: "grad-warm-aid",
    href: "/aid",
  },
  {
    icon: Baby,
    title: "كفالة الأيتام",
    desc: "رعاية صحية وتعليمية شاملة للأيتام",
    count: "489 يتيم",
    domain: "domain-orphans",
    gradient: "grad-warm-orphan",
    href: "/sponsorships",
  },
  {
    icon: GraduationCap,
    title: "التعليم والتأهيل",
    desc: "دعم الطلاب الجامعيين والتدريب المهني",
    count: "47 طالب",
    domain: "domain-edu",
    gradient: "grad-warm-edu",
    href: "/students",
  },
  {
    icon: Stethoscope,
    title: "الصحة والعلاج",
    desc: "تمويل العمليات والأدوية المزمنة",
    count: "23 حالة",
    domain: "domain-health",
    gradient: "grad-warm-health",
    href: "/health",
  },
  {
    icon: Gift,
    title: "صندوق الزواج",
    desc: "مساعدة المقبلين على الزواج من المحتاجين",
    count: "18 عقد",
    domain: "domain-marriage",
    gradient: "grad-warm-marriage",
    href: "/marriage",
  },
  {
    icon: Wrench,
    title: "تأهيل المنازل",
    desc: "صيانة وترميم منازل الأسر المتعفّفة",
    count: "32 منزل",
    domain: "domain-vol",
    gradient: "grad-warm-vol",
    href: "/housing",
  },
];

// Quick services with varied colors
const services: {
  icon: typeof HandHeart;
  label: string;
  href: string;
  bg: string;
  fg: string;
}[] = [
  { icon: HandHeart, label: "تبرّع عام", href: "/donate", bg: "bg-emerald-50 dark:bg-emerald-950/40", fg: "text-emerald-700 dark:text-emerald-400" },
  { icon: Baby, label: "كفالة يتيم", href: "/sponsorships", bg: "bg-blue-50 dark:bg-blue-950/40", fg: "text-blue-700 dark:text-blue-400" },
  { icon: HomeIcon, label: "إعانة أسرة", href: "/aid", bg: "bg-amber-50 dark:bg-amber-950/40", fg: "text-amber-700 dark:text-amber-400" },
  { icon: GraduationCap, label: "دعم طالب", href: "/students", bg: "bg-violet-50 dark:bg-violet-950/40", fg: "text-violet-700 dark:text-violet-400" },
  { icon: Stethoscope, label: "علاج طبي", href: "/health", bg: "bg-teal-50 dark:bg-teal-950/40", fg: "text-teal-700 dark:text-teal-400" },
  { icon: Sparkles, label: "حاسبة الزكاة", href: "/zakat", bg: "bg-yellow-50 dark:bg-yellow-950/40", fg: "text-yellow-700 dark:text-yellow-500" },
  { icon: BookOpen, label: "أوقاف", href: "/waqf", bg: "bg-rose-50 dark:bg-rose-950/40", fg: "text-rose-700 dark:text-rose-400" },
  { icon: Award, label: "قصص النجاح", href: "/stories", bg: "bg-pink-50 dark:bg-pink-950/40", fg: "text-pink-700 dark:text-pink-400" },
];

const news = [
  {
    title: "إطلاق حملة كسوة العيد للأيتام للعام السابع",
    date: "قبل 3 ساعات",
    category: "حملات",
    categoryColor: "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400",
  },
  {
    title: "توقيع شراكة مع جمعية البر بالقطيف",
    date: "أمس",
    category: "شراكات",
    categoryColor: "bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400",
  },
  {
    title: "اجتماع الجمعية العمومية السنوي 1447هـ",
    date: "قبل يومين",
    category: "حوكمة",
    categoryColor: "bg-yellow-100 text-yellow-700 dark:bg-yellow-950/40 dark:text-yellow-500",
  },
  {
    title: "افتتاح مركز التدريب المهني للأرامل",
    date: "قبل 4 أيام",
    category: "مشاريع",
    categoryColor: "bg-violet-100 text-violet-700 dark:bg-violet-950/40 dark:text-violet-400",
  },
  {
    title: "تقرير الربع الأول · شفافية مالية كاملة",
    date: "قبل أسبوع",
    category: "تقارير",
    categoryColor: "bg-teal-100 text-teal-700 dark:bg-teal-950/40 dark:text-teal-400",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroBanner />

      {/* Live stats - varied colors */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="bg-white dark:bg-zinc-900 border border-emerald-200 dark:border-emerald-900 rounded-xl p-4 shadow-lg">
            <div className="flex items-center justify-between mb-1">
              <div className="w-7 h-7 rounded-md bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center">
                <Heart className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" fill="currentColor" />
              </div>
              <TrendingUp className="w-3 h-3 text-emerald-600" />
            </div>
            <div className="text-2xl font-bold num text-emerald-700 dark:text-emerald-400 mt-2">
              384,250
            </div>
            <div className="text-[10px] text-zinc-500">ر.س · تبرعات الشهر · ↑ 23%</div>
          </div>
          <div className="bg-white dark:bg-zinc-900 border border-blue-200 dark:border-blue-900 rounded-xl p-4 shadow-lg">
            <div className="w-7 h-7 rounded-md bg-blue-100 dark:bg-blue-950/40 flex items-center justify-center mb-2">
              <Users className="w-3.5 h-3.5 text-blue-700 dark:text-blue-400" />
            </div>
            <div className="text-2xl font-bold num text-blue-700 dark:text-blue-400">547</div>
            <div className="text-[10px] text-zinc-500">أسرة مستفيدة</div>
          </div>
          <div className="bg-white dark:bg-zinc-900 border border-violet-200 dark:border-violet-900 rounded-xl p-4 shadow-lg">
            <div className="w-7 h-7 rounded-md bg-violet-100 dark:bg-violet-950/40 flex items-center justify-center mb-2">
              <Baby className="w-3.5 h-3.5 text-violet-700 dark:text-violet-400" />
            </div>
            <div className="text-2xl font-bold num text-violet-700 dark:text-violet-400">489</div>
            <div className="text-[10px] text-zinc-500">يتيم مكفول</div>
          </div>
          <div className="bg-white dark:bg-zinc-900 border border-rose-200 dark:border-rose-900 rounded-xl p-4 shadow-lg">
            <div className="w-7 h-7 rounded-md bg-rose-100 dark:bg-rose-950/40 flex items-center justify-center mb-2">
              <Award className="w-3.5 h-3.5 text-rose-700 dark:text-rose-400" />
            </div>
            <div className="text-2xl font-bold num text-rose-700 dark:text-rose-400">21,432</div>
            <div className="text-[10px] text-zinc-500">متبرع موثوق</div>
          </div>
        </div>
      </section>

      {/* Work domains - 6 colored cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-end justify-between mb-5">
          <div>
            <h2 className="text-xl font-bold">مجالات عملنا</h2>
            <p className="text-xs text-zinc-500 mt-0.5">6 برامج رئيسية نخدم من خلالها مجتمعنا</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {workDomains.map((d, i) => {
            const Icon = d.icon;
            return (
              <Link
                key={i}
                href={d.href}
                className={`relative overflow-hidden ${d.gradient} rounded-xl p-5 text-white hover:scale-[1.02] transition-transform group`}
              >
                <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform"></div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 translate-x-1/2"></div>

                <div className="relative">
                  <Icon className="w-8 h-8 mb-3 opacity-90" />
                  <h3 className="text-base font-bold mb-1">{d.title}</h3>
                  <p className="text-xs opacity-90 leading-relaxed mb-3">{d.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold bg-white/20 backdrop-blur px-2 py-1 rounded-full">
                      {d.count}
                    </span>
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Active campaigns - with colored hero blocks */}
      <section className="tint-emerald max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 rounded-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
                const Icon = c.icon;
                const percent = Math.round((c.raised / c.goal) * 100);
                return (
                  <div
                    key={c.id}
                    className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden flex flex-col sm:flex-row hover:shadow-lg transition-shadow"
                  >
                    {/* Color block with icon */}
                    <div className={`${c.gradient} sm:w-40 h-24 sm:h-auto flex-shrink-0 relative flex items-center justify-center`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent)]"></div>
                      <Icon className="w-10 h-10 text-white/80 relative" />
                      {c.urgent && (
                        <span className="absolute top-2 right-2 px-2 py-0.5 bg-amber-400 text-amber-900 text-[10px] rounded-full font-bold">
                          عاجلة
                        </span>
                      )}
                    </div>

                    <div className="p-4 flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="min-w-0 flex-1">
                          <h3 className="font-bold mb-0.5">{c.title}</h3>
                          <p className="text-xs text-zinc-600 dark:text-zinc-400">{c.description}</p>
                        </div>
                        <Link
                          href={`/campaigns/${c.id}`}
                          className={`px-3 py-1.5 ${c.gradient} text-white text-xs font-semibold rounded-md hover:opacity-95 transition-opacity flex-shrink-0`}
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
                            className={`h-full ${c.gradient} rounded-full`}
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

          {/* News with colored category badges */}
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
                  <div className="text-sm font-medium leading-snug group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors mb-1.5">
                    {item.title}
                  </div>
                  <div className="text-[10px] text-zinc-500 flex items-center gap-1.5">
                    <span>{item.date}</span>
                    <span>·</span>
                    <span className={`px-1.5 py-0.5 ${item.categoryColor} rounded font-semibold`}>
                      {item.category}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick services - 8 different colors */}
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
                <div className={`w-10 h-10 mx-auto mb-2 rounded-lg ${s.bg} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${s.fg}`} />
                </div>
                <div className="text-xs font-medium">{s.label}</div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA strip */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-gradient-to-l from-emerald-50 via-amber-50 to-rose-50 dark:from-emerald-950/30 dark:via-amber-950/30 dark:to-rose-950/30 border border-emerald-200 dark:border-emerald-900 rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h2 className="text-xl font-bold mb-2">لماذا التبرع لجمعية الصفا؟</h2>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
                39 سنة من الخدمة الاجتماعية في صفوى والقطيف. تبرعك يصل لمستحقيه
                بشفافية كاملة، مع إيصال زاتكا فوري، تتبّع لحظي، وتقارير سنوية مُدقّقة.
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
