import "./globals.css";
import Header from "./components/Header";
import GlobalBackground from "./components/GlobalBackground";

export const metadata = {
  title: "The Duos Media",
  description: "Stories that build business.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">

        {/* ✅ ONE GLOBAL BACKGROUND */}
        <GlobalBackground />

        {/* HEADER */}
        <Header />

        {/* CONTENT */}
        <main className="relative z-10">
          {children}
        </main>

      </body>
    </html>
  );
}