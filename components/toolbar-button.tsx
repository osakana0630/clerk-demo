"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type ToolbarButtonProps = {
  href: string;
  title: string;
  icon: React.ReactNode;
};
export default function ToolbarButton({
  href,
  title,
  icon,
}: ToolbarButtonProps) {
  const pathname = usePathname();
  return (
    <TooltipProvider delayDuration={500}>
      <Tooltip>
        <TooltipTrigger>
          <Button
            variant="ghost"
            size="icon"
            asChild
            className={cn(
              "rounded-full",
              pathname === href && "ring-1 ring-primary",
            )}
          >
            <Link href={href}>
              {icon}
              <span className="sr-only">{title}</span>
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent sideOffset={11}>{title}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
