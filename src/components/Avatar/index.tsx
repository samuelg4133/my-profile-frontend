import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const styles = tv({
  base: "rounded-full border-2 border-main dark:border-blue-700 bg-blue-100 dark:bg-main flex items-center justify-center dark:text-white text-black font-bold",
  variants: {
    size: {
      xs: "h-6 w-6 text-xs",
      sm: "h-8 w-8 text-sm",
      base: "h-10 w-10 text-base",
      lg: "h-12 w-12 text-lg",
      xl: "h-14 w-14 text-xl",
      "2xl": "h-16 w-16 text-2xl",
    },
  },
  defaultVariants: {
    size: "base",
  },
});

type AvatarProps = ComponentProps<"div"> & VariantProps<typeof styles>;

export function Avatar({ size, ...props }: AvatarProps) {
  return <div className={styles({ size })} {...props} />;
}
