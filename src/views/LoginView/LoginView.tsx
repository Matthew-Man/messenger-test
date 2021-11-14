import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Heading,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { GrGoogle } from "react-icons/gr";
import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useState } from "react";
import { useEffect } from "react";

export default function LoginView() {
  const [user, isLoading, error] = useAuthState(auth);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const toast = useToast();

  const useAuth = () => {
    const provider = new GoogleAuthProvider();
    setIsAuthenticating(true);
    signInWithPopup(auth, provider).catch((error) => {
      setIsAuthenticating(false);
      const errorCode = error.code;
      const errorMessage = error.message;
      toast({
        title: "Error signing in/loggin in",
        description: errorMessage + ` Error code: ${errorCode}`,
        status: "error",
        isClosable: true,
        position: "top",
      });
    });
  };

  useEffect(() => {
    if (user) {
      // Redirect to messages
    }
  }, [user]);

  if (isLoading || isAuthenticating)
    return (
      <Stack align="center" spacing={8} margin={10}>
        <LoadingSpinner />
        <Alert width="50%" status="warning">
          <AlertIcon />
          You&lsquo;re currently signing/logging in - please finish or close the
          popup/tab.
        </Alert>
      </Stack>
    );

  return (
    <Box margin={20}>
      <Stack align="center">
        <Heading size="md" as="h2">
          Sign up/Login to continue
        </Heading>
        <Text>Thanks for taking a look at my realtime messaging app!</Text>
        <Button width="sm" onClick={useAuth} leftIcon={<GrGoogle />}>
          Sign in with Google
        </Button>
      </Stack>
    </Box>
  );
}
