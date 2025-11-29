"use client";
import { BeakerIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import WorkflowDropdown from "./WorkflowDropdown";
export default function Navbar() {
  
  return (
    <nav
      className="
      sticky top-0 left-0 right-0 
      z-50 
      backdrop-blur-md 
      bg-slate-900/60 
      border-b border-slate-800
      px-6 py-4
      flex items-center justify-between
    "
    >
      <Link href="/" className="flex">
        <BeakerIcon className="size-6 text-sky-500" />
        <div className="ml-2 text-xl font-semibold">
          Bioinformatics Explorer
        </div>
      </Link>

      <div className="flex justify-center gap-3 text-md absolute left-1/2 -translate-x-1/2">
        <Link href="/about" className="hover:text-sky-400 transition-colors">
          About
        </Link>
        <WorkflowDropdown />
        <Link href="/details" className="hover:text-sky-400 transition-colors">
          Tech
        </Link>
      </div>
      <a href="https://www.linkedin.com/in/ashmurali/" target="_blank" className="bg-sky-600 text-white font-sm px-4 py-2 rounded-md max-w-50 transition-all duration-200 hover:bg-sky-400  hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-sky-400/50 flex">
        <p>Let's Connect</p>
        <ArrowRightIcon className="my-auto ml-2 size-5"/>
      </a>
    </nav>
  );
}
