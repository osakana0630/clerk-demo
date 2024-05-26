"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
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
          <Button variant="ghost" size="icon" asChild className="rounded-full">
            <Link
              href={href}
              className="group"
              aria-current={pathname === href ? "page" : undefined}
            >
              {icon}
              <span className="sr-only">{title}</span>
              <span
                className="pointer-events-none absolute bottom-0 size-2 origin-bottom translate-y-1/2 scale-0 rounded-full
                           bg-sky-500 opacity-0 shadow-[0_-2px_10px] shadow-sky-500
                           transition duration-500 group-aria-[current=page]:scale-100
                           group-aria-[current=page]:opacity-100"
              />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent sideOffset={11}>{title}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
