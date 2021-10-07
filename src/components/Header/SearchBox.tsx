import { Flex, Icon, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  const [border, setBorder] = useState(false);

  useEffect(() => {
    document.addEventListener("click", desable);

    function desable() {
      setBorder(false);
    }
    return () => document.removeEventListener("click", desable);
  });

  function activeBorder(event: React.MouseEvent) {
    event.stopPropagation();

    setBorder(true);
  }
  return (
    <Flex
      as="label"
      flex="1"
      py="3"
      px="8"
      maxW={380}
      color="gray.200"
      bg="gray.800"
      borderRadius="full"
      align="center"
      boxShadow="md"
      border="1px"
      transition="ease"
      borderColor={border ? "pink.500" : "transparent"}
      onClick={activeBorder}
    >
      <Input
        variant="unstyled"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: "gray.400" }}
      />
      <Icon cursor="pointer" fontSize={20} as={RiSearchLine} />
    </Flex>
  );
}
