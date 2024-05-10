"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { TbTrash } from "react-icons/tb";

import { ConfirmDialog } from "@/components";
import { Product, ProductsContext } from "@/context/ProductsContext";
import {
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";

export type Action = "remover" | "limpar carrinho";

const Cart = () => {
  const [action, setAction] = useState<Action>("remover");
  const [productToRemove, setProductToRemove] = useState({} as Product);
  const { isOpen, onToggle } = useDisclosure();

  const { products, total } = useContext(ProductsContext);

  const handleAction = (action: Action) => {
    setAction(action);
    onToggle();
  };

  return (
    <>
      <Head>
        <title>Carrinho de compras</title>
      </Head>
      <VStack mt="120px" gap={6}>
        <Heading alignSelf="start">Carrinho</Heading>
        <ConfirmDialog
          isOpen={isOpen}
          onToggle={onToggle}
          action={action}
          productToRemove={productToRemove}
        />
        <Box
          display="flex"
          flexDirection="column"
          gap={3}
          padding={4}
          h="387px"
          w="100%"
          bgColor="white"
          borderRadius="10px"
          boxShadow="md"
          overflowX="auto"
        >
          {products.length ? (
            products.map((product) => (
              <>
                <HStack
                  key={product.id}
                  justifyContent="space-between"
                  fontWeight="bold"
                >
                  <Box
                    padding={2}
                    color="danger"
                    onClick={() => {
                      setProductToRemove(product);
                      handleAction("remover");
                    }}
                  >
                    <IoIosCloseCircle size="24px" />
                  </Box>
                  <Box textAlign="start" w="140px">
                    <Text
                      overflow="hidden"
                      textOverflow="ellipsis"
                      whiteSpace="nowrap"
                    >
                      {product.amount}x {product.name}
                    </Text>
                  </Box>
                  <Text>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(product.price)}
                  </Text>
                </HStack>
                <Divider />
              </>
            ))
          ) : (
            <Text opacity={0.5}>Adicione produtos ao carrinho...</Text>
          )}
        </Box>
        <HStack w="100%" justifyContent="space-between">
          <Text fontSize="24px" fontWeight="bold">
            Total
          </Text>
          <Text fontSize="18px" fontWeight="bold">
            {total}
          </Text>
        </HStack>
        <Box my={6} display="flex" flexDirection="column" gap={4} w="100%">
          <Link href="product-form">
            <Button variant="base">Continuar Adicionando</Button>
          </Link>
          <Button
            isDisabled={products.length === 0}
            variant="gray"
            rightIcon={<TbTrash size={24} />}
            onClick={() => handleAction("limpar carrinho")}
          >
            Limpar carrinho
          </Button>
        </Box>
      </VStack>
    </>
  );
};

export default Cart;
