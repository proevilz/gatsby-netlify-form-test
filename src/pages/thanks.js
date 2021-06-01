import * as React from "react";
import { Button } from "@chakra-ui/button";
import { Box, Text, Container, Flex } from "@chakra-ui/layout";
import { Link } from "gatsby";
const ThanksPage = () => {
  return (
    <Box
      h="100vh"
      w="100vw"
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      flexDir="column"
    >
      <Container>
        <Text fontSize="6xl" fontWeight="bold" mt="32" mb="10">
          Thanks, your message has been sent! 🎉
        </Text>
        <Button as={Link} to="/">
          Go home
        </Button>
      </Container>
    </Box>
  );
};

export default ThanksPage;
