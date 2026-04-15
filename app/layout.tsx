import "./globals.css";
import Header from "./components/Header";
import SmoothScroll from "./components/SmoothScroll";
import GlobalBackground from "./components/GlobalBackground";
import PageTransition from "./components/PageTransition";

export const metadata = {
  title: "The Duos Media",
  description: "Premium digital marketing agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white relative min-h-screen">

  <GlobalBackground />   {/* background layer */}

  <SmoothScroll />
  <Header />

  {/* IMPORTANT WRAPPER */}
  <div className="relative z-10 min-h-screen">
    <PageTransition>
      {children}
    </PageTransition>
  </div>

</body>
    </html>
  );
}