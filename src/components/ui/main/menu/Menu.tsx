'use client'

import { MenuAttributes } from "@/interfaces/ui/menu/menu.interface";
import { useUIStore } from "@/store";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Sidebar } from "../sidebar/Sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";


export const Menu = () => {
  const [menu, setMenu] = useState<MenuAttributes | null>(null);
  const [folderIcons, setFolderIcons] = useState<string>('white');
  const [isLoading, setLoading] = useState(true);
  const openSideMenu = useUIStore(state => state.openSideMenu);
  const closeSideMenu = useUIStore(state => state.closeSideMenu);
  const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);

  const pathname = usePathname(); 

  const getMenu = () => {
    fetch(
      `http://localhost:1337/api/menu?fields[0]=title
      &populate[0]=menu&populate[1]=menu.Items
      &populate[2]=logo&populate[3]=company`
    )
      .then((res) => res.json())
      .then((data) => {
        const { data: { attributes: { logo, company, menu } } } = data;
        setMenu({
          logo, 
          company, 
          menu,
        });
        setLoading(false);
      });
  }

  const getFolderIcons = () => {
    if(pathname === '/' || pathname === '/home' || pathname === '') {
      setFolderIcons('white')
    }
    else{
      setFolderIcons('blue')
    } 
  } 
  
  
  useEffect(() => {
    getFolderIcons(),
    getMenu()
  }, [pathname]);

  return (
    <>
    <nav className="flex items-center justify-between px-3 py-4 b z-20 relative">
      <div className="slide-in-right flex justify-between gap-3 items-center h-6">
          <Link href={'/'} >
          <Image
            src={'/menu/' + folderIcons + '/logo.png'}
            alt={'QargoCoffee Logo'}
            priority={true}
            width={'230'}
            height={38}
            className="h-[28px] w-auto"
          />
          </Link>
        
      </div>

      <div className="flex gap-4 slide-in-left">
        <Image
            src={'/menu/' + folderIcons + '/search.png'}
            alt='lupa'
            width={28}
            height={28}
            className="cursor-pointer"
          />
        {isSideMenuOpen && (
            <Image
            onClick={closeSideMenu}
            className="z-20 cursor-pointer"
            src={'/menu/'+ folderIcons + '/close.png'}
            alt='lupa'
            width={28}
            height={28}
          />
        )}

        {!isSideMenuOpen && (
          <Image
            onClick={openSideMenu}
            className="z-20 cursor-pointer"
            src={'/menu/'+ folderIcons +'/squads.png'}
            alt='lupa'
            width={28}
            height={28}
          />
        )}
           
      </div>
    </nav>
    { menu && isSideMenuOpen && (
      <Sidebar items={ menu.menu } />
    )}
    </>
    
  );
};
