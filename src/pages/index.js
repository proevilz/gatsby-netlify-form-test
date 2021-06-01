import * as React from "react";
import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { Link } from "gatsby";
// markup
const IndexPage = () => {
  return (
    <Box
      h="100vh"
      w="100vw"
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      flexDir="column"
    >
      <Text fontSize="6xl" fontWeight="bold" mt="32" mb="10">
        Hello <span role="presentation">👋</span>
      </Text>
      <Button as={Link} to="/contact" size="lg">
        Contact
      </Button>
    </Box>
  );
};

export default IndexPage;
