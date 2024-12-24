"use client"
import AddToCartButton from "@/components/AddToCartButton";
import Container from "@/components/Container";
import Modal from "@/components/Modal";
import PriceContainer from "@/components/PriceContainer";
import ProductImage from "@/components/ProductImage";
import { treeBlog } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BiRefresh } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";

const ShopPage = () => {


      const [isModalOpen, setIsModalOpen] = useState(false);
      const [selectedProduct, setSelectedProduct] = useState(null);
      const [selectedCategory, setSelectedCategory] = useState("All");

      const filterProducts =
            selectedCategory === "All"
                  ? treeBlog
                  : treeBlog.filter((item) => item.category === selectedCategory);


      const openModal = (product) => {
            setSelectedProduct(product);
            setIsModalOpen(true);
      };

      const closeModal = () => {
            setSelectedProduct(null);
            setIsModalOpen(false);
      };

      return (
            <div className="mt-6">
                  <Container className={"flex lg:flex-row flex-col w-full"}>
                        <div className=" md:w-[18%] px-4 py-4">
                              {/* ----------------------- Category Buttons ----------------------------- */}
                              <div className="flex flex-col gap-4">
                                    {["All", "Featured", "Bestselling", "Latest"].map((category) => (
                                          <button
                                                className={`lg:px-4 px-3 py-1.5 font-medium duration-300 ease-in-out tracking-wide ${selectedCategory === category
                                                      ? "bg-[#90ac68] text-white shadow-lg"
                                                      : "border border-gray-300 text-gray-600 hover:bg-gray-200"
                                                      }`}
                                                onClick={() => setSelectedCategory(category)}
                                                key={category}
                                          >
                                                {category}
                                          </button>
                                    ))}
                              </div>
                              {/* ----------------------- Offer Buttons ----------------------------- */}
                              <div className="mt-6">
                                    <h1 className="text-gray-800 tracking-wide text-sm">Offer Price Rangs</h1>
                                    <div className="flex gap-4 mt-1">
                                          <button className="border border-gray-300 py-1.5 px-2.5  text-gray-600 hover:bg-gray-200 text-sm">1% to 20%</button>
                                          <button className="border py-1.5 px-2 border-gray-300 text-gray-600 hover:bg-gray-200 text-sm">21% to 30%</button>
                                    </div>
                              </div>
                              {/* ----------------------- Price Buttons ----------------------------- */}
                              <div className="mt-6">
                                    <h1 className="text-gray-800 tracking-wide text-sm">Price Rangs</h1>
                                    <div className="mt-1 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                          <button className="border border-gray-300 text-sm text-gray-600 py-1.5 px-1.5">1 to 20</button>
                                          <button className="border border-gray-300 text-sm text-gray-600 py-1.5 px-1.5">1 to 20</button>
                                          <button className="border border-gray-300 text-sm text-gray-600 py-1.5 px-1.5">1 to 20</button>
                                          <button className="border border-gray-300 text-sm text-gray-600 py-1.5 px-1.5">1 to 20</button>
                                         
                                         
                                    </div>
                              </div>
                        </div>
                        <div className="flex-1 px-6 py-4">
                              {/* ------------ Product Grid to Cart Product ------------------- */}
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                                    {
                                          filterProducts?.map((item) => (
                                                <div
                                                      key={item.id}
                                                      className="h-[355px] border-[#badb8c] border rounded-lg cursor-pointer"
                                                >
                                                      <div className="h-[60%] flex justify-center items-center">
                                                            <Image
                                                                  src={item.images[0]?.url}
                                                                  height={200}
                                                                  width={200}
                                                                  alt={"Product Image"}
                                                                  className="py-2 px-2"
                                                            />
                                                      </div>
                                                      <div className="h-[30px] border-t border-[#badb8c] flex flex-col justify-between p-3">
                                                            <p className="text-xl tracking-wide text-gray-800 font-medium">{item?.title.slice(0, 15)}</p>
                                                            <PriceContainer className="mt-3" item={item} />
                                                            <button onClick={() => openModal(item)} className="mt-4 bg-[#a1c273] w-full py-1.5 text-white rounded-full">
                                                                  Add To Cart
                                                            </button>
                                                      </div>
                                                </div>

                                          ))
                                    }
                              </div>




                              {/* ----------------  Modal ----------------------- */}
                              {isModalOpen && selectedProduct && (
                                    <Modal isOpen={isModalOpen} onClose={closeModal}>
                                          {/* ---------------- Modal Content ---------------- */}
                                          <div className="bg-white py-4 px-4">
                                                <div className="flex flex-col lg:flex-row">
                                                      {/* ------------ Product Image ------------ */}
                                                      <ProductImage product={selectedProduct} />
                                                      <div>
                                                            <h1 className="lg:text-2xl tracking-wide text-gray-800">
                                                                  {selectedProduct.title}
                                                            </h1>
                                                            <p className="text-gray-600 mt-2">{selectedProduct.description}</p>
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

                                                            <PriceContainer className={"mt-2"} item={selectedProduct} />
                                                            <h1 className="text-gray-700 mt-1">{selectedProduct?.offer}</h1>
                                                            <div className="flex items-center gap-2 text-gray-700 mt-1">
                                                                  <CiDeliveryTruck size={20} />
                                                                  <p>Free Delivery</p>
                                                            </div>
                                                            <div className="flex items-center gap-2 text-gray-700 mt-1">
                                                                  <BiRefresh size={20} />
                                                                  <p>Free 30 Days Return Delivery</p>
                                                            </div>
                                                            <AddToCartButton className={"lg:w-[135px] w-[148px] rounded-lg mt-4"} item={selectedProduct} />
                                                      </div>
                                                </div>
                                                <button
                                                      onClick={closeModal}
                                                      className="mt-4 bg-red-500 text-white py-1 px-3"
                                                >
                                                      Close
                                                </button>
                                          </div>
                                    </Modal>
                              )}



                        </div>
                  </Container>
            </div>
      );
};

export default ShopPage;