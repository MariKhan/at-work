import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import React from "react";
import { ReduxProvider } from "@/redux/provider";
import GlobalStyles from "@/styled-components/GlobalStyle";
import { Header } from "@/view/header";

const manrope = Manrope({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "at-work",
  description: "at-work",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className={manrope.className}>
        <GlobalStyles />
        <Header />

        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
