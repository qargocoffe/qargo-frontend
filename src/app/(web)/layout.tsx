import { Footer, Header, ModalCareers } from "@/components/ui";

export default function WebLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="text-base leading-6">
        <Header/>
        <ModalCareers/>
        {children}
        <Footer/>
    </div>
  );
}