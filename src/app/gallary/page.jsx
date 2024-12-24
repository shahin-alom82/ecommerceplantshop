import Container from "@/components/Container";
import React from "react";
import {
      FaTree,
      FaPen,
      FaBook,
      FaLeaf,
      FaGlobe,
      FaMountain,
} from "react-icons/fa";

const Gallery = () => {
      const galleryItems = [
            {
                  id: 1,
                  icon: <FaTree size={40} className="text-blue-600"/>,
                  title: "Tree Planting Blog",
                  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, amet?",
            },
            {
                  id: 2,
                  icon: <FaPen size={40} className="text-[#8aaa5e]"/>,
                  title: "Writing Nature Stories",
                  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, amet?",
            },
            {
                  id: 3,
                  icon: <FaBook size={40}  className="text-gray-500"/>,
                  title: "Nature Reading List",
                  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, amet?",
            },
            {
                  id: 4,
                  icon: <FaTree size={40} className="text-blue-600"/>,
                  title: "Sustainable Forests",
                  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, amet?",
            },
            {
                  id: 5,
                  icon: <FaLeaf size={40} className="text-orange-400"/>,
                  title: "Leaf Identification Guide",
                  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, amet?",
            },
            {
                  id: 6,
                  icon: <FaGlobe size={40} className="text-cyan-500"/>,
                  title: "Global Conservation Efforts",
                  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, amet?",
            },
            {
                  id: 7,
                  icon: <FaMountain size={40} className="text-lime-500"/>,
                  title: "Mountain Exploration",
                  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, amet?",
            },
            {
                  id: 8,
                  icon: <FaTree size={40} className="text-blue-600"/>,
                  title: "Urban Greening Projects",
                  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, amet?",
            },
            {
                  id: 9,
                  icon: <FaPen size={40} className="text-[#8aaa5e]"/>,
                  title: "The Art of Nature Writing",
                  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, amet?",
            },
            {
                  id: 10,
                  icon: <FaBook size={40} className="text-gray-500"/>,
                  title: "Eco-Friendly Living",
                  description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, amet?",
            },
            {
                  id: 11,
                  icon: <FaLeaf size={40} className="text-orange-400"/>,
                  title: "Plant-Based Diets for the Planet",
                  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, amet?",
            },
            {
                  id: 12,
                  icon: <FaGlobe size={40}  className="text-cyan-500"/>,
                  title: "Protecting Marine Life",
                  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, amet?",
            },
      ];

      return (
            <Container className="mt-10">
                  <h1 className="text-center tracking-wide text-gray-800 lg:text-3xl text-xl border-b-2 mx-auto border-gray-700 lg:w-96 w-64 py-1">Tree & Nature Blog Gallery</h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                        {
                              galleryItems.map((item, index) => (
                                    <div key={index} className="border border-gray-300 py-4 hover:rotate-3 cursor-pointer duration-300">
                                          <h1 className="flex items-center justify-center mx-auto mt-2">{item?.icon}</h1>
                                          <div className="py-4 px-4 mt-4 text-center">
                                                <h1 className="text-xl tracking-wide text-gray-700 font-medium">{item?.title.slice(0,20)}</h1>
                                                <p className="mt-2 tracking-wide text-sm text-gray-800">{item?.description}</p>
                                          </div>
                                    </div>
                              ))
                        }
                  </div>
            </Container>
      );
};

export default Gallery;