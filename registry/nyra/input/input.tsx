import React from "react";

export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: InputSize;
  label?: string;
  hint?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const sizes: Record<InputSize, { wrapper: string; input: string }> = {
  sm: { wrapper: "h-8",  input: "text-sm px-3" },
  md: { wrapper: "h-10", input: "text-sm px-3" },
  lg: { wrapper: "h-12", input: "text-base px-4" },
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ size = "md", label, hint, error, leftIcon, rightIcon, className = "", id, ...props }, ref) => {
    const inputId = id ?? `input-${Math.random().toString(36).slice(2, 8)}`;
    const { wrapper, input } = sizes[size];
    const borderClass = error
      ? "border-[#EF476F] focus-within:ring-[rgba(239,71,111,0.30)]"
      : "border-[#D8D8E1] focus-within:border-[#1C5EFE] focus-within:ring-[rgba(28,94,254,0.30)]";

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && <label htmlFor={inputId} className="text-sm font-medium text-[#303041]">{label}</label>}
        <div className={["relative flex items-center rounded-lg border bg-[#FDFDFD] transition-all duration-150 focus-within:ring-[3px]", borderClass, wrapper, className].join(" ")}>
          {leftIcon && <span className="absolute left-3 text-[#737394] flex items-center pointer-events-none">{leftIcon}</span>}
          <input
            ref={ref}
            id={inputId}
            className={["w-full h-full bg-transparent outline-none text-[#07050A] placeholder:text-[#A9A9BD]", input, leftIcon ? "pl-9" : "", rightIcon ? "pr-9" : ""].join(" ")}
            aria-invalid={!!error}
            {...props}
          />
          {rightIcon && <span className="absolute right-3 text-[#737394] flex items-center">{rightIcon}</span>}
        </div>
        {error && <p className="text-xs text-[#EF476F]">{error}</p>}
        {hint && !error && <p className="text-xs text-[#737394]">{hint}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
