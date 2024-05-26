import { auth } from "@clerk/nextjs/server";
import { Header } from "@/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  auth().protect();
  return (
    <>
      <Header />
      <main className="container py-10">{children}</main>
    </>
  );
}
