import "./globals.css";
import SidebarWrapper from "./dashboard/Sidebar";
import Header from "./dashboard/Header";
import { Montserrat } from "next/font/google";

export const metadata = {
  title: "Kinetic AIU | Performance Dashboard & Video Analysis",
  description: "AI-powered sports performance dashboard. Upload, analyze, and manage your training videos with Kinetic AIU.",
  openGraph: {
    title: "Kinetic AIU | Performance Dashboard & Video Analysis",
    description: "AI-powered sports performance dashboard. Upload, analyze, and manage your training videos with Kinetic AIU.",
    url: "https://yourdomain.com/",
    siteName: "Kinetic AIU",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Kinetic AIU Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinetic AIU | Performance Dashboard & Video Analysis",
    description: "AI-powered sports performance dashboard. Upload, analyze, and manage your training videos with Kinetic AIU.",
    images: ["/images/logo.png"],
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        {/* Fixed Sidebar */}
        <SidebarWrapper />
        {/* Main Content with left margin for sidebar */}
        <div className="min-h-screen bg-[#FAF6F5] ml-0 md:ml-64 flex flex-col">
          {/* Sticky Header */}
          <div className="sticky top-0 z-30">
            <Header />
          </div>
          <main className="xs:p-2 p-[30px] min-h-[calc(100vh-80px)] w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
