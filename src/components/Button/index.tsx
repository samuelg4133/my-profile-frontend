import Image from "next/image";
import { ButtonHTMLAttributes, useMemo } from "react";
import { VariantProps, tv } from "tailwind-variants";

import { Slot } from "@radix-ui/react-slot";

const styles = tv({
  base: "inline-flex items-center justify-center gap-2 rounded-lg py-2.5 px-8 max-sm:px-2.5 shrink-0 text-base",
  variants: {
    color: {
      primary:
        "bg-main dark:bg-dark text-white hover:bg-blue-400 dark:hover:bg-blue-800",
      secondary:
        "bg-gray-100 text-black border border-gray-300 hover:border-gray-400 dark:hover:bg-gray-200",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof styles> & { asChild?: boolean; loading?: boolean };

export function Button({
  asChild = false,
  color,
  disabled,
  loading = false,
  ...props
}: ButtonProps) {
  const Component = useMemo(() => (asChild ? Slot : "button"), [asChild]);

  return (
    <Component
      {...props}
      className={styles({ className: props?.className, color })}
      disabled={loading || disabled}
    >
      {loading ? (
        <Image src="/gifs/loading.gif" alt="Loading" width={24} height={24} />
      ) : (
        props?.children
      )}
    </Component>
  );
}
