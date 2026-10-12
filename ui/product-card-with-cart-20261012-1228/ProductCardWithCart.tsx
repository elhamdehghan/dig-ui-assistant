'use client';

import React from 'react';
import { formatCurrency } from '@/lib/persian';
import {
  ProductCard,
  ProductCardMedia,
  ProductCardBadge,
  ProductCardAction,
  ProductCardBody,
  ProductCardTitle,
  ProductCardPrice,
  ProductCardFooter,
} from '@/components/ui/product-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ShoppingCartIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <g transform="translate(12 12) scale(1.042) translate(-12 -12)">
      <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Shop" transform="translate(-64, -481)" fillRule="nonzero">
          <g id="shopping-cart" transform="translate(44, 413)">
            <g id="Icon/Shopping-cart/Linear" transform="translate(20, 68)">
              <path d="M2,2 L3.74000549,2 C4.82000554,2 5.67000183,2.92999995 5.58000183,4 L4.75,13.9599915 C4.61,15.5899915 5.8999933,16.9899902 7.53999329,16.9899902 L18.1900024,16.9899902 C19.6300025,16.9899902 20.89,15.8100048 21,14.3800049 L21.5399933,6.88000488 C21.6599933,5.22000492 20.3999957,3.86999512 18.7299957,3.86999512 L5.82000732,3.86999512" />
              <path d="M17.5,20.75 C17.5,21.440356 16.940356,22 16.25,22 C15.559644,22 15,21.440356 15,20.75 C15,20.059644 15.559644,19.5 16.25,19.5 C16.940356,19.5 17.5,20.059644 17.5,20.75 Z" />
              <path d="M9.5,20.75 C9.5,21.440356 8.94035596,22 8.25,22 C7.55964404,22 7,21.440356 7,20.75 C7,20.059644 7.55964404,19.5 8.25,19.5 C8.94035596,19.5 9.5,20.059644 9.5,20.75 Z" />
              <line x1="9" y1="8" x2="21" y2="8" />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

const HeartIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export default function ProductCardWithCart() {
  return (
    <ProductCard size="md">
      <ProductCardMedia>
        <img
          src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop"
          alt="کیف چرمی دست‌دوز"
        />
        <ProductCardBadge>
          <Badge size="sm" color="success" variant="soft">
            جدید
          </Badge>
        </ProductCardBadge>
        <ProductCardAction>
          <Button
            variant="outline"
            size="icon-sm"
            aria-label="افزودن به علاقه‌مندی‌ها"
            className="rounded-full bg-background"
          >
            <HeartIcon />
          </Button>
        </ProductCardAction>
      </ProductCardMedia>
      <ProductCardBody>
        <ProductCardTitle>کیف چرمی دست‌دوز</ProductCardTitle>
        <ProductCardPrice
          amount="۱٬۹۶۰٬۰۰۰ تومان"
          originalAmount="۲٬۴۵۰٬۰۰۰ تومان"
          discount="٪۲۰"
        />
      </ProductCardBody>
      <ProductCardFooter>
        <Button variant="outline" fullWidth>
          <ShoppingCartIcon />
          افزودن به سبد
        </Button>
      </ProductCardFooter>
    </ProductCard>
  );
}