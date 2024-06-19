'use client'

import { MenuItem } from "@/interfaces/ui/menu/menu.interface";
import { useUIStore } from "@/store";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface Props {
    items: MenuItem[];
}

export const Sidebar = ({ items }: Props) => {
    const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
    const isSubcategoryOpen = useUIStore(state => state.isSubcategoryOpen);
    const toggleSubcategory = useUIStore(state => state.toggleSubcategory);
    const closeSideMenu = useUIStore(state => state.closeSideMenu);

    return (
        <>
            {/* Background overlay */}
            {isSideMenuOpen && (
                <div 
                    className="fixed top-0 left-0 w-full h-full z-10" 
                    onClick={closeSideMenu}></div>
            )}

            {/* Sidemenu */}
            <nav
                className={clsx(
                    "scale-up-right fixed top-[49px] right-0 w-1/2 h-auto z-20 ",
                    {
                        "translate-x-0": isSideMenuOpen,
                        "translate-x-full": !isSideMenuOpen
                    }
                )}
            >
                {items.map((item) => (
                    <div
                        key={item.slug}
                        className="p-3 backdrop-filter backdrop-blur-md bg-white/30 m-1"
                        onClick={() => {
                            if (!item.Items || item.Items.length === 0) {
                                closeSideMenu();
                            }
                        }}
                    >
                        {/* Category Link */}
                        {item.Items && item.Items.length > 0 ? (
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleSubcategory(String(item.slug))}>
                                <span className="text-focus-in text-lg text-lavazzaBlue font-medium">
                                    {item.title}
                                </span>
                                <Image
                                    src="/logos/arrow-down.png"
                                    width={20}
                                    height={11}
                                    alt="Arrow down"
                                />
                            </div>
                        ) : (
                            <Link
                                href={`/${item.slug}`}
                                className="block text-focus-in text-lg text-lavazzaBlue font-medium"
                                onClick={closeSideMenu}>
                                {item.title}
                            </Link>
                        )}

                        {/* Subcategories */}
                        {item.Items && isSubcategoryOpen[String(item.slug)] && (
                            <div className="ml-6 mt-2">
                                {item.Items.map((subcategory) => (
                                    <Link
                                        key={subcategory.slug}
                                        href={`/${subcategory.slug}`}
                                        className="block text-sm mt-2 tracking-widest text-lavazzaBlue text-focus-in"
                                        onClick={closeSideMenu}
                                    >
                                        {subcategory.title}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>
        </>
    );
};
