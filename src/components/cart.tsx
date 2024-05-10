import { ProductsContext } from "@/context/ProductsContext";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React, { useContext } from "react";
import { IoCartOutline } from "react-icons/io5";

export const Cart = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Link href="/cart">
      <Box
        position="absolute"
        top={10}
        right={10}
        bgColor="sageGreen"
        color="sandDollar"
        p="12px"
        rounded="full"
      >
        {products.length > 0 && (
          <Box
            position="absolute"
            top={-2}
            right={0}
            w="26px"
            h="26px"
            rounded="full"
            bgColor="blueGreen"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <span>{products.length}</span>
          </Box>
        )}
        <IoCartOutline size={40} />
      </Box>
    </Link>
  );
};
