import { Stack } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/react";
import { SyncLoader } from "react-spinners";

export default function LoadingSpinner() {
  return (
    <Stack align="center" spacing={6}>
      <Heading size="lg" as="h1">
        Loading
      </Heading>
      <SyncLoader color="#4299E1" speedMultiplier={0.6} />
    </Stack>
  );
}
