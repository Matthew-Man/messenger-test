import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import { GrGoogle } from "react-icons/gr";

export default function LoginView() {
  return (
    <Box margin={20}>
      <Stack align="center">
        <Heading size="md" as="h2">
          Sign up/Login to continue
        </Heading>
        <Text>Thanks for taking a look at my realtime messaging app!</Text>
        <Button width="sm" leftIcon={<GrGoogle />}>
          Sign in with Google
        </Button>
      </Stack>
    </Box>
  );
}
