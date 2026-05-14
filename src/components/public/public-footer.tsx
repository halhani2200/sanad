import Link from "next/link";

export function PublicFooter() {
  return (
    <footer className="bg-zinc-900 dark:bg-black text-zinc-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-brand flex items-center justify-center text-white font-bold">
                س
              </div>
              <div>
                <div className="font-semibold text-white">سَنَد</div>
                <div className="text-xs text-zinc-400">منصة الجمعيات الخيرية</div>
              </div>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4 max-w-md">
              منصة موحّدة لإدارة الجمعيات الخيرية في المملكة العربية السعودية.
              موقع عام، متجر تبرعات، ونظام إداري متكامل.
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase text-white mb-3 tracking-wider">
              روابط
            </div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">من نحن</Link></li>
              <li><Link href="/campaigns" className="hover:text-white">الحملات</Link></li>
              <li><Link href="/sponsorships" className="hover:text-white">الكفالات</Link></li>
              <li><Link href="/stories" className="hover:text-white">قصص النجاح</Link></li>
              <li><Link href="/reports" className="hover:text-white">التقارير السنوية</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase text-white mb-3 tracking-wider">
              قانوني
            </div>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-white">سياسة الخصوصية</Link></li>
              <li><Link href="/terms" className="hover:text-white">شروط الاستخدام</Link></li>
              <li><Link href="/pdpl" className="hover:text-white">حماية البيانات</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <div>© 1447هـ · سَنَد · جميع الحقوق محفوظة</div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full live-dot"></span>
            <span>نموذج تجريبي · v0.1</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
