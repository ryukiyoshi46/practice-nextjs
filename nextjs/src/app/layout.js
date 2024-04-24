import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "（Next.js実装版）堂平天文台デジタルMUSEUM",
  description: "昭和37年以来、観測所として日本の天文学を支えてきた「堂平観測所ドーム」。その魅力を臨場感のあるデジタルMUSEUMとして体感いただけます。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
