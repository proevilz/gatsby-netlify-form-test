import * as React from "react";
import { Button } from "@chakra-ui/button";
import { Box, Text, Container, Flex } from "@chakra-ui/layout";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
} from "@chakra-ui/react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};
const ContactPage = () => {
  const [state, setState] = React.useState({});
  const [isSent, setIsSent] = React.useState(false);
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => setIsSent(true))
      .catch((error) => alert(error));
  };

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
        Contact me below
      </Text>
      <Container>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />

          <Flex flexDir="column">
            <FormControl id="name" mb="10">
              <FormLabel>Your name</FormLabel>
              <Input type="name" onChange={handleChange} />
            </FormControl>

            <FormControl id="email" mb="10">
              <FormLabel>Your email address</FormLabel>
              <Input type="email" onChange={handleChange} />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>

            <FormControl id="message" mb="10">
              <FormLabel>Your message</FormLabel>
              <Textarea
                placeholder="Here is a sample message. Be nice."
                onChange={handleChange}
              />
            </FormControl>

            <Button ml="auto" colorScheme="blue" type="submit">
              Send
            </Button>
          </Flex>
        </form>
      </Container>
    </Box>
  );
};

export default ContactPage;
