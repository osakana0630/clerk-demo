import { Mail, Home } from "lucide-react";
import ToolbarButton from "@/components/toolbar-button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { UserMenu } from "@/components/user-menu";

export function Toolbar() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 rounded-full bg-muted/30 backdrop-blur border shadow-lg overflow-hidden">
      <SignedIn>
        <UserMenu />
      </SignedIn>
      <ToolbarButton href="/" title="ホーム" icon={<Home size={20} />} />
      <ToolbarButton
        href="/contact"
        title="お問い合わせ"
        icon={<Mail size={20} />}
      />
      <SignedOut>
        <SignInButton>
          <Button variant="default" className="rounded-full">
            ログイン
          </Button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton>
          <Button variant="default" className="rounded-full">
            ログアウト
          </Button>
        </SignOutButton>
      </SignedIn>
    </div>
  );
}
