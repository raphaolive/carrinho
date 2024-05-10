import Link from "next/link";
import { BsHandbag } from "react-icons/bs";

import { Box, Button, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Box maxW="200px">
        <Heading fontSize="xx-large" fontWeight="thin">
          Adicione produtos no seu carinho.
        </Heading>
        <Heading fontSize="xx-large">Descubra o valor da sua compra.</Heading>
      </Box>
      <Link href="/product-form">
        <Button variant="home" rightIcon={<BsHandbag />}>
          Iniciar a compra
        </Button>
      </Link>
    </>
  );
}
