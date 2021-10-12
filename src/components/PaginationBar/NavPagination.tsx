import { Flex, Box, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface NavPaginationProps {
  totalCountOfRegisters: number | undefined;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export function NavPagination({
  onPageChange,
  totalCountOfRegisters = 200,
  currentPage = 1,
  registersPerPage = 10,
}: NavPaginationProps) {
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

  const previousPage =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];
  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

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
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" mx="4">
                ...
              </Text>
            )}
          </>
        )}
        {previousPage.length > 0 &&
          previousPage.map((page) => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                number={page}
              />
            );
          })}
        <PaginationItem
          onPageChange={onPageChange}
          number={currentPage}
          isCurrent
        />
        {nextPages.length > 0 &&
          nextPages.map((page) => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                number={page}
              />
            );
          })}

        {currentPage < lastPage + siblingsCount && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <>
                <Text color="gray.300" mx="4">
                  ...
                </Text>
                <PaginationItem onPageChange={onPageChange} number={lastPage} />
              </>
            )}
          </>
        )}
      </Stack>
    </Flex>
  );
}
