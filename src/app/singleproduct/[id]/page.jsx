import AddToCartButton from '@/components/AddToCartButton';
import Container from '@/components/Container';
import PriceContainer from '@/components/PriceContainer';
import ProductImage from '@/components/ProductImage';
import { treeBlog } from '@/constants';
import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BiRefresh } from 'react-icons/bi';
import { CiDeliveryTruck } from 'react-icons/ci';

const SingleProductPage = async ({ params }) => {

      const { id } = await params;

      // Find the specific item based on ID     
      const singleData = treeBlog.find(
            (item) => item.id == id
      );

      return (
            <div className='mt-16'>
                  <Container className='border-t border-b border-gray-300'>
                        <div className="flex flex-col lg:flex-row mt-4 py-8">

                              {/* ------------ Product Image ------------ */}

                              <ProductImage product={singleData} />
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
                                    <PriceContainer className={"mt-2"} item={singleData}/>
                                    <h1 className="text-gray-700 mt-1">{singleData?.offer}</h1>
                                    <div className="flex items-center gap-2 text-gray-700 mt-1">
                                          <CiDeliveryTruck size={20} />
                                          <p>Free Delivery</p>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-700 mt-1">
                                          <BiRefresh size={20} />
                                          <p>Free 30 Days Return Delivery</p>
                                    </div>
                                    <AddToCartButton className={"lg:w-[135px] w-[148px] rounded-lg mt-4"} item={singleData}/>
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default SingleProductPage;