import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { currentUser } from "@clerk/nextjs/server";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Music } from "lucide-react";

export async function UserMenu() {
  const user = await currentUser();
  if (!user) return null;

  const userEmail = user.emailAddresses.find(
    (email) => email.id === user.primaryEmailAddressId,
  )?.emailAddress;

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar className="rounded-full border bg-muted">
          <AvatarImage src={user?.imageUrl} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent align="center" sideOffset={11}>
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-4">
            <Avatar className="rounded-full border bg-muted">
              <AvatarImage src={user.imageUrl} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-lg font-semibold">{user.username}</h3>
              <p className="text-sm text-muted-foreground">{userEmail}</p>
            </div>
          </div>
          <Separator />
          <div className="flex">
            <div className="flex flex-col gap-2">
              <Button variant="ghost" asChild>
                <Link href="#">
                  <Music size={20} className="mr-3" />
                  リンク1
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="#">
                  <Music size={20} className="mr-3" />
                  リンク2
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="#">
                  <Music size={20} className="mr-3" />
                  リンク3
                </Link>
              </Button>
            </div>
            <span className="flex-1" />
            <div className="flex flex-col gap-2">
              <Button variant="ghost" asChild>
                <Link href="#">
                  <Music size={20} className="mr-3" />
                  リンク4
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="#">
                  <Music size={20} className="mr-3" />
                  リンク5
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="#">
                  <Music size={20} className="mr-3" />
                  リンク6
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
