"use client";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
export default function Back() {
    const router = useRouter();
    return(
        <div onClick={()=>{router.back()}} className="flex cursor-pointer text-sm text-slate-400 mb-4">
            <ArrowLeftIcon className="my-auto mr-1 size-4" />
            <button  className="cursor-pointer">Back</button>
        </div>
    )
}
