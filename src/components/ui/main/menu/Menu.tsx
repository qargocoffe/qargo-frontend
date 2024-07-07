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
  const [isLoading, setLoading] = useState(true);
  const openSideMenu = useUIStore(state => state.openSideMenu);
  const closeSideMenu = useUIStore(state => state.closeSideMenu);
  const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);


  const pathname = usePathname(); 

  const getMenu = () => {


    const data = {
      "data": {
          "id": 1,
          "attributes": {
              "title": "Menu",
              "menu": [
                  {
                      "id": 6,
                      "title": "VISIT US",
                      "slug": "visit-us",
                      "Items": []
                  },
                  {
                      "id": 7,
                      "title": "ORDER",
                      "slug": "order-pickup",
                      "Items": []
                  },
                  {
                      "id": 8,
                      "title": "OUR MENU",
                      "slug": "our-menu",
                      "Items": []
                  },
                  {
                      "id": 9,
                      "title": "ABOUT",
                      "slug": "#",
                      "Items": [
                          {
                              "id": 9,
                              "title": "Our History",
                              "slug": "our-history"
                          },
                          {
                              "id": 10,
                              "title": "Our Mission",
                              "slug": "our-mission"
                          },
                          {
                              "id": 17,
                              "title": "About",
                              "slug": "about"
                          },
                          {
                              "id": 11,
                              "title": "Our Vision",
                              "slug": "our-vision"
                          },
                          {
                              "id": 12,
                              "title": "Sustainabiliity",
                              "slug": "sustainability"
                          },
                          {
                              "id": 13,
                              "title": "Team",
                              "slug": "team"
                          },
                          {
                              "id": 14,
                              "title": "Partners",
                              "slug": "partners"
                          },
                          {
                              "id": 15,
                              "title": "Careers",
                              "slug": "careers"
                          },
                          {
                              "id": 16,
                              "title": "Contact",
                              "slug": "contact"
                          }
                      ]
                  },
                  {
                      "id": 10,
                      "title": "FRANCHISES",
                      "slug": "franchisies",
                      "Items": []
                  },
                  {
                      "id": 11,
                      "title": "BLOG & NEWS",
                      "slug": "blogs",
                      "Items": []
                  }
              ],
              "logo": {
                  "data": {
                      "id": 205,
                      "attributes": {
                          "name": "logo.png",
                          "alternativeText": null,
                          "caption": null,
                          "width": 44,
                          "height": 44,
                          "formats": null,
                          "hash": "logo_6fdfd9a15a",
                          "ext": ".png",
                          "mime": "image/png",
                          "size": 0.44,
                          "url": "/uploads/logo_6fdfd9a15a.png",
                          "previewUrl": null,
                          "provider": "local",
                          "provider_metadata": null,
                          "createdAt": "2024-05-01T23:41:49.636Z",
                          "updatedAt": "2024-05-01T23:41:49.636Z"
                      }
                  }
              },
              "company": {
                  "data": {
                      "id": 222,
                      "attributes": {
                          "name": "Group.png",
                          "alternativeText": null,
                          "caption": null,
                          "width": 567,
                          "height": 84,
                          "formats": {
                              "small": {
                                  "name": "small_Group.png",
                                  "hash": "small_Group_915b00099c",
                                  "ext": ".png",
                                  "mime": "image/png",
                                  "path": null,
                                  "width": 500,
                                  "height": 74,
                                  "size": 13.24,
                                  "sizeInBytes": 13239,
                                  "url": "/uploads/small_Group_915b00099c.png"
                              },
                              "thumbnail": {
                                  "name": "thumbnail_Group.png",
                                  "hash": "thumbnail_Group_915b00099c",
                                  "ext": ".png",
                                  "mime": "image/png",
                                  "path": null,
                                  "width": 245,
                                  "height": 36,
                                  "size": 5.69,
                                  "sizeInBytes": 5694,
                                  "url": "/uploads/thumbnail_Group_915b00099c.png"
                              }
                          },
                          "hash": "Group_915b00099c",
                          "ext": ".png",
                          "mime": "image/png",
                          "size": 3.56,
                          "url": "/uploads/Group_915b00099c.png",
                          "previewUrl": null,
                          "provider": "local",
                          "provider_metadata": null,
                          "createdAt": "2024-05-07T16:20:26.213Z",
                          "updatedAt": "2024-05-07T16:20:26.213Z"
                      }
                  }
              }
          }
      },
      "meta": {}
  }
  const { data: { attributes: { logo, company, menu } } } = data;
        setMenu({
          logo, 
          company, 
          menu,
        });
        setLoading(false);

    // fetch(
    //   `http://localhost:1337/api/menu?fields[0]=title
    //   &populate[0]=menu&populate[1]=menu.Items
    //   &populate[2]=logo&populate[3]=company`
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const { data: { attributes: { logo, company, menu } } } = data;
    //     setMenu({
    //       logo, 
    //       company, 
    //       menu,
    //     });
    //     setLoading(false);
    //   });
  }

  useEffect(() => {
    getMenu()
  }, [pathname]);

  return (
    <>
    <nav className="w-full fade-in fixed z-10 backdrop-filter backdrop-blur-md bg-white/30 flex items-center justify-between px-3 py-3 md:p-5">
      <div className="slide-in-right flex justify-between gap-3 items-center h-6" onClick={() => closeSideMenu()}>
          <Link href={'/'} >
          <Image
            src={'/menu/blue/logo.png'}
            alt={'QargoCoffee Logo'}
            priority={true}
            width={'230'}
            height={38}
            className="h-[28px] w-auto cursor-pointer md:h-auto"
          />
          </Link>
        
      </div>

      <div className="flex gap-4 slide-in-left">
        
        {isSideMenuOpen && (
            <Image
            onClick={closeSideMenu}
            className="z-20 cursor-pointer md:h-auto"
            src={'/menu/blue/close.png'}
            alt='lupa'
            width={24}
            height={24}
          />
        )}

        {!isSideMenuOpen && (
          <Image
            onClick={openSideMenu}
            className="z-20 cursor-pointer md:h-auto"
            src={'/menu/blue/squads.png'}
            alt='lupa'
            width={24}
            height={24}
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
