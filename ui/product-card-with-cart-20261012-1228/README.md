# کارت محصول با آیکون سبد خرید

## درباره این قطعه
کارتی برای نمایش محصول با تصویر، قیمت، برچسب، دکمهٔ علاقه‌مندی و دکمهٔ افزودن به سبد خرید. این قطعه در صفحات فروشگاه، دسته‌بندی‌ها و نتایجِ جست‌وجو استفاده می‌شود.

## کامپوننت انتخاب‌شده
**ProductCard** — کامپوننتِ استاندارد Dig برای نمایش محصول با اندازه‌های مختلف (sm/md/lg)، تصویرِ مربعی، برچسب، دکمهٔ علاقه‌مندی و فوتر برای دکمهٔ عمل.

## آیکون انتخاب‌شده
**shopping-cart** (Digcheh Linear) — آیکونِ سبدِ خرید استاندارد برای دکمهٔ افزودن به سبد. آیکون داخلِ دکمه قرار گرفته و رنگِ آن با متنِ دکمه هماهنگ است.

## نصب
```bash
npx digdesign@latest init
npx digdesign@latest add product-card badge button
```

## نحوه استفاده
```tsx
import ProductCardWithCart from '@/components/ProductCardWithCart';

export default function Page() {
  return <ProductCardWithCart />;
}
```

برای استفادهٔ تکراری در فهرست:
```tsx
import { ProductCardGrid } from '@/components/ui/product-card';

<ProductCardGrid>
  {products.map((product) => (
    <ProductCardWithCart key={product.id} />
  ))}
</ProductCardGrid>
```

## پیش‌نمایش
👁 [مشاهده پیش‌نمایش زنده](https://elhamdehghan.github.io/dig-ui-assistant/ui/product-card-with-cart-20261012-1228/preview.html)
