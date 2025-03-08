import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "../context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emre Dönmez | Yazılım Geliştirici",
  description: ".NET Core, SQL, RESTful API, CI/CD, JavaScript ve daha fazlasında uzmanlaşmış yazılım geliştirici",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <main className="min-h-screen bg-dark-gradient">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
