import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
  useBreakpointValue,
  IconButton,
  Spinner,
} from "@chakra-ui/react";

import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header/Header";
import { NavPagination } from "../../components/PaginationBar/NavPagination";
import { Sidebar } from "../../components/Sidebar";

import { Link } from "react-router-dom";
import { SkeletonTable } from "../../components/Skelletons/skeletonTable";
import { useUsers } from "../../services/hooks/useUsers";
import { useState } from "react";

export function UserList() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, isFetching } = useUsers(page);
  const [allTrue, setAllTrue] = useState(false);

  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />
      <Flex w="100%" maxW={1480} mx="auto" my="5" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8" w="100%">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              {!isLoading && isFetching && <Spinner size="sm" ml="2" />}
            </Heading>
            <Link to="/users/create">
              <Button
                as="a"
                cursor="pointer"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>
          {isLoading ? (
            <SkeletonTable />
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter dados do usuario.</Text>
            </Flex>
          ) : (
            <>
              <Box overflow={["scroll", "unset"]}>
                <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      <Th px="6" color="gray.300" w="8">
                        <Checkbox
                          colorScheme="pink"
                          onChange={() => setAllTrue((oldState) => !oldState)}
                        />
                      </Th>
                      <Th>Usuários</Th>
                      <Th>Data de cadastro</Th>
                      <Th w={50}></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data?.users.map((user: any) => {
                      return (
                        <Tr key={user.id}>
                          <Td px="6">
                            <Checkbox colorScheme="pink" isChecked={allTrue} />
                          </Td>
                          <Td>
                            <Box>
                              <Text fontWeight="bold">{user.name}</Text>
                              <Text fontSize="sm" color="gray.300">
                                {user.email}
                              </Text>
                            </Box>
                          </Td>
                          <Td> {user.createdAt}</Td>
                          <Td pr="0">
                            {isWideScreen ? (
                              <Button
                                colorScheme="teal"
                                size="sm"
                                fontSize="sm"
                                leftIcon={
                                  <Icon as={RiPencilLine} fontSize="16" />
                                }
                              >
                                Editar
                              </Button>
                            ) : (
                              <IconButton
                                bg="gray.700"
                                aria-label="Editar registro"
                                icon={<Icon as={RiPencilLine} />}
                              />
                            )}
                          </Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </Box>
              <NavPagination
                totalCountOfRegisters={data?.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
