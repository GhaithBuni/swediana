// src/components/Container.tsx
import * as React from "react";

type Props = React.PropsWithChildren<{ className?: string }>;

export default function Container({ className = "", children }: Props) {
  return (
    <div className={`w-full md:w-4/5 mx-auto px-4 md:px-8 ${className}`}>
      {children}
    </div>
  );
}
