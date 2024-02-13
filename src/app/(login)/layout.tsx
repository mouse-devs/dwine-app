import type { Metadata } from "next";

import BaseLayout from "@/layouts/base-layout";

export const metadata: Metadata = {
  title: "dWine - Login",
  description: "dWine Login",
};

export default function RootLayout({ children }: any) {
  return <BaseLayout>{children}</BaseLayout>;
}
