import "~/styles/globals.css";

import { TRPCReactProvider } from "~/trpc/react";
import { Container, Header } from "./_components";

export const metadata = {
  title: "NextJs E-Comm Application",
  description: "NextJs App",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-inter flex flex-col`}>
        <Header />
        <Container>
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </Container>
      </body>
    </html>
  );
}
