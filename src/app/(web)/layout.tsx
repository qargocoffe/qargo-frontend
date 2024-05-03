import { Footer, Header } from "@/components/ui";

export default function WebLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  );
}