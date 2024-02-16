import React from "react";
import Link from "next/link";
// import Logo from "./Logo";
// import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <h1>newlogo</h1>

            <Link href="/about">about</Link>
            <Link href="/signup">signup</Link>
            <Link href="/login">login</Link>
            <Link href="/contectform">contect us</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
