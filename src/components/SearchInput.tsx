"use client"
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const SearchInput = () => {

      const [search, setSearch] = useState('')

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
            </div>
      );
};

export default SearchInput;