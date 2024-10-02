import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import React from 'react';
import { ReduxProvider } from '@/redux/provider';
import GlobalStyles from "@/styled-components/GlobalStyle";

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'at-work',
  description: 'at-work',
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
      <body className={montserrat.className}>
          <GlobalStyles />
      <ReduxProvider>
              {children}
      </ReduxProvider>

      </body>
      </html>
  );
}
