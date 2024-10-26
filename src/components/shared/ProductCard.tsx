import React from "react";
import Image from "next/image";
import { IProductDataProp } from "../sections/ProductSection";
import Button from "./Button";
import styles from "./productCard.module.css";

const ProductCard = ({ data }: { data: IProductDataProp }) => {
  return (
    <div className={styles.productCard}>
      <Image
        src={data.img}
        alt="product image"
        className={styles.productImage}
      />

      <div>
        <div className="flex justify-between items-center">
          <h1 className={styles.productTitle}>{data.title}</h1>
        </div>
        <div className={styles.productDetails}>
          <p>{data.category}</p>
          <p>{data.brand}</p>
        </div>
        <div className="flex justify-between">
          <p className={styles.productPrice}>$120</p>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <Button label="Add to cart" />
      </div>
    </div>
  );
};

export default ProductCard;
