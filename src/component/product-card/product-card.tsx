// ProductCard.tsx
import React from "react";
import styles from "./ProductCard.module.css";

type ProductCardProps = {
  title: string;
  origin: string;
  price: number; // в копейках
  currency: "RUB" | "USD" | "EUR";
  imageUrl: string;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  origin,
  price,
  currency,
  imageUrl,
}) => {
  const formattedPrice = new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(price / 100);

  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.origin}>Страна: {origin}</p>
        <p className={styles.price}>{formattedPrice}</p>
      </div>
    </div>
  );
};
