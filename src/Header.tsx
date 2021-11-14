import { Box, Flex, Heading } from "@chakra-ui/react";
import { User } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Logo from "./components/Logo";
import { auth } from "./utils/firebase";

export default function Header() {
  const [user] = useAuthState(auth);
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      padding={2}
    >
      <Logo width="200px" height="70px" />
      {user && (
        <Box align="right">
          <UserMenu user={user} />
        </Box>
      )}
    </Flex>
  );
}

function UserMenu({ user }: { user: User }) {
  return (
    <Heading as="h3" size="sm">
      Hi, {user.displayName}
    </Heading>
  );
}
