import Container from '@/components/Container';
import PriceFormate from '@/components/PriceFormate';
import ProductImage from '@/components/ProductImage';
import { treeBlog } from '@/constants';
import { ProductType } from '@/type';
import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BiRefresh } from 'react-icons/bi';
import { CiDeliveryTruck } from 'react-icons/ci';

const SingleProductPage = async ({ params }: { params: Promise<{ id: number }> }) => {

      const { id } = await params;

      // Find the specific item based on ID     
      const singleData = treeBlog.find(
            (item: ProductType) => item.id == id
      );

      return (
            <div className='mt-16'>
                  <Container className='border-t border-b border-gray-300'>
                        <div className="flex flex-col lg:flex-row mt-4 py-8">
                              {/* ------------ Product Image ------------ */}

                              <ProductImage product={singleData as ProductType} />
                              <div>
                                    <h1 className="lg:text-2xl tracking-wide text-gray-800">
                                          {singleData?.title}
                                    </h1>
                                    <p className="text-gray-600 mt-2">{singleData?.description}</p>
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
                                    <PriceFormate className="text-gray-800 font-medium mt-2" amount={singleData?.price!} />
                                    <h1 className="text-gray-700 mt-1">{singleData?.offer}</h1>
                                    <div className="flex items-center gap-2 text-gray-700 mt-1">
                                          <CiDeliveryTruck size={20} />
                                          <p>Free Delivery</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-700 mt-1">
                                          <BiRefresh size={20} />
                                          <p>Free 30 Days Return Delivery</p>
                                    </div>
                                    <button className="py-1.5 mt-4 px-4 bg-[#112240] text-white">Add To Cart</button>
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default SingleProductPage;