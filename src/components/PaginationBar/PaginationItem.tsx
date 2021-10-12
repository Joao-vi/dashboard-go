import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
  number,
  isCurrent = false,
  onPageChange,
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
    <Button
      bg="gray.700"
      size="sm"
      onClick={() => {
        onPageChange(number);
      }}
    >
      {number}
    </Button>
  );
}
