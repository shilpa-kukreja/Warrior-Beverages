import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingEnquiryButton from "./components/FloatingEnquiryButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Neysa Premium  Water",
  description: "Neysa Premium  Water is a premium packaged drinking water brand committed to delivering purity, consistency, and refreshment through advanced purification processes and high-quality packaging.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}  <FloatingEnquiryButton /></body>
    </html>
  );
}
