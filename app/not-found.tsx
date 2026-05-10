"use client";

import Link from "next/link";
import { Button } from "@/components/ui/buttons/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 text-center max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button onClick={() => window.location.href = "/"}>Return Home</Button>
    </div>
  );
}
