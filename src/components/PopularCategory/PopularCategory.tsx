"use client";
import { treeBlog } from "@/constants";
import { useState } from "react";
import Container from "../Container";
import Modal from "../Modal";
import ProductImage from "../ProductImage";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { ProductType } from "@/type";
import CartProduct from "../CartProduct";

const PopularCategory = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);
      const [selectedCategory, setSelectedCategory] = useState("All");

      const filterProducts =
            selectedCategory === "All"
                  ? treeBlog
                  : treeBlog.filter((item) => item.category === selectedCategory);

      const openModal = (product: ProductType) => {
            setSelectedProduct(product);
            setIsModalOpen(true);
      };

      const closeModal = () => {
            setSelectedProduct(null);
            setIsModalOpen(false);
      };

      return (
            <div className="mt-16">
                  <Container className="">
                        {/* Title */}
                        <div>
                              <h1 className="lg:text-[28px] tracking-wide text-gray-700 text-xl text-center uppercase font-medium">
                                    Popular Tree Collection
                              </h1>
                        </div>

                        {/* Category Buttons */}
                        <div className="mt-8 flex justify-center lg:gap-6 gap-2">
                              {["All", "Featured", "Bestselling", "Latest"].map((category) => (
                                    <button
                                          className={`lg:px-4 px-3 py-1.5 font-medium duration-300 ease-in-out tracking-wide ${selectedCategory === category
                                                ? "bg-[#90ac68] text-white shadow-lg"
                                                : "border border-gray-400 text-gray-600 hover:bg-gray-200"
                                                }`}
                                          onClick={() => setSelectedCategory(category)}
                                          key={category}
                                    >
                                          {category}
                                    </button>
                              ))}
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                              {filterProducts.map((item) => <CartProduct item={item} key={item?.id} openModal={openModal} />)}
                        </div>
                        {/* Modal */}
                        {isModalOpen && selectedProduct && (
                              <Modal isOpen={isModalOpen} onClose={closeModal}>
                                    {/* Modal Content */}
                                    <div className="bg-white py-4 px-4">
                                          <div className="flex flex-col lg:flex-row">
                                                <ProductImage product={selectedProduct} />
                                                <div>
                                                      <h1 className="lg:text-2xl tracking-wide text-gray-800">
                                                            {selectedProduct.title}
                                                      </h1>
                                                      <h2 className="text-xl font-semibold mt-2">{selectedProduct.title}</h2>
                                                      <p className="text-gray-600">{selectedProduct.description}</p>
                                                      <div className="flex items-center mt-2">
                                                            {Array.from({ length: 5 }).map((_, i) =>
                                                                  i < 4 ? (
                                                                        <AiFillStar key={i} className="text-yellow-500" />
                                                                  ) : (
                                                                        <AiOutlineStar key={i} className="text-yellow-500" />
                                                                  )
                                                            )}
                                                            <span className="text-gray-600 ml-2">(150 Reviews)</span>
                                                      </div>
                                                      <p className="text-gray-800 font-medium mt-2">
                                                            ${selectedProduct.price}
                                                      </p>
                                                </div>
                                          </div>
                                          <button
                                                onClick={closeModal}
                                                className="mt-4 bg-red-500 text-white py-1 px-3 rounded"
                                          >
                                                Close
                                          </button>
                                    </div>
                              </Modal>
                        )}
                  </Container>
            </div>
      );
};

export default PopularCategory;
