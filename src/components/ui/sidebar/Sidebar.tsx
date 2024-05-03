'use client'

import { MenuItem } from "@/interfaces/ui/menu/menu.interface"
import { useUIStore } from "@/store"
import clsx from "clsx"
import Link from "next/link"


interface Props {
    items: MenuItem[];
}


export const Sidebar = ({ items }:Props) => {

    const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
    const closeMenu = useUIStore(state => state.closeSideMenu);

  return (

    <>
        {/* Background black */}
        {isSideMenuOpen && (
            <div className="fixed top-0 w-screen h-screen z-10 bg-black opacity-20"></div>
        )}

        {/* Blur */}

        {isSideMenuOpen && (
            <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter "></div>
        )}
        

        {/* Sidemenu */}
        <nav className={
            clsx(
                "fixed m-0 right-0 top-13 w-[60%] h-auto z-20 shadow-2xl transform transition-all duration-300 md:hidden",
                {
                    "translate-x-full": !isSideMenuOpen
                }
            )
        }>


        { items && items.map((item) => (
            <Link 
                key={item.slug} 
                className="text-beigeStrong font-bold block text-xl duration-300 bg-white border-0 p-4 my-1"
                href={'/'+ item.slug} >
                    <span className="mx-2">{item.title}</span>
                </Link>
        ))}
        </nav>


        
    </>
  )
}
