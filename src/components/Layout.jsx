/* eslint-disable react/prop-types */
import { useState } from "react";
import Navbar from "./Navbar";
import SocialSidebar from "./SocialSidebar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden bg-background text-foreground">

      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <div className="fixed right-4 hidden lg:block xl:block 2xl:block top-1/2 -translate-y-1/2 space-y-4">
        <SocialSidebar />
      </div>

      <main className="w-full mx-auto px-4 sm:px-2 md:px-[9.50rem] py-8 md:py-16">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}

export default Layout;
