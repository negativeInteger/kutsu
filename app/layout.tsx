import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./AuthProvider";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kutsu",
  description: "Shoe shopping made easy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body
          className={`${inter.className} antialiased`}
        >
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)}/>
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
