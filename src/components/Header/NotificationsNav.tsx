import { Flex, HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export function NotificationsNav() {
  return (
    <Flex align="center" mr="4">
      <HStack spacing="4" borderRightWidth={2} borderColor="gray.600" pr="3">
        <Icon cursor="pointer" as={RiNotificationLine} fontSize="20" />
        <Icon as={RiUserAddLine} cursor="pointer" fontSize="20" />
      </HStack>
    </Flex>
  );
}
