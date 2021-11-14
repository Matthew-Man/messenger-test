import { Box, Heading } from "@chakra-ui/react";
import Logo from "./components/Logo";

export default function Header() {
  return (
    <Box width="100%" padding={2}>
      <Logo width="200px" height="70px" />
    </Box>
  );
}
