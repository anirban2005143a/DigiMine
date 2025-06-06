import React from "react";
import { cn } from "../../lib/utils";

const Input = React.forwardRef((props, ref) => {
  const { className, type = "text", ...rest } = props;

  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...rest}
    />
  );
});

Input.displayName = "Input";

export { Input };
