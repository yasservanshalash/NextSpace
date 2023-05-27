import Navbar from "@/components/layout/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import AuthProvider from "./AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextSpace",
  description: "Welcome to NextSpace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {children}
      </body>
    </html>
    </AuthProvider>
  );
}
