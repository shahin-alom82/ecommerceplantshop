import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Layout from "@/components/Layout/Layout";
import BottomHeader from "@/components/BottomHeader";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "E-Commerce Plant Shop",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-bodyFont`}
      >
        <Layout>
          <div className="sticky top-0 z-10 bg-white">
            <Header />
            <BottomHeader />
          </div>
          {children}
          <Footer />
          <Toaster
            position="bottom-right"
            reverseOrder={false}
          />
        </Layout>
      </body>
    </html>
  );
}
