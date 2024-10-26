import React from "react";
import Wrapper from "../shared/Wrapper";
import ProductCard from "../shared/ProductCard";
import PImg1 from "@/assets/images/p-1.jpg";
import PImg2 from "@/assets/images/p-2.jpg";
import PImg3 from "@/assets/images/p-3.jpg";
import PImg4 from "@/assets/images/p-4.jpg";
import { StaticImageData } from "next/image";
import styles from "./productSection.module.css";

export interface IProductDataProp {
  title: string;
  category: string;
  brand: string;
  img: StaticImageData;
}

export const productData: IProductDataProp[] = [
  {
    title: "Product 1",
    category: "Category 1",
    brand: "Brand 1",
    img: PImg1,
  },
  {
    title: "Product 2",
    category: "Category 2",
    brand: "Brand 2",
    img: PImg2,
  },
  {
    title: "Product 3",
    category: "Category 3",
    brand: "Brand 3",
    img: PImg3,
  },
  {
    title: "Product 4",
    category: "Category 4",
    brand: "Brand 4",
    img: PImg4,
  },
  {
    title: "Product 5",
    category: "Category 5",
    brand: "Brand 5",
    img: PImg1,
  },
  {
    title: "Product 6",
    category: "Category 6",
    brand: "Brand 6",
    img: PImg2,
  },
];

const ProductSection = () => {
  return (
    <Wrapper>
      <div className={styles.sectionContainer}>
        <h1 className={styles.sectionTitle}>Featured Products</h1>
        <div className={styles.productGrid}>
          {productData
            .slice(0, 3)
            .map((data: IProductDataProp, index: number) => (
              <ProductCard key={index} data={data} />
            ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductSection;
