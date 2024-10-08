"use client";
import { ThemeProvider } from "next-themes";

function Providers({ children }: any) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
}

export default Providers;
