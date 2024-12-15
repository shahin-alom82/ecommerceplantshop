import { navLink } from "@/constants";
import Container from "./Container";
import Link from "next/link";

const BottomHeader = () => {
      return (
            <div className="hidden md:block">
                  <Container className="flex items-center lg:gap-8 gap-4 mt-3">
                        {
                              navLink.map((item, index) => (
                                    <div key={index} >
                                          <Link href={item?.path} className="lg:text-[18px] text-sm font-medium tracking-wide text-gray-800">
                                                {item?.name}
                                          </Link>
                                    </div>

                              ))
                        }
                  </Container>
            </div>
      );
};

export default BottomHeader;