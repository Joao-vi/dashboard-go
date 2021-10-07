import { Flex, Box, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function NavPagination() {
  return (
    <Flex
      justify="space-between"
      align="center"
      mt="8"
      direction={["column", "row"]}
    >
      <Box mb={["10px", "0"]}>
        <span>0</span> - <span>10</span> de <span>100</span>
      </Box>

      <Stack direction="row" spacing="2">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
        <PaginationItem number={6} />
      </Stack>
    </Flex>
  );
}
