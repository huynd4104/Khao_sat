import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin", "vietnamese"],
  variable: "--font-quicksand"
});

export const metadata: Metadata = {
  title: "Khảo Sát Theo Nhóm",
  description: "Trang điều hướng khảo sát cho đúng nhóm đối tượng mẹ và gia đình."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={quicksand.variable}>{children}</body>
    </html>
  );
}