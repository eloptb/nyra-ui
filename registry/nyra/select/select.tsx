import React from "react";

export type SelectSize = "sm" | "md" | "lg";
export interface SelectOption { value: string; label: string; disabled?: boolean; }

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  size?: SelectSize;
  label?: string;
  hint?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ size = "md", label, hint, error, options, placeholder, style, id, ...props }, ref) => {
    const selectId = id ?? `select-${Math.random().toString(36).slice(2, 8)}`;
    const heights: Record<string, string> = { sm: "var(--height-sm)", md: "var(--height-md)", lg: "var(--height-lg)" };
    const fontSizes: Record<string, string> = { sm: "var(--text-sm)", md: "var(--text-sm)", lg: "var(--text-base)" };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%" }}>
        {label && (
          <label htmlFor={selectId} style={{ fontSize: "var(--text-sm)", fontWeight: 500, color: "var(--color-text-primary)", fontFamily: "var(--font-base)" }}>
            {label}
          </label>
        )}
        <div style={{ position: "relative", height: heights[size] }}>
          <select
            ref={ref}
            id={selectId}
            style={{
              width: "100%", height: "100%", appearance: "none",
              borderRadius: "var(--radius-md)",
              border: `1px solid ${error ? "var(--color-border-error)" : "var(--color-border-default)"}`,
              padding: `0 36px 0 12px`, fontSize: fontSizes[size], fontFamily: "var(--font-base)",
              background: "var(--color-bg-raised)", color: "var(--color-text-primary)",
              outline: "none", cursor: "pointer", boxSizing: "border-box",
              transition: "border-color var(--transition-base), box-shadow var(--transition-base)",
              ...style,
            }}
            onFocus={e => { e.target.style.borderColor = "var(--color-border-focus)"; e.target.style.boxShadow = `0 0 0 var(--focus-ring-width) var(--focus-ring-color)`; }}
            onBlur={e => { e.target.style.borderColor = error ? "var(--color-border-error)" : "var(--color-border-default)"; e.target.style.boxShadow = "none"; }}
            aria-invalid={!!error}
            {...props}
          >
            {placeholder && <option value="" disabled>{placeholder}</option>}
            {options.map(opt => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>{opt.label}</option>
            ))}
          </select>
          <span style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", color: "var(--color-text-muted)", pointerEvents: "none" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
        {error && <p style={{ fontSize: "var(--text-xs)", color: "var(--color-accent-default)", margin: 0, fontFamily: "var(--font-base)" }}>{error}</p>}
        {hint && !error && <p style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)", margin: 0, fontFamily: "var(--font-base)" }}>{hint}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";
