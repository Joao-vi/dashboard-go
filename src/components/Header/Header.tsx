import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";

import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const shouldShowSearchBox = useBreakpointValue({
    md: true,
    sm: false,
  });

  console.log(shouldShowSearchBox);
  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      mx="auto"
      mt="4"
      px="6"
      maxW={1480}
      align="center"
      justify="space-between"
    >
      <Flex flex="1">
        {!isWideVersion && (
          <IconButton
            size="sm"
            mr="2"
            mt="1.5"
            colorScheme="blackAlpha"
            aria-label="Abri menu"
            onClick={onOpen}
            icon={<Icon as={RiMenuLine} />}
          />
        )}
        <Logo changeWidth={isWideVersion} />
        {shouldShowSearchBox && <SearchBox />}
      </Flex>
      <Flex>
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
