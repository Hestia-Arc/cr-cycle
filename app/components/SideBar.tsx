"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const listStyle =
  "flex items-center gap-3 capitalize text-[#fff] text-[14px] p-2 rounded-md";

function SideBar() {
  const pathname = usePathname();

  return (
    <div className=" flex-shrink-0 flex-grow-0 basis-52 h-full flex flex-col gap-10 p-5 bg-[#2c2c2c] rounded-[10px] text-[#fff]">
      {/* <Avatar /> */}
      <div className=" min-h-[120px] w-full flex flex-col items-center gap-2">
        <div className="h-[100px] w-[100px] rounded-full bg-stone-500"></div>
        <h3 className="text-[18px]">Faith Gates</h3>
        <p className="text-[#7f7f7f] text-[12px]">Real Estate Developer</p>
      </div>

      {/*  */}
      <div className="flex flex-col gap-2 text-[#7f7f7f]">
        {links.map((link) => {
          const isActive = pathname === link.path;
          return (
            <div key={`${link.name}-${link.path}`}>
              <Link href={link.path} className={`${listStyle} ${isActive && `bg-[#030303]`}`}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.59998 4.80001C3.59998 4.48175 3.7264 4.17652 3.95145 3.95148C4.17649 3.72643 4.48172 3.60001 4.79998 3.60001H19.2C19.5182 3.60001 19.8235 3.72643 20.0485 3.95148C20.2735 4.17652 20.4 4.48175 20.4 4.80001V7.20001C20.4 7.51827 20.2735 7.82349 20.0485 8.04853C19.8235 8.27358 19.5182 8.40001 19.2 8.40001H4.79998C4.48172 8.40001 4.17649 8.27358 3.95145 8.04853C3.7264 7.82349 3.59998 7.51827 3.59998 7.20001V4.80001ZM3.59998 12C3.59998 11.6817 3.7264 11.3765 3.95145 11.1515C4.17649 10.9264 4.48172 10.8 4.79998 10.8H12C12.3182 10.8 12.6235 10.9264 12.8485 11.1515C13.0735 11.3765 13.2 11.6817 13.2 12V19.2C13.2 19.5183 13.0735 19.8235 12.8485 20.0485C12.6235 20.2736 12.3182 20.4 12 20.4H4.79998C4.48172 20.4 4.17649 20.2736 3.95145 20.0485C3.7264 19.8235 3.59998 19.5183 3.59998 19.2V12ZM16.8 10.8C16.4817 10.8 16.1765 10.9264 15.9514 11.1515C15.7264 11.3765 15.6 11.6817 15.6 12V19.2C15.6 19.5183 15.7264 19.8235 15.9514 20.0485C16.1765 20.2736 16.4817 20.4 16.8 20.4H19.2C19.5182 20.4 19.8235 20.2736 20.0485 20.0485C20.2735 19.8235 20.4 19.5183 20.4 19.2V12C20.4 11.6817 20.2735 11.3765 20.0485 11.1515C19.8235 10.9264 19.5182 10.8 19.2 10.8H16.8Z"
                    fill="#78716c"
                  />
                </svg>

                <span>{link.name}</span>
              </Link>
            </div>
          );
        })}

        {/* <Link href="/dashboard/properties" className={`${listStyle}`}>
          Properties
        </Link>
        <Link href="/dashboard/leads" className={`${listStyle}`}>
          Leads
        </Link>
        <Link href="/dashboard/customers" className={`${listStyle}`}>
          Customers
        </Link>
        <Link href="/dashboard/schedules" className={`${listStyle}`}>
          Schedules
        </Link>
        <Link href="/dashboard/settings" className={`${listStyle}`}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_701_574)">
              <path
                d="M3.34 17C2.91727 16.269 2.58866 15.4875 2.362 14.674C2.85531 14.4231 3.26959 14.0406 3.55903 13.5689C3.84846 13.0972 4.00176 12.5546 4.00197 12.0011C4.00218 11.4477 3.84928 10.905 3.5602 10.433C3.27112 9.96106 2.85712 9.57828 2.364 9.32701C2.81604 7.69249 3.67673 6.19996 4.865 4.99001C5.32909 5.29173 5.86762 5.45917 6.42098 5.47379C6.97434 5.48841 7.52095 5.34964 8.00033 5.07284C8.47971 4.79604 8.87315 4.392 9.13713 3.90545C9.4011 3.41889 9.52531 2.86878 9.496 2.31601C11.1381 1.89163 12.8612 1.89232 14.503 2.31801C14.474 2.87077 14.5984 3.4208 14.8626 3.90721C15.1268 4.39363 15.5204 4.79748 15.9998 5.07407C16.4793 5.35065 17.0259 5.48919 17.5793 5.47436C18.1326 5.45952 18.671 5.29189 19.135 4.99001C19.714 5.58001 20.228 6.25101 20.66 7.00001C21.093 7.74901 21.417 8.53001 21.638 9.32601C21.1447 9.57691 20.7304 9.95938 20.441 10.4311C20.1515 10.9028 19.9982 11.4454 19.998 11.9989C19.9978 12.5523 20.1507 13.0951 20.4398 13.567C20.7289 14.039 21.1429 14.4217 21.636 14.673C21.184 16.3075 20.3233 17.8001 19.135 19.01C18.6709 18.7083 18.1324 18.5408 17.579 18.5262C17.0257 18.5116 16.479 18.6504 15.9997 18.9272C15.5203 19.204 15.1268 19.608 14.8629 20.0946C14.5989 20.5811 14.4747 21.1312 14.504 21.684C12.8619 22.1084 11.1388 22.1077 9.497 21.682C9.52605 21.1292 9.4016 20.5792 9.13742 20.0928C8.87324 19.6064 8.47964 19.2025 8.00017 18.9259C7.5207 18.6494 6.97405 18.5108 6.42073 18.5257C5.8674 18.5405 5.32896 18.7081 4.865 19.01C4.27399 18.407 3.76159 17.7316 3.34 17ZM9 17.196C10.0656 17.8106 10.8668 18.797 11.25 19.966C11.749 20.013 12.25 20.014 12.749 19.967C13.1324 18.7979 13.934 17.8114 15 17.197C16.0652 16.5807 17.3205 16.3795 18.525 16.632C18.815 16.224 19.065 15.789 19.273 15.334C18.4524 14.4174 17.9991 13.2302 18 12C18 10.74 18.47 9.56301 19.273 8.66601C19.0635 8.21115 18.8125 7.77664 18.523 7.36801C17.3193 7.62032 16.0648 7.41948 15 6.80401C13.9344 6.18938 13.1332 5.20299 12.75 4.03401C12.251 3.98701 11.75 3.98601 11.251 4.03301C10.8676 5.20215 10.066 6.18857 9 6.80301C7.93478 7.41932 6.67948 7.62053 5.475 7.36801C5.18556 7.77629 4.93513 8.21087 4.727 8.66601C5.54757 9.58257 6.00088 10.7698 6 12C6 13.26 5.53 14.437 4.727 15.334C4.93647 15.7889 5.18754 16.2234 5.477 16.632C6.68072 16.3797 7.93521 16.5805 9 17.196ZM12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7957 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87869C10.4413 9.31608 11.2044 9.00001 12 9.00001C12.7956 9.00001 13.5587 9.31608 14.1213 9.87869C14.6839 10.4413 15 11.2044 15 12C15 12.7957 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15ZM12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13Z"
                fill="#7F7F7F"
              />
            </g>
            <defs>
              <clipPath id="clip0_701_574">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span>Settings</span>{" "}
        </Link> */}
      </div>

      {/* ----- logout */}
      <div className={`${listStyle} !bg-transparent`}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 20L17 20C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17L20 7C20 6.20435 19.6839 5.44129 19.1213 4.87868C18.5587 4.31607 17.7956 4 17 4L16 4M8 8L4 12M4 12L8 16M4 12L16 12"
            stroke="#F10A0A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span>LogOut</span>{" "}
      </div>
    </div>
  );
}

export default SideBar;

const links = [
  {
    name: "Overview",
    path: "/dashboard",
  },
  {
    name: "properties",
    path: "/dashboard/properties",
  },
  {
    name: "leads",
    path: "/dashboard/leads",
  },
  {
    name: "contacts",
    path: "/dashboard/contacts",
  },
  {
    name: "schedules",
    path: "/dashboard/schedules",
  },
  {
    name: "settings",
    path: "/dashboard/settings",
  },
];

// const Avatar = () => {
//   return (
//     <div className=" border h-[200px] w-full flex flex-col items-center gap-3">
//       <div className="h-[100px] w-[100px] rounded-full bg-stone-500"></div>
//       <h3>Faith Gates</h3>
//       <p className="">Real Estate Developer</p>
//     </div>
//   );
// };
