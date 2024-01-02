"use client";

import {
  ChakraProvider,
  ThemeConfig,
  extendTheme,
} from "@chakra-ui/react";

const theme = extendTheme();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  );
}
