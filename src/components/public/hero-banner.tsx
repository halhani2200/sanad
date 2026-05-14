import Link from "next/link";
import { Heart, ArrowLeft, Sparkles, Users, Award } from "lucide-react";

export function HeroBanner() {
  return (
    <section className="relative h-[420px] sm:h-[480px] overflow-hidden">
      {/* Background gradient + pattern */}
      <div className="absolute inset-0 gradient-brand"></div>

      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/20 rounded-full translate-y-1/2 translate-x-1/2 blur-2xl"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-emerald-300/10 rounded-full blur-3xl"></div>

      {/* SVG Saudi-heritage pattern (subtle) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hero-pattern"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="40" cy="40" r="1.5" fill="white" />
            <circle cx="0" cy="0" r="1" fill="white" />
            <circle cx="80" cy="0" r="1" fill="white" />
            <circle cx="0" cy="80" r="1" fill="white" />
            <circle cx="80" cy="80" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-pattern)" />
      </svg>

      {/* Decorative arabesque corner */}
      <svg
        className="absolute top-0 right-0 w-64 h-64 opacity-20 text-amber-200"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <path d="M100 0 L120 50 L170 60 L130 100 L150 150 L100 130 L50 150 L70 100 L30 60 L80 50 Z" />
      </svg>

      {/* Content */}
      <div className="relative h-full max-w-5xl mx-auto px-6 sm:px-10 flex items-center">
        <div className="text-white max-w-3xl">
          {/* Live badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur rounded-full mb-6 text-xs font-semibold">
            <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full live-dot"></span>
            <span>3 حملات نشطة الآن · 547 أسرة مستفيدة</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] mb-4">
            عطاؤك يصنع{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-l from-amber-300 to-amber-500">
                فرقاً حقيقياً
              </span>
              <span className="absolute bottom-1 right-0 left-0 h-2 bg-amber-400/30 rounded-full -z-0"></span>
            </span>
            <br />
            في حياة الأسر المحتاجة
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-emerald-50/90 mb-8 leading-relaxed max-w-2xl">
            منصة موحّدة لإدارة التبرعات، الكفالات، والمستفيدين بكل شفافية واحتراف.
            كل ريال يصل لمستحقّه — مع إيصال زاتكا فوري وتتبّع لحظي.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-900 rounded-xl text-sm font-bold shadow-xl hover:bg-amber-50 hover:shadow-2xl transition-all"
            >
              <Heart className="w-4 h-4" fill="currentColor" />
              تبرّع الآن
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/sponsorships"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/15 backdrop-blur border border-white/30 text-white rounded-xl text-sm font-semibold hover:bg-white/25 transition-colors"
            >
              <Award className="w-4 h-4" />
              تصفّح الكفالات
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-4 mt-8 text-xs text-emerald-50/80">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>إيصال زاتكا فوري</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-amber-300" />
              <span>21,432 متبرع موثوق</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-300" />
              <span>مرخّصة من المركز الوطني</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <svg
        className="absolute bottom-0 right-0 left-0 w-full text-[var(--background)]"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,60 L1440,60 L1440,30 C1200,50 720,15 0,30 Z"
        />
      </svg>
    </section>
  );
}
