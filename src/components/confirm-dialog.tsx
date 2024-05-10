import { Action } from "@/app/cart/page";
import { Product, ProductsContext } from "@/context/ProductsContext";
import {
  Box,
  Button,
  HStack,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "sonner";

type Props = {
  isOpen: boolean;
  onToggle: () => void;
  action: Action;
  productToRemove: Product;
};

export const ConfirmDialog = ({
  isOpen,
  onToggle,
  action,
  productToRemove,
}: Props) => {
  const { removeItem, setProducts } = useContext(ProductsContext);

  const router = useRouter();

  const title =
    action === "remover"
      ? "Tem certeza que deseja remover"
      : "Tem certeza que deseja limpar o carrinho ";

  const handleConfirmAction = () => {
    if (action === "limpar carrinho") {
      setProducts([]);
      router.push("/");
      toast.success("Carrinho esvaziado!");
    }

    if (action === "remover") {
      removeItem(productToRemove.id);
      onToggle();
      toast.success("Item removido com sucesso!");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onToggle}
      closeOnOverlayClick={false}
      closeOnEsc={false}
      isCentered
    >
      <ModalOverlay>
        <ModalContent textAlign="center" p={8} borderRadius={20}>
          <ModalHeader>
            <Box margin="auto">
              <Heading fontSize="xl">{title}</Heading>
            </Box>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {action === "remover" && productToRemove && (
              <Text fontWeight="semibold">
                {productToRemove.amount}x {productToRemove.name}
              </Text>
            )}
          </ModalBody>
          <ModalFooter>
            <HStack w="100%" justifyContent="center" gap={10}>
              <Button variant="confirm" onClick={handleConfirmAction}>
                confirmar
              </Button>
              <Button variant="danger" onClick={onToggle}>
                cancelar
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};
