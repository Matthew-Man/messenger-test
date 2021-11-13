import { ReactNode } from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";

interface PageFrameProps {
  children: {
    header?: ReactNode;
    body: ReactNode;
  };
}

export default function PageFrame({
  children: { header, body },
}: PageFrameProps) {
  return (
    <>
      <Head>
        <title>Realtime Messenger</title>
      </Head>
      <Box as="main">
        {header}
        {body}
      </Box>
    </>
  );
}
