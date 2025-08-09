import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
})

export const metadata = {
  title: "Ride Mart",
  description: "Find your next ride in minutes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen">{children}</div>
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto text-center px-4 text-gray-600">
            <p>Made with ❤️ by Ramees M Siyad</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
