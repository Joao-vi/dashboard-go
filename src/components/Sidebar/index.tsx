import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

import { SidebarNav } from "./SidebarNav";

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.700">
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerCloseButton mt="9px" />
            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }
  return (
    <Box as="aside" w={170} mr="8">
      <SidebarNav />
    </Box>
  );
}