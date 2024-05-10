/* theme.ts */
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    sandDollar: "#F6F0E7",
    sage: "#C7C4B1",
    sageGreenHover: "#73756b",
    sageGreen: "#5B5D52",
    blueGreenHover: "#02c8d6",
    blueGreen: "#00AFBC",
    dangerHover: "#A06670",
    danger: "#A06262",
  },
  fonts: {
    heading: "var(--font-poppins)",
    body: "var(--font-poppins)",
  },
  components: {
    Button: {
      baseStyle: {
        fontFamily: "var(--font-poppins)",
        borderRadius: "30px",
        w: "full",
        boxShadow: "md",
      },
      variants: {
        home: {
          bgColor: "blueGreen",
          color: "white",
          fontStyle: "italic",
          fontWeight: "bold",
          fontSize: "18px",
          padding: "35px",
        },
        base: {
          bgColor: "blueGreen",
          color: "white",
          padding: "35px",
          _hover: {
            bgColor: "blueGreenHover",
          },
        },
        gray: {
          bgColor: "sageGreen",
          color: "sage",
          padding: "35px",
          _hover: {
            bgColor: "sageGreenHover",
          },
        },
        danger: {
          bg: "danger",
          color: "white",
          w: "90px",
          padding: "25px 60px",
          fontSize: "sm",
          _hover: {
            bgColor: "dangerHover",
          },
        },
        confirm: {
          bg: "blueGreen",
          color: "white",
          w: "90px",
          padding: "25px 60px",
          fontSize: "sm",
          _hover: {
            bgColor: "blueGreenHover",
          },
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "sandDollar",
        color: "sageGreen",
        overflowX: "hidden",
      },
      "&::-webkit-scrollbar": {
        width: "0.7vh",
        background: "sage",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "danger",
        borderRadius: "30px",
      },
    },
  },
});
