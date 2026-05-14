import Link from "next/link";
import { Heart, ArrowLeft, Sparkles, Users, Award } from "lucide-react";

export function HeroBanner() {
  return (
    <section className="relative h-56 sm:h-64 overflow-hidden">
      {/* Background gradient + pattern */}
      <div className="absolute inset-0 gradient-brand"></div>

      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-400/20 rounded-full translate-y-1/2 translate-x-1/2 blur-2xl"></div>

      {/* SVG pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hero-pattern"
            x="0"
            y="0"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="30" cy="30" r="1.2" fill="white" />
            <circle cx="0" cy="0" r="0.8" fill="white" />
            <circle cx="60" cy="0" r="0.8" fill="white" />
            <circle cx="0" cy="60" r="0.8" fill="white" />
            <circle cx="60" cy="60" r="0.8" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-pattern)" />
      </svg>

      {/* Arabesque corner */}
      <svg
        className="absolute top-0 right-0 w-40 h-40 opacity-20 text-amber-200"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <path d="M100 0 L120 50 L170 60 L130 100 L150 150 L100 130 L50 150 L70 100 L30 60 L80 50 Z" />
      </svg>

      {/* Content */}
      <div className="relative h-full max-w-6xl mx-auto px-6 sm:px-8 flex items-center">
        <div className="text-white max-w-2xl">
          {/* Live badge */}
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-white/15 backdrop-blur rounded-full mb-3 text-[11px] font-semibold">
            <span className="w-1.5 h-1.5 bg-emerald-300 rounded-full live-dot"></span>
            <span>3 حملات نشطة · 547 أسرة</span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-2">
            عطاؤك يصنع{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-l from-amber-300 to-amber-500">
              فرقاً حقيقياً
            </span>{" "}
            في حياة الأسر
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-emerald-50/90 mb-4 max-w-xl">
            منصة موحّدة آمنة · إيصال زاتكا فوري · تتبّع لحظي للتبرع
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-2">
            <Link
              href="/donate"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-emerald-900 rounded-lg text-xs font-bold shadow-lg hover:bg-amber-50 transition-colors"
            >
              <Heart className="w-3.5 h-3.5" fill="currentColor" />
              تبرّع الآن
              <ArrowLeft className="w-3 h-3" />
            </Link>
            <Link
              href="/sponsorships"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white/15 backdrop-blur border border-white/30 text-white rounded-lg text-xs font-semibold hover:bg-white/25 transition-colors"
            >
              <Award className="w-3.5 h-3.5" />
              الكفالات
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <svg
        className="absolute bottom-0 right-0 left-0 w-full text-[var(--background)]"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,40 L1440,40 L1440,20 C1200,32 720,8 0,20 Z"
        />
      </svg>
    </section>
  );
}
