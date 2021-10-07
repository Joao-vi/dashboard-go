import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
}

export function PaginationItem({
  number,
  isCurrent = false,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        colorScheme="pink"
        disabled
        size="sm"
        _disabled={{ colorScheme: "pink", cursor: "default" }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button bg="gray.700" size="sm">
      {number}
    </Button>
  );
}
