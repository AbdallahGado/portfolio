import React from "react";
import { cn } from "@/lib/utils";

type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "p" | "lead" | "large" | "small" | "muted";

interface TypographyProps {
  children: React.ReactNode;
  variant?: TypographyVariant;
  className?: string;
}

const variantStyles: Record<TypographyVariant, string> = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
  h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  p: "leading-7 [&:not(:first-child)]:mt-6",
  lead: "text-xl text-muted-foreground",
  large: "text-lg font-semibold",
  small: "text-sm font-medium leading-none",
  muted: "text-sm text-muted-foreground",
};

const variantElements: Record<TypographyVariant, string> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p: "p",
  lead: "p",
  large: "p",
  small: "p",
  muted: "p",
};

export function Typography({
  children,
  variant = "p",
  className,
}: TypographyProps) {
  return React.createElement(
    variantElements[variant],
    { className: cn(variantStyles[variant], className) },
    children
  );
}

export const H1 = (props: Omit<TypographyProps, "variant">) => <Typography variant="h1" {...props} />;
export const H2 = (props: Omit<TypographyProps, "variant">) => <Typography variant="h2" {...props} />;
export const H3 = (props: Omit<TypographyProps, "variant">) => <Typography variant="h3" {...props} />;
export const H4 = (props: Omit<TypographyProps, "variant">) => <Typography variant="h4" {...props} />;
export const P = (props: Omit<TypographyProps, "variant">) => <Typography variant="p" {...props} />;
export const Lead = (props: Omit<TypographyProps, "variant">) => <Typography variant="lead" {...props} />;
export const Large = (props: Omit<TypographyProps, "variant">) => <Typography variant="large" {...props} />;
export const Small = (props: Omit<TypographyProps, "variant">) => <Typography variant="small" {...props} />;
export const Muted = (props: Omit<TypographyProps, "variant">) => <Typography variant="muted" {...props} />;