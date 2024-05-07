'use client'

import { MenuItem } from "@/interfaces/ui/menu/menu.interface"
import { useUIStore } from "@/store"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"


interface Props {
    items: MenuItem[];
}

interface CategoryState {
    [key: string]: boolean;
  }


export const Sidebar = ({ items }:Props) => {

    const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
    const isSubcategoryOpen = useUIStore(state => state.isSubcategoryOpen);
    const toggleSubcategory = useUIStore(state => state.toggleSubcategory);

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
                "fixed m-0 overflow-auto right-0 top-13 w-[60%] h-auto z-20 shadow-2xl transform transition-all duration-300 l:hidden",
                {
                    "translate-x-full": !isSideMenuOpen
                }
            )
        }>
            {items &&
            items.map((item) => (
                <div key={item.slug}>
                {/* Links categories */}
                <Link
                    className="flex justify-between text-beigeStrong text-xl duration-300 bg-white border-0 p-4 my-1"
                    href={'/' + item.slug}>
                    <span className="mx-2">{item.title}</span>
                    {/* Arrow down image in category with subcategory */}

                    {item.Items && item.Items.length > 0 &&(
                        <div className="p-3">
                            <Image src={'/logos/arrow-down.png'}
                            width={20}
                            onClick={() => toggleSubcategory(String(item.slug))}
                            alt="Arrow down"
                            height={11}/>
                        </div>
                    )}
                </Link>
                
                {/* Links subcategories */}

                {item.Items &&
                    item.Items.map((subcategory) => (
                        <div className={`flex bg-white justify-between ${
                            isSubcategoryOpen[String(item.slug)] ? '' : 'hidden'
                          }`}>
                            <Link
                                key={subcategory.id}
                                className=" text-beigeStrong block text-xl 
                                duration-300  border-0 p-4"
                                href={'/' + item.slug}>
                                <span className="ml-7">{subcategory.title}</span>
                            </Link>
                        </div>
                
                    ))}
                </div>
            ))}
        </nav>
    </>
  )
}
