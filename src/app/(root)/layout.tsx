import Navbar from "@/components/Navbar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='font-work-sans'>
      <Navbar />
      {children}
    </div>
  );
};

export default RootLayout;
