import React from 'react';
import Container from './Container';
import Image from 'next/image';
import { banner } from '@/assets';

const Banner = () => {
      return (
            <div className='bg-[#dcffab] mt-4'>
                  <Container className='py-6'>
                        <Image src={banner} alt='bannerImage' className=''/>
                  </Container>
            </div>
      );
};

export default Banner;