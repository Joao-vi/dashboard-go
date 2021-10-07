import { Flex, Stack, Button } from "@chakra-ui/react";

import { SubmitHandler, useForm } from "react-hook-form";

import { Input } from "../components/Forms/Input";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const signInFormSchema = yup.object().shape({
  "E-mail": yup
    .string()
    .required("E-mail obrigatório")
    .email("E-mail inválido"),
  Senha: yup.string().required("Senha obrigatória"),
});

interface IFormValues {
  "E-mail": string;
  Senha: string;
}

export function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFormValues>({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSignIn: SubmitHandler<IFormValues> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };
  return (
    <Flex h="100vh" w="100vw" align="center" justify="center">
      <Flex
        as="form"
        direction="column"
        width="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            id="email"
            label="E-mail"
            type="email"
            register={register}
            required
            error={errors["E-mail"]}
          />
          <Input
            id="password"
            label="Senha"
            type="password"
            register={register}
            error={errors.Senha}
            required
          />
        </Stack>
        <Button
          type="submit"
          isLoading={isSubmitting}
          bg="pink.500"
          colorScheme="pink"
          mt="5"
          size="lg"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
