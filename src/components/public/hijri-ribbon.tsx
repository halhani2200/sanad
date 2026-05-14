"use client";

import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";

export function HijriRibbon() {
  const [hijri, setHijri] = useState("");
  const [gregorian, setGregorian] = useState("");

  useEffect(() => {
    setHijri(
      new Intl.DateTimeFormat("ar-SA-u-ca-islamic-umalqura", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date())
    );
    setGregorian(
      new Intl.DateTimeFormat("ar-SA", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(new Date())
    );
  }, []);

  return (
    <div className="hijri-ribbon px-4 py-2 text-center text-xs flex items-center justify-center gap-2 text-amber-900 dark:text-amber-200">
      <Calendar className="w-3.5 h-3.5" />
      <span suppressHydrationWarning>
        <strong>{hijri}</strong>
        {gregorian && <> · {gregorian}</>}
      </span>
    </div>
  );
}
