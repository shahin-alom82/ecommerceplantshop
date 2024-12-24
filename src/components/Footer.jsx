import { MdOutlineMail } from "react-icons/md";
import Container from "./Container";
import { GrLocation } from "react-icons/gr";
import { FiPhoneCall } from "react-icons/fi";
import Image from "next/image";
import { footer } from "@/assets";

const Footer = () => {
      return (
            <div className="mt-20 bg-[#badb8c] py-8">
                  <Container className="">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-4">
                              <div>
                                    <h1 className="text-xl font-medium tracking-wide">OUR ADDRESS</h1>
                                    <div className="mt-6 flex flex-col space-y-2">
                                          <div className="flex items-center gap-2">
                                                <MdOutlineMail />
                                                <p>shahinalom3511371@gmail.com</p>
                                          </div>
                                          <div className="flex items-center gap-2">
                                                <GrLocation />
                                                <p>Assim, Fulbaria, Mymensingh</p>
                                          </div>
                                          <div className="flex items-center gap-2">
                                                <FiPhoneCall />
                                                <p>01682247291</p>
                                          </div>
                                    </div>
                              </div>
                              <div>
                                    <h1 className="text-xl font-medium tracking-wide">ACCOUNT</h1>
                                    <div className="mt-6 flex flex-col space-y-2">
                                          <p>Orders</p>
                                          <p>Checkout</p>
                                          <p>Downloads</p>
                                          <p>My Account</p>
                                          <p>Account Details</p>
                                    </div>

                              </div>
                              <div>
                                    <h1 className="text-xl font-medium tracking-wide">INFORMATION</h1>
                                    <div className="mt-6 flex flex-col space-y-2">
                                          <p>FAQs</p>
                                          <p>Delivery Information</p>
                                          <p>Contact Us</p>
                                          <p>Wishlist</p>
                                          <p>Compare</p>
                                    </div>
                              </div>
                              <div>
                                    <h1 className="text-xl font-medium tracking-wide">CATEGORY</h1>
                                    <div className="mt-6 flex flex-col space-y-2">
                                          <p>Fiddle-Leaf Fig</p>
                                          <p>Eucalyptus</p>
                                          <p>Cactus</p>
                                          <p>Aeonium</p>
                                    </div>

                              </div>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between mt-4 gap-4 pt-6 border-t border-green-600">
                              <span className="tracking-wide">© 2024 Plantshop. All Rights Reserved.</span>

                              <Image src={footer} alt="img"/>
                        </div>
                  </Container>
            </div>
      );
};

export default Footer;