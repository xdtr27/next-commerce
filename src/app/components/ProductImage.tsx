"use client";
import { useState } from "react";

import { ProductType } from "@/types/ProductType";
import Image from "next/image";

type ProductImageProps = {
  product: ProductType;
  fill?: boolean;
};

export default function ProductImage({ product, fill }: ProductImageProps) {
  const [loading, setLoading] = useState(true);

  return fill ? (
    <Image
      src={product.image}
      fill
      alt={product.title}
      className={`object-cover ${
        loading
          ? "scale-110 blur-3xl grayscale-0"
          : "scale-100 blur-0 grayscale-0"
      }`}
      onLoadingComplete={() => setLoading(false)}
    />
  ) : (
    <Image
      src={product.image}
      width={400}
      height={700}
      alt={product.title}
      className={`object-cover h-[100%] ${
        loading
          ? "scale-110 blur-3xl grayscale-0"
          : "scale-100 blur-0 grayscale-0"
      }`}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}
