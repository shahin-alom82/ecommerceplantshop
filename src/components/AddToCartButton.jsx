"use client"
import { twMerge } from "tailwind-merge";
import toast from 'react-hot-toast'

import { useEffect, useState } from "react";
import { TiPlusOutline } from "react-icons/ti";
import { TiMinusOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreseQuantity, increseQuantity } from "@/constants/plantSlice";

const AddToCartButton = ({ item, className }) => {
      const [cartProduct, setCartProduct] = useState(null)
      const { products } = useSelector((state) => state.shop)
      const dispatch = useDispatch()


      const handleAddToCart = () => {
            dispatch(addToCart(item))
            toast.success(`${item?.name}, added successfully!`)
      }

      useEffect(() => {
            const existingProduct = products.find((product) => product?.id === item?.id)
            setCartProduct(existingProduct)
      }, [item, products])
      // Increment quantity
      const handlePlus = () => {
            if (cartProduct) {
                  dispatch(increseQuantity(cartProduct.id));
                  toast.success("Increased quantity  successfully!");
            }
      };

      // Decrement quantity
      const handleMinus = () => {
            if (cartProduct?.quantity > 1) {
                  dispatch(decreseQuantity(cartProduct.id));
                  toast.success("Decreased Quantity successfully!");
            } else {
                  toast.error("Minimum quantity is 1");
            }
      };
      return (
            <div className="h-12">
                  {
                        cartProduct ?
                              (
                                    <div className={twMerge('py-1.5 px-4 border border-gray-300 rounded-b-lg', className)}>
                                          <div className="flex items-center gap-8 lg:gap-6">
                                                <span onClick={handleMinus}
                                                      className="border border-gray-400 py-1 px-1  hover:bg-black hover:text-white duration-300 cursor-pointer">
                                                      <TiMinusOutline size={12} />
                                                </span>
                                                <span onClick={handleMinus} className="text-[#8bab5e] font-medium">{cartProduct?.quantity}</span>
                                                <span onClick={handlePlus} className="border border-gray-400 py-1 px-1 hover:bg-black hover:text-white duration-300 cursor-pointer">
                                                      <TiPlusOutline size={12} />
                                                </span>
                                          </div>
                                    </div>
                              )
                              :
                              (
                                    <button onClick={handleAddToCart} className={twMerge(' bg-[#a1c273]  rounded-b-lg  text-white text-sm tracking-wide w-full py-2', className)}>Add To Cart</button>
                              )
                  }
            </div>
      );
};

export default AddToCartButton;