'use client'

import { Footer, Header, ModalCareers } from "@/components/ui";

export default function WebLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="overflow-x-hidden text-base leading-6 bg-whiteBackground !overscroll-x-hidden min-h-screen flex flex-col justify-between">
        <Header/>
        <ModalCareers/>
            {children}
        <Footer/>
    </div>
  );
}