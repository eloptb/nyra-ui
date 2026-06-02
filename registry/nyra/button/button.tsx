import React from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-150 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40 select-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[#1C5EFE] text-[#FDFDFD] hover:bg-[#1545BB] active:bg-[#10358F] shadow-[0_4px_12px_rgba(28,94,254,0.20)] hover:shadow-[0_6px_16px_rgba(28,94,254,0.28)] focus-visible:ring-[3px] focus-visible:ring-[rgba(28,94,254,0.30)]",
  secondary:
    "bg-[#EF476F] text-[#FDFDFD] hover:bg-[#A93450] active:bg-[#7B273B] shadow-[0_4px_12px_rgba(239,71,111,0.20)] hover:shadow-[0_6px_16px_rgba(239,71,111,0.28)] focus-visible:ring-[3px] focus-visible:ring-[rgba(239,71,111,0.30)]",
  ghost:
    "bg-transparent text-[#1C5EFE] border border-[#1C5EFE] hover:bg-[#E8EFFF] active:bg-[#CFDDFF] focus-visible:ring-[3px] focus-visible:ring-[rgba(28,94,254,0.30)]",
  danger:
    "bg-transparent text-[#EF476F] border border-[#EF476F] hover:bg-[#FDEDF1] active:bg-[#FDE3E9] focus-visible:ring-[3px] focus-visible:ring-[rgba(239,71,111,0.30)]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

const Spinner = () => (
  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z" />
  </svg>
);

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", loading = false, leftIcon, rightIcon, children, className = "", disabled, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={[base, variants[variant], sizes[size], className].join(" ")}
      {...props}
    >
      {loading ? <Spinner /> : leftIcon}
      {children}
      {!loading && rightIcon}
    </button>
  )
);

Button.displayName = "Button";
