import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[url('https://i.pinimg.com/564x/2f/96/5b/2f965bc2270b0e61b6fc0cc9ad8c8dde.jpg')] bg-cover`}
      ></body>
    </html>
  );
}