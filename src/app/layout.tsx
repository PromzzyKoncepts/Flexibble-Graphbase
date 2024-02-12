"use client"

import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Flexibble app",
//   description: "Showcase and discover remarkable developer projects",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating some asynchronous task

    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array to run the effect only once

  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          {loading ? (
            <Loading />
          ) : (
            <>
              <Navbar />
              <main>{children}</main>
              <Footer />
            </>
          )}
        </Suspense>
      </body>
    </html>
  );
}
