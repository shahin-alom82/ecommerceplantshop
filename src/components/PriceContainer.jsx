"use client"
import { twMerge } from "tailwind-merge";


import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PriceFormate from "./PriceFormate";

const PriceContainer = ({ item, className }) => {
      const { products } = useSelector((state) => state.shop)
      console.log("product", products)
      const [cartProduct, setCartProduct] = useState(null);
      useEffect(() => {
            const existingProduct = products.find((product) => product?.id === item?.id);
            setCartProduct(existingProduct);
      }, [item, products]);

      // Calculate the regular price
      const disCountPrice = cartProduct
            ? cartProduct?.quantity * item?.price
            : item?.price;
      const regularPrice = cartProduct ?
            item.price * cartProduct.quantity + (item?.discount * (item?.price * cartProduct?.quantity)) / 100
            :
            item.price + (item?.discount * item?.price) / 100

      return (
            <div className={twMerge('flex items-center gap-3', className)}>
                  {/* Original price with discount */}
                  <PriceFormate
                        amount={regularPrice}
                        className="font-medium text-gray-600 line-through"
                  />
                  {/* Regular price */}
                  <PriceFormate
                        amount={disCountPrice}
                        className="text-gray-800"
                  />
            </div>
      );
};

export default PriceContainer;
