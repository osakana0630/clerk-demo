import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export function Header() {
  return (
    <header className="flex h-16 items-center overflow-x-auto border-b px-5">
      <Button variant="ghost" asChild>
        <Link href="/" className="text-xl font-semibold">
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
