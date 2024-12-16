"use client"
import { treeBlog } from "@/constants";
import { useEffect, useState } from "react";
import Container from "../Container";
import Image from "next/image";


const PopularCategory = () => {
      const [selectedProducts, setSelectedProducts] = useState("All");
      const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

      const filterProducts = selectedProducts === "All" ? treeBlog : treeBlog.filter((item) => item.category === selectedProducts);
      return (
            <div className="mt-16">
                  <Container className="">
                        <div>
                              <h1 className="lg:text-[28px] tracking-wide text-gray-700 text-xl text-center justify-center items-center  uppercase font-medium">Popular Tree Collection</h1>
                        </div>
                        <div className="mt-8 flex justify-center lg:gap-6 gap-2">
                              {["All", "Featured", "Bestselling", "Latest"].map((category) => (
                                    <button
                                          className={`lg:px-4 px-3 py-1.5 font-medium duration-300 ease-in-out tracking-wide ${selectedProducts === category
                                                ? "bg-[#90ac68] text-white shadow-lg"
                                                : "border border-gray-400 text-gray-600 hover:bg-gray-200"
                                                }`}
                                          onClick={() => setSelectedProducts(category)}
                                          key={category}
                                    >
                                          {category}
                                    </button>
                              ))}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                              {
                                    filterProducts.map((item, index) => (
                                          <div key={index} className="border-gray-300 border">
                                                <Image src={item?.images[0]?.url || ""} height={200} width={200} alt="img" className="py-2 px-2 mx-auto"/>
                                          </div>
                                    ))
                              }
                        </div>
                  </Container>
            </div>
      );
};

export default PopularCategory;