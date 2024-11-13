import Link from "next/link";
import React from "react";

function NavigationBar() {
  return (
    <div className="h-[66px] flex justify-end items-center gap-6 px-3 bg-slate-400">
      <Link href="/auth">Signup/Login</Link>
      <Link href="/account">Account</Link>
    </div>
  );
}

export default NavigationBar;
