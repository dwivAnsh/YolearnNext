// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});


export const metadata: Metadata = {
  title: "YoLearn.ai",
  description: "Your AI Learning Companion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Put theme from localStorage on <html> during first paint
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-theme=""
    >
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>

        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem("theme") || "light";
                  document.documentElement.setAttribute("data-theme", theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
