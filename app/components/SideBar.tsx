import Link from "next/link";
import React from "react";

function SideBar() {
  return (
    <div className="w-[210px] h-[100vh] flex flex-col px-3 py-8 bg-slate-500">
      <Link href="/" className="text-[24px]">CR-CYCLE</Link>
      <div className="flex flex-col gap-3 my-5">
        <Link href="/dashboard/customers">Overview</Link>
        <Link href="/dashboard/customers">Customers</Link>
        <Link href="/dashboard/customers">Sales</Link>
      </div>

      <div>LogOut</div>
    </div>
  );
}

export default SideBar;
