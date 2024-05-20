'use client'

import { MenuItem } from "@/interfaces/ui/menu/menu.interface"
import { useUIStore } from "@/store"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"

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
    const closeSideMenu = useUIStore(state => state.closeSideMenu);
    const isModalOpen = useUIStore(state => state.isModalOpen);
    const toggleModal = useUIStore(state => state.toggleModal);

  return (

    <>
        {/* Background black */}
        {isSideMenuOpen && (
            <div className="fixed top-0 w-screen h-screen z-10 bg-black opacity-20" onClick={() => closeSideMenu()}></div>
        )}

        {/* Blur */}

        {isSideMenuOpen && (
            <div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter "  onClick={() => closeSideMenu()}></div>
        )}
        

        {/* Sidemenu */}
        <nav className={
            clsx(
                "scale-up-right transition-all duration-300 ease-in-out fixed m-0 overflow-auto right-0 top-13 w-1/2 tracking-wider h-auto z-20 shadow-2xl l:hidden",
                {
                    "translate-x-full": !isSideMenuOpen
                }
            )
        }>
            {items &&
            items.map((item) => (
                <div key={item.slug} className="transition-all duration-300"  onClick={() => {
                    if (item.Items && item.Items.length === 0) {
                        closeSideMenu()
                    }
                }}>
                {/* Links categories */}
                {item.Items!.length > 0 ? (
                    <span key={item.slug}
                    className="font-medium flex justify-between text-beigeStrong text-xl bg-white border-0 p-4 my-1"
                    onClick={() => closeSideMenu }>
                    <span className="text-focus-in mx-2">{item.title}</span>
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
                    </span>
                ): (
                <Link
                    key={item.slug}
                    className="font-medium flex justify-between text-beigeStrong text-xl bg-white border-0 p-4 my-1"
                    onClick={() => closeSideMenu }
                    href={'/' + item.slug}>
                    <span className="text-focus-in mx-2">{item.title}</span>
                
                </Link>
                )}

                {/* Links subcategories */}

                {item.Items &&
                    item.Items.map((subcategory) => (
                        <div key={subcategory.slug} className={`flex bg-white justify-between ${
                            isSubcategoryOpen[String(item.slug)] ? '' : 'hidden'
                          }`}
                          onClick={() => closeSideMenu()}
                          >
                            {
                                subcategory.slug !== 'careers'  && (
                                    <Link
                                        key={subcategory.id}
                                        className=" text-beigeStrong text-xm font-medium tracking-widest block  
                                        duration-300  text-focus-in border-0 p-4"
                                        href={'/' + subcategory.slug}>
                                        <span className="ml-7" onClick={() => closeSideMenu() }>{subcategory.title}</span>
                                    </Link>
                                )
                            }

                            {
                                subcategory.slug === 'careers' && (
                                    <span key={subcategory.id}
                                    className=" text-beigeStrong text-xm font-medium tracking-widest block  
                                    duration-300  text-focus-in border-0 p-4"
                                    onClick={() => toggleModal() }>
                                        <span className="ml-7">
                                        {subcategory.title}
                                        </span>
                                    </span>
                                )
                            }
                        </div>
                
                    ))}
                </div>
            ))}
        </nav>
    </>
  )
}
