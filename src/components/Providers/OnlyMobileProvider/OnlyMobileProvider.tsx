import { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import NotMobileScreen from "./NotMobileScreen/NotMobileScreen";

interface OnlyMobileProviderProps {
  children: ReactNode;
}

const OnlyMobileProvider = ({ children }: OnlyMobileProviderProps) => {
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });

  if (!isMobile) {
    return <NotMobileScreen />;
  }

  return <div>{children}</div>;
};

export default OnlyMobileProvider;
