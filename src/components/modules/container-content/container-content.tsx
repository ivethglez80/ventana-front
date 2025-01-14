"use client";

import { usePathname } from "next/navigation";
import HeaderContent from "../header/header-content";
import FooterContent from "../footer/footer-content";
import MainContent from "../main/main-content";

const ContainerContent = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <main
      role="main"
      id="container-content"
      className={`
        relative
        ${!isAdmin ? "mt-[4rem]" : ""}
        w-full
        min-h-screen
        flex
        flex-col
        min-w-screen
        `}
    >
      {!isAdmin && <HeaderContent />}
      <MainContent>{children}</MainContent>
      {!isAdmin && <FooterContent />}
    </main>
  );
};

export default ContainerContent;
