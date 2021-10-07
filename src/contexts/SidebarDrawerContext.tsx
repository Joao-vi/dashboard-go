import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { createContext, ReactNode, useContext, useEffect } from "react";

import { useLocation } from "react-router-dom";

type SidebarDrawerContextData = UseDisclosureReturn;
const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure();
  const { pathname } = useLocation();
  useEffect(() => {
    disclosure.onClose();
  }, [pathname]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
