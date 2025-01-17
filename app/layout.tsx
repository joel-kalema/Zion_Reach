import type { Metadata } from "next";
import "./globals.css";
// import Header from './components/Header';
import Footer from './components/Footer';
// import { BsListNested } from "react-icons/bs";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-clash">
        {/* <Header /> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
