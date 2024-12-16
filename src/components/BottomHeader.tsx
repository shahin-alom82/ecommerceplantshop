import { navLink } from "@/constants";
import Container from "./Container";
import Link from "next/link";

const BottomHeader = () => {
      return (
            <div className="hidden md:block bg-[#badb8c]">
                  <Container className="flex items-center lg:gap-8 gap-4 py-2">
                        {navLink.map((item, index) => (
                              <div key={index} className="group">
                                    <Link href={item?.path}>
                                          <div className="lg:text-[15px] uppercase text-sm font-medium tracking-wide text-gray-800 relative overflow-hidden">
                                                {item?.name}
                                                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#5b8028] inline-block -translate-x-[100%] group-hover:translate-x-0 duration-300"></span>
                                          </div>
                                    </Link>
                              </div>
                        ))}
                  </Container>
            </div>
      );
};

export default BottomHeader;
