import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";

import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header/Header";
import { Input } from "../../components/Forms/Input";
import { RiSaveLine } from "react-icons/ri";
import { Link, useHistory } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";

import { useMutation } from "react-query";
import { api } from "../../services/api";

const createUserFormSchema = yup.object().shape({
  "E-mail": yup
    .string()
    .required("E-mail obrigatório")
    .email("E-mail inválido"),
  Senha: yup
    .string()
    .required("Senha obrigatória")
    .min(8, "Senha deve conter mais de 8 caracteres"),
  "Confirmar senha": yup
    .string()
    .oneOf([null, yup.ref("Senha")], "Senha precisa ser igual"),
  "Nome completo": yup.string().required("Senha obrigatória"),
});

interface IFormValues {
  "E-mail": string;
  Senha: string;
  "Confirmar senha": string;
  "Nome completo": string;
}

export function CreateUser() {
  const history = useHistory();
  const createUser = useMutation(
    async (user: IFormValues) => {
      const response = await api.post("users", {
        user: {
          name: user["Nome completo"],
          email: user["E-mail"],
          created_at: new Date().toLocaleDateString(),
        },
      });
    },
    {
      onSettled: () => {
        history.push("/users");
      },
    }
  );
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormValues>({
    resolver: yupResolver(createUserFormSchema),
  });

  const handleCreateUserForm: SubmitHandler<IFormValues> = async (values) => {
    await createUser.mutateAsync(values);
  };

  return (
    <Box>
      <Header />
      <Flex w="100%" maxW={1480} mx="auto" my="5" px="6">
        <Sidebar />
        <Box
          onSubmit={handleSubmit(handleCreateUserForm)}
          as="form"
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p="8"
        >
          <Heading fontSize="3xl" fontWeight="normal">
            Criar Usuário
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <SimpleGrid minChildWidth={200} gap="4" mb="4">
            <Input
              label="Nome completo"
              id="name"
              register={register}
              required
              error={errors["Nome completo"]}
            />
            <Input
              label="E-mail"
              id="email"
              type="email"
              register={register}
              required
              error={errors["E-mail"]}
            />
          </SimpleGrid>
          <SimpleGrid minChildWidth={200} gap="4">
            <Input
              label="Senha"
              type="password"
              id="password"
              register={register}
              required
              error={errors.Senha}
            />
            <Input
              id="password_confirmation"
              label="Confirmar senha"
              type="password"
              register={register}
              required
              error={errors["Confirmar senha"]}
            />
          </SimpleGrid>
          <HStack justify="flex-end" mt="8">
            <Link to="/users">
              <Button size="sm" bg="gray.700" colorScheme="whiteAlpha">
                Cancelar
              </Button>
            </Link>
            <Button
              isLoading={isSubmitting}
              type="submit"
              size="sm"
              colorScheme="pink"
              leftIcon={<Icon fontSize="18" as={RiSaveLine} />}
            >
              Salvar
            </Button>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
