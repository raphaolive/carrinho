// app/providers.tsx
"use client";

import { theme } from "@/config/theme";
import { ProductsContextProvider } from "@/context/ProductsContext";
import { ChakraProvider } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <ProductsContextProvider>{children}</ProductsContextProvider>
    </ChakraProvider>
  );
}
