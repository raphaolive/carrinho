import { Providers } from "./providers";
import { fonts } from "@/config/fonts";
import { Container } from "@chakra-ui/react";
import { ProductsContextProvider } from "@/context/ProductsContext";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Cart | Descubra o valor da sua compra.</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>

      <body className={fonts.poppins.variable}>
        <Toaster position="top-center" />
        <Providers>
          <Container
            display="flex"
            flexDirection="column"
            h="100vh"
            justifyContent="center"
            gap={20}
            p={10}
          >
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
