# فرم ورود

## درباره این قطعه
فرم ورود کامل با اعتبارسنجی زنده، مدیریت خطا، و حالت بارگذاری. شامل فیلدهای ایمیل و رمز عبور، گزینهٔ «مرا به خاطر بسپار»، و لینک‌های کمکی برای ثبت‌نام و بازیابی رمز عبور است.

## مسیر انتخاب‌شده
**COMPONENT-ONLY** — درخواست برای یک صفحهٔ کامل (فرم ورود) بدون نام آیکون خاص. سرورهای استفاده‌شده: **دیگ** (Dig).

## کامپوننت‌های انتخاب‌شده
- **Card**: ظرف اصلی برای فرم
- **TextField**: فیلد ایمیل با اعتبارسنجی
- **PasswordField**: فیلد رمز عبور با دکمهٔ نمایش
- **Checkbox**: گزینهٔ «مرا به خاطر بسپار»
- **Button**: دکمهٔ ورود با حالت بارگذاری
- **Alert**: نمایش پیام‌های خطا
- **Link**: لینک‌های ثبت‌نام و بازیابی رمز

## آیکون انتخاب‌شده
آیکونی خواسته نشده بود — فرم ورود از آیکون‌های داخلی Dig (چشم برای نمایش رمز) استفاده می‌کند.

## نصب
```bash
npx digdesign@latest init
npx digdesign@latest add button card checkbox label text-field password-field link alert
```

## نحوه استفاده
```tsx
import LoginForm from '@/components/LoginForm'

export default function Page() {
  return <LoginForm />
}
```

فرم از `react-hook-form` و `zod` برای اعتبارسنجی استفاده می‌کند. تابع `onSubmit` را برای اتصال به سرور خود تغییر دهید.

## پیش‌نمایش
👁 [مشاهده پیش‌نمایش زنده](https://elhamdehghan.github.io/dig-ui-assistant/ui/login-form-20261012-1434/preview.html)
