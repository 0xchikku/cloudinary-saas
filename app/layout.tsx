import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

export const metadata: Metadata = {
  title: "Cloudinary-saas",
  description: "Cloudinary-saas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
            {children}
          </Theme>
        </body>
      </html>
    </ClerkProvider>
  );
}
