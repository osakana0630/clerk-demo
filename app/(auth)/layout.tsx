import Image from "next/image";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-6">
      <Logo />
      {children}
    </div>
  );
}

function Logo() {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <Image src="/logo.svg" alt="logo" width="80" height="80" />
      <div className="flex flex-col items-center">
        <p className="text-2xl font-semibold">Clerk Demo</p>
        <p className="text-sm text-muted-foreground">Lets start!</p>
      </div>
    </div>
  );
}
