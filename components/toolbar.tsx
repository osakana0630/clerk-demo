import { Settings, Mail, Home, LayoutDashboard } from "lucide-react";
import ToolbarButton from "@/components/toolbar-button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export function Toolbar() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 p-2 rounded-full bg-muted/30 backdrop-blur border shadow-lg">
      <ToolbarButton href="/" title="ホーム" icon={<Home size={20} />} />
      <ToolbarButton
        href="/dashboard"
        title="ダッシュボード"
        icon={<LayoutDashboard size={20} />}
      />
      <ToolbarButton
        href="/contact"
        title="お問い合わせ"
        icon={<Mail size={20} />}
      />
      <ToolbarButton
        href="/settings"
        title="設定"
        icon={<Settings size={20} />}
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
