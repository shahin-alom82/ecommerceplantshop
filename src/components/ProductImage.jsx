"use client";
import Image from "next/image";
import { useState } from "react";

const ProductImage = ({ product }) => {
      const [imageClick, setImageClick] = useState(product?.images?.[0].url);

      return (
            <div className="flex">
                  {/* Sidebar Thumbnail Images */}
                  <div className="w-1/6">
                        {product?.images?.map((item, index) => (
                              <button
                                    key={index}
                                    onClick={() => setImageClick(item.url)}
                                    className={`mb-2`}
                              >
                                    <div className={`lg:h-24 lg:w-20 h-16 w-14 border border-gray-300 ${item.url === imageClick ? "border-[#7c9657] border" : ""}`}>
                                          {item.url && (
                                                <Image
                                                      src={item.url}
                                                      alt={`product-thumbnail-${index}`}
                                                      height={300}
                                                      width={300}
                                                />
                                          )}
                                    </div>
                              </button>
                        ))}
                  </div>

                  {/* Main Product Image */}
                  <div className="w-5/6 flex justify-center items-center">
                        <div>
                              {imageClick && (
                                    <Image
                                          className="lg:h-80 lg:w-72 w-40 h-48"
                                          src={imageClick}
                                          alt="selected product"
                                          height={300}
                                          width={300}
                                    />
                              )}
                        </div>
                  </div>
            </div>
      );
};

export default ProductImage;
