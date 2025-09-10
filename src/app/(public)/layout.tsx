import Header from "@/feature/home-page/components/Header";
import Footer from "@/feature/home-page/components/Footer";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-[#111111] text-white font-inter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
