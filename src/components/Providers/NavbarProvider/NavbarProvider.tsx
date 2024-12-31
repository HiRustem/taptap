import { ReactNode } from "react";
import Navbar from "../../Navbar/Navbar";

interface NavbarProviderProps {
  children: ReactNode;
}

const NavbarProvider = ({ children }: NavbarProviderProps) => {
  return (
    <>
      {children}
      <Navbar />
    </>
  );
};

export default NavbarProvider;
