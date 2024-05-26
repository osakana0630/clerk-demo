import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toolbar } from "@/components/toolbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="ja">
        <body className={cn(inter.className, "h-dvh")}>
          {children}
          <Toolbar />
        </body>
      </html>
    </ClerkProvider>
  );
}
