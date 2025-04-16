import { IconType } from "@icons-pack/react-simple-icons";
import { VariantProps } from "class-variance-authority";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";

export type Link = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    title: string;
    url: string;
    icon?: IconType;
  };

export function LinkItem({ link }: { link: Link }) {
  return (
    <Button
      asChild
      variant={link.variant ?? "outline"}
      size={link.size ?? "lg"}
      className={link.className}
    >
      <Link href={link.url}>
        {link.icon && <link.icon className="mr-2 h-4 w-4" />}
        {link.title}
      </Link>
    </Button>
  );
}
