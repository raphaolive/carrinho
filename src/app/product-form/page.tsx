"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import { BiPlusCircle } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { z } from "zod";

import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  VStack,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductsContext } from "@/context/ProductsContext";
import { uuid } from "uuidv4";
import { Cart } from "@/components";
import { toast } from "sonner";
import Head from "next/head";

const schema = z.object({
  name: z.string().min(1, { message: "O nome do produto é obrigatório" }),
  price: z.string().min(1, { message: "O preço do produto é obrigatório" }),
  amount: z.string(),
});

type FormType = z.infer<typeof schema>;

const ProductForm = () => {
  const { products, setProducts } = useContext(ProductsContext);

  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<FormType>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const optionsAmount = Array.from({ length: 101 }, (_, index) => index + 1);

  function registerProduct(values: FormType) {
    const formattedValues = {
      id: uuid(),
      name: values.name,
      price: Number(values.price),
      amount: Number(values.amount),
    };

    setProducts((prodctsList) => [...prodctsList, formattedValues]);
    reset();
    toast.success("Item adicionado com sucesso!");
  }

  console.log(products);
  return (
    <>
      <Head>
        <title>Adicione Produtos</title>
      </Head>
      <Cart />
      <Heading>Adicione um produto</Heading>
      <form onSubmit={handleSubmit(registerProduct)}>
        <VStack gap={6}>
          <FormControl isInvalid={!!errors.name}>
            <FormLabel>Escreva o nome do produto:</FormLabel>
            <Input
              {...register("name")}
              bgColor="white"
              boxShadow="md"
              placeholder="Orchideas"
            />
            <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.price}>
            <FormLabel>Escreva o preço do produto:</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="fill">R$</InputLeftElement>
              <Input
                {...register("price")}
                type="number"
                step="0.01"
                bgColor="white"
                boxShadow="md"
                placeholder="29.90"
              />
            </InputGroup>
            <FormErrorMessage>{errors?.price?.message}</FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel>Selecione a Quantidade:</FormLabel>
            <Controller
              name="amount"
              control={control}
              defaultValue="1"
              render={({ field }) => (
                <Select {...field} bgColor="white" boxShadow="md">
                  {optionsAmount.map((_, index) => (
                    <option key={index} value={index}>
                      {index}
                    </option>
                  ))}
                </Select>
              )}
            ></Controller>
          </FormControl>
          <Box mt={10} display="flex" flexDirection="column" gap={4} w="100%">
            <Button
              type="submit"
              variant="base"
              rightIcon={<BiPlusCircle size={24} />}
            >
              Adicionar
            </Button>
            <Link href="/cart">
              <Button variant="gray" rightIcon={<IoCartOutline size={24} />}>
                Ver Carrinho
              </Button>
            </Link>
          </Box>
        </VStack>
      </form>
    </>
  );
};

export default ProductForm;
