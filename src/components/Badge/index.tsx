import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type BadgeProps = ComponentProps<"div"> & {
  color: string;
  type?: "dot" | "rounded";
};

export function Badge({
  children,
  className,
  color,
  style = {},
  type = "rounded",
  ...props
}: BadgeProps) {
  return (
    <div
      className={twMerge(
        "inline-flex justify-center items-center gap-1",
        "h-5 shrink-0 rounded-full",
        "text-black dark:text-white",
        "text-xs font-medium text-center",
        type === "dot" ? "px-2" : "px-3",
        color,
        className,
      )}
      style={{
        ...style,
        backgroundColor: type === "dot" ? "transparent" : undefined,
      }}
      {...props}
    >
      {type === "dot" && (
        <div className={twMerge(color, "w-1 h-1 rounded-full")} />
      )}
      {children}
    </div>
  );
}
