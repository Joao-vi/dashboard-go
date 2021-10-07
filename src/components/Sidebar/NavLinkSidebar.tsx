import { Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import { ElementType, ReactNode } from "react";

import { ActiveLink } from "../ActiveLinks";

interface NavLinkProps {
  children: ReactNode;
  icon: ElementType;
  link: string;
}
export function NavLink({ children, icon, link }: NavLinkProps) {
  return (
    <ActiveLink to={link}>
      <ChakraLink display="flex" alignItems="center">
        <Icon as={icon} fontSize="20" />
        <Text ml="2" fontWeight="medium ">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
