import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const styles = tv({
  base: "",
  variants: {
    size: {
      300: "text-base",
      200: "text-sm",
      100: "text-sm",
    },
  },
});

type ParagraphProps = ComponentProps<"p"> & VariantProps<typeof styles>;

export function Paragraph({ className, size, ...props }: ParagraphProps) {
  return <p {...props} className={styles({ className, size })} />;
}
