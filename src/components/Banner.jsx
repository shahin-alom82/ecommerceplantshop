import Image from 'next/image';
import { banner, bannerfour, bannerone, bannerthree, bannertwo } from '@/assets';
import Container from './Container';

const Banner = () => {
      return (
            <div>
                  {/* Frist Banner */}
                  <div className='bg-[#dcffab]'>
                        <Container className='py-14'>
                              <Image src={banner} alt='bannerImage' className='lg:h-[450px] mx-auto lg:w-[1100px]' />

                        </Container>
                  </div>
                  {/* Secend Banner */}
                  <Container className='mt-16'>
                        <div className='flex flex-col lg:flex-row gap-5'>
                              <div className='relative'>
                                    <Image src={bannerthree} alt='bannerImage' className='h-[200px] w-[420px]' />
                                    <div className='absolute top-14 left-8 '>
                                          <h1 className='text-xl font-medium tracking-wide '>Just For You</h1>
                                          <p className='text-sm mt-2 tracking-wide'>Indoor Plants</p>
                                          <button className='text-sm border border-[#badb8c] py-1 px-3 mt-2 text-gray-600'>Shop Now</button>
                                    </div>
                              </div>
                              <div className='relative'>
                                    <Image src={bannerone} alt='bannerImage' className='h-[200px] w-[420px]' />
                                    <div className='absolute top-14 left-8 '>
                                          <h1 className='text-xl font-medium tracking-wide'>Fresh Flower</h1>
                                          <p className='text-sm mt-2 tracking-wide'>Hanging plant</p>
                                          <button className='text-sm border border-[#badb8c] py-1 px-3 mt-2 text-gray-600'>Shop Now</button>
                                    </div>
                              </div>
                              <div className='relative'>
                                    <Image src={bannertwo} alt='bannerImage' className='h-[200px] w-[420px]' />
                                    <div className='absolute top-14 left-8 '>
                                          <h1 className='text-xl font-medium tracking-wide'>Sale Off</h1>
                                          <p className='text-sm mt-2 tracking-wide'>Modern Plant</p>
                                          <button className='text-sm border border-[#badb8c] py-1 px-3 mt-2 text-gray-600'>Shop Now</button>
                                    </div>
                              </div>
                        </div>
                        {/* Third Banner */}
                        <div className='mt-20 flex flex-col justify-between lg:flex-row gap-24'>
                              <Image src={bannerfour} alt='bannerImage' className='lg:h-[400px] lg:w-[500px]' />
                              <div className='lg:mt-16 mt-2'>
                                    <h1 className='lg:text-xl text-sm text-gray-600 tracking-wide'>New Collection 2024</h1>
                                    <p className='uppercase lg:text-3xl text-xl tracking-wide text-gray-800 mt-2 font-medium'>House Shape Plant</p>
                                    <p className='mt-2 text-gray-800'>The growth of a plant involves several stages. First, a plot of land is selected. The land is then dug well with the help of a spade. The soil is ground into dust, and both biological and chemical manure are added. Seeds are collected from the market and sown on the bed.</p>
                                    <button className='mt-4 border border-[#badb8c] py-1.5 text-gray-700 px-4'>Shop Now</button>
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default Banner;