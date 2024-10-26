import React from "react";
import {
  IProductDataProp,
  productData,
} from "@/components/sections/ProductSection";
import Wrapper from "@/components/shared/Wrapper";
import ProductCard from "@/components/shared/ProductCard";
import styles from "./products.module.css";

const Productpage = () => {
  return (
    <Wrapper>
      <div className={styles.sectionContainer}>
        <h1 className={styles.sectionTitle}>All Products</h1>
        <div className={styles.productGrid}>
          {productData.map((data: IProductDataProp, index: number) => (
            <ProductCard key={index} data={data} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Productpage;
