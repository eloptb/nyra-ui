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

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ size = "md", label, hint, error, leftIcon, rightIcon, style, id, ...props }, ref) => {
    const inputId = id ?? `input-${Math.random().toString(36).slice(2, 8)}`;
    const heights: Record<string, string> = { sm: "var(--height-sm)", md: "var(--height-md)", lg: "var(--height-lg)" };
    const fontSizes: Record<string, string> = { sm: "var(--text-sm)", md: "var(--text-sm)", lg: "var(--text-base)" };
    const paddingX: Record<string, string> = { sm: "10px", md: "12px", lg: "14px" };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%" }}>
        {label && (
          <label htmlFor={inputId} style={{ fontSize: "var(--text-sm)", fontWeight: 500, color: "var(--color-text-primary)", fontFamily: "var(--font-base)" }}>
            {label}
          </label>
        )}
        <div style={{ position: "relative", display: "flex", alignItems: "center", height: heights[size] }}>
          {leftIcon && (
            <span style={{ position: "absolute", left: 10, color: "var(--color-text-muted)", display: "flex", pointerEvents: "none" }}>
              {leftIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            style={{
              width: "100%", height: "100%", borderRadius: "var(--radius-md)",
              border: `1px solid ${error ? "var(--color-border-error)" : "var(--color-border-default)"}`,
              padding: `0 ${rightIcon ? "36px" : paddingX[size]} 0 ${leftIcon ? "36px" : paddingX[size]}`,
              fontSize: fontSizes[size], fontFamily: "var(--font-base)",
              background: "var(--color-bg-raised)", color: "var(--color-text-primary)",
              outline: "none", boxSizing: "border-box", transition: "border-color var(--transition-base), box-shadow var(--transition-base)",
              ...style,
            }}
            onFocus={e => { e.target.style.borderColor = "var(--color-border-focus)"; e.target.style.boxShadow = `0 0 0 var(--focus-ring-width) var(--focus-ring-color)`; }}
            onBlur={e => { e.target.style.borderColor = error ? "var(--color-border-error)" : "var(--color-border-default)"; e.target.style.boxShadow = "none"; }}
            aria-invalid={!!error}
            {...props}
          />
          {rightIcon && (
            <span style={{ position: "absolute", right: 10, color: "var(--color-text-muted)", display: "flex" }}>
              {rightIcon}
            </span>
          )}
        </div>
        {error && <p style={{ fontSize: "var(--text-xs)", color: "var(--color-accent-default)", margin: 0, fontFamily: "var(--font-base)" }}>{error}</p>}
        {hint && !error && <p style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)", margin: 0, fontFamily: "var(--font-base)" }}>{hint}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
