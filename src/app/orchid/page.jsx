import { imgfour, imgone, imgthree, imgtwo, orchid, orchidsideone } from "@/assets";
import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

const OrchidPage = () => {
      return (
            <div className="mt-8">
                  <Container>
                        <div className={"relative"}>
                              <Image className="lg:h-[500px] " src={orchid} alt="banner-img" />
                              <div className="absolute top-28 left-10 hidden md:block">
                                    <h1 className="text-3xl tracking-wide text-gray-800 font-medium">Discover Elegance with Orchid - Shop Now!</h1>
                                    <p className="mt-4 tracking-wide text-gray-700">Find the perfect blend of style and quality with our exclusive collection. <br /> Explore deals crafted just for you!</p>
                                    <Link href={"/shop"}>
                                          <button className="mt-4 bg-[#8aaa5e] py-1.5 px-4 text-white text-sm">Shop Now</button>
                                    </Link>
                              </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 mt-4">
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                    <Image className="w-[450px] h-80" src={imgone} alt="banner-img" />
                                    <Image className="w-[450px] h-80" src={imgtwo} alt="banner-img" />
                                    <Image className="w-[450px] h-80" src={imgthree} alt="banner-img" />
                                    <Image className="w-[450px] h-80" src={imgfour} alt="banner-img" />
                              </div>
                              <Image className="w-96" src={orchidsideone} alt="banner-img" />
                        </div>
                  </Container>
            </div>
      );
};

export default OrchidPage;