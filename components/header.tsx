import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function Header() {
  return (
    <header className="h-16 flex items-center border-b px-5 overflow-x-auto">
      <Button variant="ghost" asChild>
        <Link href="/" className="font-semibold text-xl">
          <Image src="/logo.svg" height={50} width={50} alt="Logo" />
        </Link>
      </Button>
      <span className="flex-1" />

      <div className="flex gap-3">
        <SignedOut>
          <SignInButton>
            <Button>ログイン</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
