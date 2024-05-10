import { Footer, Header, ModalCareers } from "@/components/ui";

export default function WebLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
        <Header/>
        <ModalCareers/>
        {children}
        <Footer/>
    </div>
  );
}