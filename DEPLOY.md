# دليل النشر · Sanad

## 1️⃣ تشغيل محلي على جهازك

```bash
cd C:\Users\Hussain\Projects\sanad
npm run dev
```

ثم افتح: <http://localhost:3000>

**الصفحات الجاهزة:**
- `/` — الصفحة الرئيسية (موقع عام بنمط Sanad-dense)
- `/donate` — نموذج التبرع
- `/admin` — لوحة النظام الإداري
- `/admin/beneficiaries` — قائمة المستفيدين
- `/admin/beneficiaries/1010101010` — ملف مستفيد كامل

---

## 2️⃣ النشر على Vercel (مجاناً)

### الخطوة أ — رفع الكود إلى GitHub

```bash
cd C:\Users\Hussain\Projects\sanad

# أنشئ repo جديد على GitHub اسمه: sanad
# (private أو public حسب رغبتك)

# ربط الـ repo
git remote add origin https://github.com/YOUR_USERNAME/sanad.git
git branch -M main
git push -u origin main
```

### الخطوة ب — نشر على Vercel

1. اذهب إلى <https://vercel.com/signup>
2. سجّل دخول بحساب GitHub
3. اضغط **Add New → Project**
4. اختر repo `sanad`
5. **Framework Preset:** Next.js (يكتشفه تلقائياً)
6. اضغط **Deploy**

خلال **60-90 ثانية** يصير لك رابط:

```
https://sanad-XXXX.vercel.app
```

> لاحقاً تقدر تغيّر الـ slug من Settings → Domains

---

## 3️⃣ توصيل Supabase (اختياري الآن)

البيانات حالياً وهمية (من `src/lib/sample-data.ts`).
عند الاستعداد لقاعدة بيانات حقيقية:

1. أنشئ مشروع Supabase: <https://supabase.com/dashboard>
2. من **Settings → API** انسخ:
   - `Project URL`
   - `anon public key`
3. في Vercel، اذهب لـ **Settings → Environment Variables** وأضف:
   ```
   NEXT_PUBLIC_SUPABASE_URL = https://YOUR-PROJECT.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJh...
   ```
4. أعد النشر (Vercel → Redeploy)

---

## 4️⃣ ربط Subdomain لاحقاً

عند الجاهزية للعرض على الإدارة:

1. **Cloudflare** (DNS الحالي للجمعية):
   - أضف CNAME: `new.alsafa-charity.org.sa` → `cname.vercel-dns.com`

2. **Vercel** (Settings → Domains):
   - أضف `new.alsafa-charity.org.sa`
   - Vercel يولّد SSL تلقائياً

النتيجة: الرابط الرسمي للعرض يصير `new.alsafa-charity.org.sa`

---

## 5️⃣ التطوير والتحديثات

كل تعديل يحفظه `git push` يطلقه Vercel تلقائياً خلال 60 ثانية.

```bash
# تعديل
git add .
git commit -m "feat: إضافة صفحة الحملات"
git push

# Vercel يعمل deploy تلقائياً ← الرابط محدّث
```

---

## ميزانية مجانية لمدة سنة كاملة

| الخدمة | الحد المجاني | حالياً |
|--------|------------|-------|
| Vercel | 100GB/شهر | $0 |
| Supabase DB | 500MB | $0 |
| Supabase Auth | 50K مستخدم | $0 |
| GitHub | unlimited private repos | $0 |
| Cloudflare | DNS + SSL | $0 |
| **الإجمالي** | | **$0/سنة** |

---

## التالي (متى تريد التطوير)

- صفحات إضافية: `/campaigns`, `/sponsorships`, `/stories`, `/about`
- صفحات admin: `/admin/requests`, `/admin/donations`, `/admin/finance`
- ربط Supabase + جدول `persons` و `donations`
- نظام تسجيل دخول للموظفين (Supabase Auth)
- نموذج طلب مساعدة عام
- إيصال PDF (مع QR زاتكا لاحقاً)
- تطبيق Flutter (السنة الثانية)
