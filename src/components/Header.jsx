"use client"
import { logo } from "@/assets";
import Container from "@/components/Container";
import Image from "next/image";
import SearchInput from "./SearchInput";
import { FaFacebook, FaGithub, FaLinkedinIn, FaShoppingBag, FaUserAlt, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { IoCloseSharp, IoMenuSharp } from "react-icons/io5";
import { signIn, signOut, useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { navLink } from "@/constants";
import { TfiEmail } from "react-icons/tfi";
import { CiLogout } from "react-icons/ci";



const Header = () => {
      const { products } = useSelector((state) => state.shop)

      const { data: session } = useSession()

      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
      };



      return (
            <div className="border-b border-gray-300">
                  <Container className="flex items-center py-6 gap-8 justify-between">
                        {/* ------------ Logo ---------------- */}
                        <Link href={"/"}>
                              <Image src={logo} alt="logo" className="h-8" />
                        </Link>
                        {/* ------------- Search Input ------------ */}

                        <SearchInput />

                        {/* -------------- User & Cart --------------- */}


                        <div className="lg:flex  items-center justify-between gap-4 lg:gap-14 hidden md:block w-72">
                              <div>
                                    {
                                          session?.user ? <div className="flex items-center gap-2">
                                                <Image className="h-10 w-10 rounded-full" src={session?.user?.image} alt="img" height={100} width={100} />
                                                <div className="lg:text-[16px] text-sm">
                                                      <h1>{session?.user?.email}</h1>
                                                      <div className="flex items-center gap-1 text-[#8aaa5e]">
                                                            <h1 onClick={() => signOut()}>logout</h1>
                                                            <CiLogout />
                                                      </div>
                                                </div>
                                          </div> : <div onClick={() => signIn()} className="flex items-center gap-2">
                                                <span className="border border-gray-400 text-gray-700 py-2 px-2 rounded-full"><FaUserAlt size={20} /></span>
                                                <div className="lg:text-[16px] text-sm">
                                                      <h1>Hello / Guest</h1>
                                                      <h1>Login</h1>
                                                </div>
                                          </div>
                                    }
                              </div>

                              <Link href={"/cart"}>
                                    <div className="relative">
                                          <FaShoppingBag size={25} className="text-gray-600" />
                                          <span className="absolute bg-[#badb8c] py-[1px] px-1.5 text-gray-600 text-xs rounded-full bottom-5 right-[3px]">{products?.length}</span>
                                    </div>
                              </Link>
                        </div>
                        {/* ----------------- Menu Bar ---------------- */}
                        <div className="md:hidden block">
                              <button onClick={toggleMenu} className="text-lightext hover:text-primary hoverEffect">
                                    {isMenuOpen ? <IoCloseSharp size={30} /> : <IoMenuSharp size={30} />}
                              </button>

                              {/* Mobile Menu */}
                              {isMenuOpen && (
                                    <div className="absolute top-full left-0 bg-black text-white w-full shadow-md z-40">
                                          <h1 className="text-gray-300 text-[24px] px-8 mt-6">Nabigation Manu</h1>
                                          <ul className="flex flex-col gap-4 px-8 mb-2 mt-6">
                                                {navLink.map((item, index) => (
                                                      <div className="flex items-center gap-2" key={index}>
                                                            <span className="border border-lightext hover:border-gray-300 duration-300 h-2 w-2 rounded-full"></span>
                                                            <Link
                                                                  className="text-lightext hover:text-gray-300 duration-300 font-medium"
                                                                  href={item?.path}
                                                                  onClick={() => setIsMenuOpen(false)}
                                                            >
                                                                  {item?.name}
                                                            </Link>
                                                      </div>
                                                ))}

                                                <div>

                                                      {
                                                            session?.user ? <div className="flex items-center gap-2">

                                                                  <Image height={100} width={100} src={session?.user?.image} alt="userImage" className="rounded-full" />
                                                                  <div>
                                                                        <div className="flex items-center gap-1 text-red-500">
                                                                              <button
                                                                                    onClick={() => signOut()}
                                                                                    className="text-lightext hover:text-gray-300 duration-300 hoverEffect"
                                                                              >
                                                                                    Logout
                                                                              </button>
                                                                              <CiLogout />
                                                                        </div>
                                                                        <p>{session?.user?.email}</p>
                                                                  </div>
                                                            </div> : <div className="flex items-center gap-2">
                                                                  <span className="border border-lightext hover:border-gray-300 duration-300 h-2 w-2 rounded-full"></span> <button
                                                                        onClick={() => signIn()}
                                                                        className="text-lightext hover:text-gray-300 duration-300 hoverEffect"
                                                                  >
                                                                        Login
                                                                  </button>
                                                            </div>
                                                      }
                                                </div>
                                          </ul>
                                          {/* Social Link */}
                                          <div className="flex items-center gap-4 mb-6 mt-4 px-8">
                                                <span className="border border-lightext hover:text-gray-300 py-1.5 cursor-pointer hover:border-gray-300 duration-300 px-1.5 text-lightext rounded-full">
                                                      <FaFacebook size={20} />
                                                </span>
                                                <span className="border border-lightext hover:text-gray-300 py-1.5 cursor-pointer hover:border-gray-300 duration-300 px-1.5 text-lightext rounded-full">
                                                      <FaGithub size={20} />
                                                </span>
                                                <span className="border border-lightext hover:text-gray-300 py-1.5 cursor-pointer hover:border-gray-300 duration-300 px-1.5 text-lightext rounded-full">
                                                      <FaYoutube size={20} />
                                                </span>
                                                <span className="border border-lightext hover:text-gray-300 py-1.5 cursor-pointer hover:border-gray-300 duration-300 px-1.5 text-lightext rounded-full">
                                                      <FaLinkedinIn size={20} />
                                                </span>
                                                <span className="border border-lightext hover:text-gray-300 py-1.5 cursor-pointer hover:border-gray-300 duration-300 px-1.5 text-lightext rounded-full">
                                                      <TfiEmail size={20} />
                                                </span>
                                          </div>
                                    </div>
                              )}

                        </div>


                  </Container>
            </div>
      );
};

export default Header;