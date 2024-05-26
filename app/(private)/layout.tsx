import { Header } from "@/components/header";
import { Toolbar } from "@/components/toolbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="container py-10">{children}</main>
      <Toolbar />
    </>
  );
}
