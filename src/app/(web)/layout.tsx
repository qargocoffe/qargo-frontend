'use client'

import { Footer, Header, ModalCareers } from "@/components/ui";

export default function WebLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="text-base leading-6 bg-whiteBackground overscroll-x-hidden">
        <Header/>
        <ModalCareers/>
            {children}
        <Footer/>
    </div>
  );
}