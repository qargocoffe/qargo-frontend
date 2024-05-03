'use client'

import { MenuAttributes } from "@/interfaces/ui/menu/menu.interface";
import { useUIStore } from "@/store";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Sidebar } from "../sidebar/Sidebar";


export const Menu = () => {
  const [menu, setMenu] = useState<MenuAttributes | null>(null);
  const [isLoading, setLoading] = useState(true);
  const openSideMenu = useUIStore(state => state.openSideMenu);
  const closeSideMenu = useUIStore(state => state.closeSideMenu);
  const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);


  useEffect(() => {
    fetch(
      `http://localhost:1337/api/menu?fields[0]=title&populate[logo][fields][0]=name&populate[logo][fields][1]=url&populate[company][fields][0]=name&populate[company][fields][1]=url&populate[menu][fields][0]=title&populate[menu][fields][1]=slug`
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
  }, []);

  return (
    <>
    <nav className="flex items-center justify-between p-5 b">
      <div className="flex justify-between gap-3 items-center h-6">
        {menu && (
          <Image
            src={"http://localhost:1337" + menu.logo.data.attributes.url}
            alt={menu.logo.data.attributes.name}
            priority={true}
            width={32}
            height={32}
            className="h-[32px]"
          />
        )}
        {menu && (
          <Image
            src={"http://localhost:1337" + menu.company.data.attributes.url}
            alt={menu.company.data.attributes.name}
            priority={true}
            width={192}
            height={22}
            className="h-[22px]"
          />
        )}
      </div>

      <div className="flex gap-4">
        <Image
            src={'/logos/lupa.png'}
            alt='lupa'
            width={32}
            height={32}
          />
        {isSideMenuOpen && (
            <Image
            onClick={closeSideMenu}
            className="z-20"
            src={'/logos/close.png'}
            alt='lupa'
            width={32}
            height={32}
          />
        )}

        {!isSideMenuOpen && (
          <Image
            onClick={openSideMenu}
            className="z-20"
            src={'/logos/squads-menu.png'}
            alt='lupa'
            width={32}
            height={32}
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
