"use client"
import { logo } from "@/assets";
import Container from "@/components/Container";
import Image from "next/image";
import SearchInput from "./SearchInput";
import { FaShoppingBag, FaUserAlt } from "react-icons/fa";
import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";


const Header = () => {
      return (
            <div className="border-b border-gray-300">
                  <Container className="flex items-center py-6 gap-2 justify-between">
                        {/* Logo */}
                        <Link href={"/"}>
                              <Image src={logo} alt="logo" className="h-8" />
                        </Link>
                        {/* Search Input */}
                        <SearchInput />



                        {/* User & Cart */}

                        <div className="lg:flex  items-center justify-between gap-4 lg:gap-14 hidden md:block">
                              <div className="flex items-center gap-2">
                                    <span className="border border-gray-400 text-gray-700 py-2 px-2 rounded-full"><FaUserAlt size={20} /></span>
                                    <div className="lg:text-[16px] text-sm">
                                          <h1>Hello / Guest</h1>
                                          <h1>Login</h1>
                                    </div>
                              </div>

                              <div className="relative">
                                    <FaShoppingBag size={25} className="text-gray-600" />
                                    <span className="absolute bg-[#badb8c] py-[1px] px-1.5 text-gray-600 text-xs rounded-full bottom-5 right-[3px]">9</span>
                              </div>
                        </div>
                        {/* Menu Bar */}
                        <div className="md:hidden block">
                              <IoMenuSharp size={30} />
                        </div>



                  </Container>
            </div>
      );
};

export default Header;