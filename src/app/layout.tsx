import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StoreProvider } from "@/features/todos/StoreProvider";
import styles from './layout.module.css'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ToDo Tasks for Sparta",
  description: "Technical test for Sparta, using Next.js and TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`${inter.className} ${styles.container}`}>{children}</body>
      </html>
    </StoreProvider>
  );
}
