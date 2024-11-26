import Link from "next/link";
import React from "react";

function MainNavigation() {
  return (
    <div className="h-[66px] flex justify-end items-center gap-6 px-10 text-[#fff] bg-stone-500 rounded-tl-md rounded-tr-md">
      <div className="mr-auto">CR-CYCLE CRM</div>
      <div className=" flex justify-end  gap-6">
        <Link href="/auth">Signup</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/about">About</Link>
        <Link href="/dashboard">Account</Link>
      </div>
    </div>
  );
}

export default MainNavigation;
