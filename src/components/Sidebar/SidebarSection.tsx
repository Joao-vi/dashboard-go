import { Box, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SidebarSecitonProps {
  title: string;
  children: ReactNode;
}
export function SidebarSection({ title, children }: SidebarSecitonProps) {
  return (
    <Box>
      <Text fontWeight="bold" fontSize="small" color="gray.400">
        {title}
      </Text>
      <Stack spacing="4" mt="5" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
