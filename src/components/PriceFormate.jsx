"use client"
import { twMerge } from "tailwind-merge";

const PriceFormate = ({ amount, className }) => {
      const Price = new Number(amount).toLocaleString("en-US", {
            style: 'currency',
            currency: "USD",
            minimumFractionDigits: 2
      })
      return (
            <div className={twMerge("text-gray-700", className)}>
                  {Price}
            </div>
      );
};

export default PriceFormate;