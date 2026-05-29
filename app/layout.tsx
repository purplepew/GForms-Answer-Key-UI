import type { Metadata } from "next";
import './globals.css'
import MUIThemeWrapper from "./MUIThemeWrapper";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

export const metadata: Metadata = {
  title: 'Funnel Website',
  description: 'Built with Next.js + MUI',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang='en'
      style={{
        scrollbarGutter: 'stable',
        overflowY: 'auto',
      }}
    >
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <MUIThemeWrapper>
            {children}
          </MUIThemeWrapper>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
