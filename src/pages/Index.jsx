import { Container, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight="bold">Hello World</Text>
        <Text fontSize="lg" color="gray.500">Welcome to your new React application.</Text>
      </VStack>
    </Container>
  );
};

export default Index;