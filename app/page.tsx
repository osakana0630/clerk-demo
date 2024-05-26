import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container py-10">
      <h1>ホーム画面</h1>
      <div>
        <Button variant="default" asChild>
          <Link href="/private">private</Link>
        </Button>
      </div>
    </main>
  );
}
