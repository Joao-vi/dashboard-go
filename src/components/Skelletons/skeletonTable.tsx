import { Skeleton, Stack } from "@chakra-ui/react";
export function SkeletonTable() {
  return (
    <Stack spacing="10px">
      <Skeleton height="20px" w="100%" />
      <Skeleton height="20px" w="100%" />
      <Skeleton height="20px" w="100%" />
      <Skeleton height="20px" w="100%" />
    </Stack>
  );
}
