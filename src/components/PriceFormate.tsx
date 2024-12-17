import { twMerge } from "tailwind-merge";

interface Props {
      className: string,
      amount: number
}

const PriceFormate = ({ amount, className }: Props) => {
      const price = new Number(amount).toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2
      })
      return (
            <div className={twMerge("text-black", className)}>
                  {price}
            </div>
      );
};

export default PriceFormate;