import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flexibble | Create Projects",
  description: "Flexibble is the world's leading community for developers to share grow and get hired also",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div className={inter.className}>{children}</div>
    </section>
  );
}
