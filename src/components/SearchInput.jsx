"use client"
import { treeBlog } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

const SearchInput = () => {

      const [search, setSearch] = useState('')
      const [filterData, setFilterData] = useState([]);
      const [isSearching, setIsSearching] = useState(false);

      useEffect(() => {
            const timeout = setTimeout(() => {
                  setIsSearching(true);
                  const filtered = treeBlog.filter((item) =>
                        item.title.toLowerCase().includes(search.toLowerCase())
                  );
                  setFilterData(filtered);
                  setIsSearching(false);
            }, 300);

            return () => clearTimeout(timeout);
      }, [search]);
      return (
            <div className="hidden md:block relative">
                  <input
                        value={search}
                        type="text"
                        className="border border-gray-300 outline-none py-2 w-[800px] rounded-full pr-12 pl-12 "
                        onChange={(e) => setSearch(e.target.value)}
                  />
                  <HiOutlineSearch className="bottom-3 left-4 absolute text-gray-500" size={18} />

                  {
                        search && (
                              <IoMdClose onClick={() => setSearch('')} className="absolute top-2.5 right-6 hover:text-red-600 cursor-pointer duration-300" size={20} />
                        )
                  }

                  {/* content */}
                  {search && (
                        <div className="absolute z-10 w-full bg-white  mt-6 max-h-60 overflow-auto transition-all duration-300">
                              {isSearching ? (
                                    <div className="p-2 text-gray-500">Searching...</div>
                              ) : filterData.length > 0 ? (
                                    filterData.map((item) => (
                                          <Link
                                                key={item.id}
                                                onClick={() => setSearch("")}
                                                href={{ pathname: `/singleproduct/${item.id}` }}
                                          >
                                                <div className="p-3 hover:bg-gray-100  cursor-pointer flex mt-1  space-x-4 transition duration-200">
                                                      <Image
                                                            className="w-16 h-16 ease-in-out  border border-gray-300"
                                                            src={item.images[0].url}
                                                            alt={item.title}
                                                            width={48}
                                                            height={48}
                                                      />
                                                      <div>
                                                            <h1 className="text-sm font-medium text-gray-800 tracking-wide">
                                                                  {item.title}
                                                            </h1>
                                                            <p className="text-sm text-gray-800 tracking-wide">${item?.price}</p>
                                                      </div>
                                                </div>
                                          </Link>
                                    ))
                              ) : (
                                    <div className="py-6 px-4 gap-2 text-gray-500 flex items-center">
                                          <IoSearch />
                                          <h1> No results found</h1>
                                    </div>
                              )}
                        </div>
                  )}





            </div>
      );
};

export default SearchInput;