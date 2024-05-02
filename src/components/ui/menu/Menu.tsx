'use client'

import { MenuData, MenuAttributes } from "@/interfaces/ui/menu/menu.interface";
import Image from "next/image";
import { useEffect, useState } from "react";


export const Menu = () => {
  const [menu, setMenu] = useState<MenuAttributes | null>(null);
  const [isLoading, setLoading] = useState(true);

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
    <nav className="flex justify-between p-5 b">
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
    </nav>
  );
};
