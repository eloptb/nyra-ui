import React from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const styles: Record<string, React.CSSProperties> = {
  base: {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    gap: 8, fontWeight: 500, borderRadius: "var(--radius-md)",
    border: "none", cursor: "pointer", transition: "all var(--transition-base)",
    fontFamily: "var(--font-base)", whiteSpace: "nowrap", userSelect: "none",
    outline: "none",
  },
  sm: { height: "var(--height-sm)", padding: "0 12px", fontSize: "var(--text-sm)" },
  md: { height: "var(--height-md)", padding: "0 16px", fontSize: "var(--text-sm)" },
  lg: { height: "var(--height-lg)", padding: "0 22px", fontSize: "var(--text-base)" },
  primary: {
    background: "var(--color-interactive-default)",
    color: "var(--color-text-on-primary)",
    boxShadow: "var(--shadow-md)",
  },
  secondary: {
    background: "var(--color-accent-default)",
    color: "var(--color-text-on-primary)",
    boxShadow: "var(--shadow-md)",
  },
  ghost: {
    background: "transparent",
    color: "var(--color-interactive-default)",
    border: "1px solid var(--color-interactive-default)",
  },
  danger: {
    background: "transparent",
    color: "var(--color-accent-default)",
    border: "1px solid var(--color-accent-default)",
  },
  disabled: { opacity: 0.4, cursor: "not-allowed", pointerEvents: "none" },
};

const Spinner = () => (
  <svg style={{ animation: "spin 1s linear infinite", width: 16, height: 16 }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <style>{`@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }`}</style>
    <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z" />
  </svg>
);

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", loading = false, leftIcon, rightIcon, children, style, disabled, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      style={{
        ...styles.base,
        ...styles[size],
        ...styles[variant],
        ...(disabled || loading ? styles.disabled : {}),
        ...style,
      }}
      {...props}
    >
      {loading ? <Spinner /> : leftIcon}
      {children}
      {!loading && rightIcon}
    </button>
  )
);

Button.displayName = "Button";
