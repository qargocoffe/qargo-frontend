import type { Metadata } from "next";
import "./globals.css";
import './animations.css'
import { albertSans } from "@/config/fonts";


export const metadata: Metadata = {
  title: "Qargo Coffee",
  description: "Generated by create next app and Bairon Bernal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={albertSans.className} >{
      children
      }</body>
    </html>
  );
}
