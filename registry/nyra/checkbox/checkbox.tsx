import React from "react";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  hint?: string;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, hint, error, id, ...props }, ref) => {
    const checkId = id ?? `checkbox-${Math.random().toString(36).slice(2, 8)}`;
    const [checked, setChecked] = React.useState(props.defaultChecked ?? false);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <label htmlFor={checkId} style={{ display: "inline-flex", alignItems: "flex-start", gap: 10, cursor: props.disabled ? "not-allowed" : "pointer", opacity: props.disabled ? 0.4 : 1 }}>
          <div style={{ position: "relative", width: 16, height: 16, marginTop: 2, flexShrink: 0 }}>
            <input
              ref={ref}
              id={checkId}
              type="checkbox"
              style={{ position: "absolute", opacity: 0, width: "100%", height: "100%", cursor: "inherit", margin: 0 }}
              onChange={e => setChecked(e.target.checked)}
              {...props}
            />
            <div style={{
              width: 16, height: 16, borderRadius: "var(--radius-sm)",
              border: `2px solid ${error ? "var(--color-border-error)" : checked ? "var(--color-interactive-default)" : "var(--color-border-default)"}`,
              background: checked ? "var(--color-interactive-default)" : "transparent",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "all var(--transition-base)",
            }}>
              {checked && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
          </div>
          {label && (
            <span style={{ fontSize: "var(--text-sm)", color: "var(--color-text-primary)", fontFamily: "var(--font-base)", lineHeight: 1.5 }}>
              {label}
            </span>
          )}
        </label>
        {error && <p style={{ fontSize: "var(--text-xs)", color: "var(--color-accent-default)", margin: "0 0 0 26px", fontFamily: "var(--font-base)" }}>{error}</p>}
        {hint && !error && <p style={{ fontSize: "var(--text-xs)", color: "var(--color-text-muted)", margin: "0 0 0 26px", fontFamily: "var(--font-base)" }}>{hint}</p>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
