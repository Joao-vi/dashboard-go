import { Text, Avatar, Box, Flex } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box textAlign="right" mr={2}>
          <Text>João Victor </Text>
          <Text color="gray.300">joaovictor.go.ro@gmail.com</Text>
        </Box>
      )}
      <Avatar
        name="Joao Victor"
        size="md"
        src="https://github.com/joao-vi.png"
      />
    </Flex>
  );
}
