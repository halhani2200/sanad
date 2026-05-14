"use client";

import { useState } from "react";
import { Heart, ShieldCheck, Check } from "lucide-react";

const presets = [50, 100, 250, 500, 1000, 2500];
const causes = [
  "تبرع عام · حسب أولوية الجمعية",
  "كفالة الأيتام",
  "إعانة الأسر",
  "زكاة المال",
  "الأوقاف",
  "حملة كسوة العيد للأيتام",
];

export default function DonatePage() {
  const [amount, setAmount] = useState(250);
  const [cause, setCause] = useState(causes[0]);
  const [frequency, setFrequency] = useState<"once" | "monthly" | "gift">("once");
  const [success, setSuccess] = useState(false);

  if (success) {
    return (
      <section className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8 text-center">
          <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-emerald-500 flex items-center justify-center">
            <Check className="w-12 h-12 text-white" strokeWidth={3} />
          </div>
          <h1 className="text-2xl font-bold mb-1">تقبّل الله منك</h1>
          <p className="text-zinc-600 dark:text-zinc-400 mb-5">
            تم استلام طلب تبرعك بنجاح
          </p>
          <div className="text-4xl font-bold text-emerald-700 dark:text-emerald-400 my-4 num">
            {amount.toLocaleString("ar-SA")}
            <span className="text-base text-zinc-500 font-medium"> ر.س</span>
          </div>
          <div className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-4 my-4 text-right text-sm">
            <div className="flex justify-between mb-2">
              <span className="font-mono text-emerald-700 dark:text-emerald-400">
                DEMO-2026-04832
              </span>
              <span className="text-xs text-zinc-500">رقم العملية</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-zinc-500">{cause}</span>
              <span>إلى</span>
            </div>
          </div>
          <p className="text-xs text-zinc-500 mb-5">
            ⚠️ نموذج تجريبي — لم يتم خصم أي مبلغ فعلي
          </p>
          <button
            onClick={() => setSuccess(false)}
            className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-semibold transition-colors"
          >
            تبرع مرة أخرى
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold mb-2 flex items-center justify-center gap-2">
          <Heart className="w-7 h-7 text-rose-500" fill="currentColor" />
          تبرّع الآن
        </h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          عطاؤك يصنع فرقاً حقيقياً
        </p>
      </div>

      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm">
        {/* Frequency tabs */}
        <div className="flex gap-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg p-1 mb-5 text-xs font-medium">
          <button
            onClick={() => setFrequency("once")}
            className={`flex-1 py-2 rounded-md transition-colors ${
              frequency === "once"
                ? "bg-white dark:bg-zinc-900 shadow-sm"
                : "text-zinc-500"
            }`}
          >
            مرة واحدة
          </button>
          <button
            onClick={() => setFrequency("monthly")}
            className={`flex-1 py-2 rounded-md transition-colors ${
              frequency === "monthly"
                ? "bg-white dark:bg-zinc-900 shadow-sm"
                : "text-zinc-500"
            }`}
          >
            شهري متكرر
          </button>
          <button
            onClick={() => setFrequency("gift")}
            className={`flex-1 py-2 rounded-md transition-colors ${
              frequency === "gift"
                ? "bg-white dark:bg-zinc-900 shadow-sm"
                : "text-zinc-500"
            }`}
          >
            إهداء
          </button>
        </div>

        {/* Cause */}
        <div className="mb-4">
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-2 block">
            إلى أين يذهب التبرع؟
          </label>
          <select
            value={cause}
            onChange={(e) => setCause(e.target.value)}
            className="w-full px-3 py-2.5 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-sm"
          >
            {causes.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Amount grid */}
        <div className="mb-5">
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 mb-2 block">
            المبلغ (ر.س)
          </label>
          <div className="grid grid-cols-3 gap-2 mb-2">
            {presets.map((p) => (
              <button
                key={p}
                onClick={() => setAmount(p)}
                className={`py-3.5 rounded-lg font-semibold transition-all border-2 ${
                  amount === p
                    ? "border-emerald-700 bg-emerald-700 text-white shadow-md"
                    : "border-zinc-200 dark:border-zinc-700 hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/30"
                }`}
              >
                {p.toLocaleString("ar-SA")}
              </button>
            ))}
          </div>
          <input
            type="number"
            placeholder="مبلغ مخصّص..."
            onChange={(e) => setAmount(Number(e.target.value) || 0)}
            className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-sm text-center"
          />
        </div>

        {/* Payment buttons */}
        <div className="space-y-2 mb-4">
          <button
            onClick={() => setSuccess(true)}
            className="w-full py-3.5 bg-black hover:bg-zinc-800 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            ادفع بـ Apple Pay
          </button>
          <button
            onClick={() => setSuccess(true)}
            className="w-full py-3.5 bg-white dark:bg-zinc-800 border-2 border-emerald-700 text-emerald-700 dark:text-emerald-400 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-colors"
          >
            <span className="font-bold">مدى</span>
            ادفع <span className="num">{amount.toLocaleString("ar-SA")}</span> ر.س
          </button>
          <button
            onClick={() => setSuccess(true)}
            className="w-full py-3 border border-zinc-200 dark:border-zinc-700 rounded-xl text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            بطاقة ائتمان (Visa / Mastercard)
          </button>
        </div>

        <div className="flex items-center gap-1.5 justify-center text-[10px] text-zinc-500">
          <ShieldCheck className="w-3 h-3" />
          نموذج تجريبي · لا تتم معاملات حقيقية حالياً
        </div>
      </div>
    </section>
  );
}
