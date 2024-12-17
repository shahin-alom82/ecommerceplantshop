import { ProductType } from "@/type";
import Image from "next/image";

interface CartProductProps {
  item: ProductType;
  openModal: (item: ProductType) => void; // Correct typing for the function
}

const CartProduct = ({ item, openModal }: CartProductProps) => {
  return (
    <div
      key={item.id}
      className="border-gray-300 border cursor-pointer"
      onClick={() => openModal(item)}
    >
      <Image
        src={item.images[0]?.url || "/placeholder.png"} // Fallback placeholder
        height={200}
        width={200}
        alt={item.title || "Product Image"}
        className="py-2 px-2 mx-auto"
      />
    </div>
  );
};

export default CartProduct;
