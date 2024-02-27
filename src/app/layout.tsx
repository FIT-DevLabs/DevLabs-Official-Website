import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevLabs",
  description: "DevLabs Official Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.160.0/three.min.js"
          integrity="sha512-vnmn/Qqn6aG0POAc9mIGzjq0IybrvxJXYDafNvp9JSnDGxeF3pbkSqLvf+YGd5ku63pT7sa/jxHn7/d0mU8+tA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        ></script>
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
