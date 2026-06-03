import React from "react";

// ============================================================
// Button — Nyra UI
// Source : Figma "Nyra - Genero Design system" · node 133:4518
//
// Types   : default | white-fill | outline | outline-classic |
//           link | icon-primary | icon-outline |
//           icon-outline-classic | icon-link
// Sizes   : xs | s | m | l
// ============================================================

export type ButtonType =
  | "default"
  | "white-fill"
  | "outline"
  | "outline-classic"
  | "link"
  | "icon-primary"
  | "icon-outline"
  | "icon-outline-classic"
  | "icon-link";

export type ButtonSize = "xs" | "s" | "m" | "l";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  /** Visual style — maps 1:1 to Figma Type property */
  variant?: ButtonType;
  size?: ButtonSize;
  /** Show a loading spinner and disable interactions */
  loading?: boolean;
  /** Icon before the label (ignored for icon-* variants) */
  leftIcon?: React.ReactNode;
  /** Icon after the label (ignored for icon-* variants) */
  rightIcon?: React.ReactNode;
  /**
   * Required for icon-* variants. Renders the icon inside the button.
   * For icon-* variants the label children are ignored.
   */
  icon?: React.ReactNode;
  /** Native button type attribute */
  htmlType?: "button" | "submit" | "reset";
}

// ── Helpers ──────────────────────────────────────────────────

const HEIGHT: Record<ButtonSize, string> = {
  xs: "22px",
  s:  "28px",
  m:  "36px",
  l:  "44px",
};

const PADDING: Record<ButtonSize, string> = {
  xs: "0 8px",
  s:  "0 12px",
  m:  "0 16px",
  l:  "0 22px",
};

const FONT_SIZE: Record<ButtonSize, string> = {
  xs: "12px",
  s:  "var(--text-sm, 14px)",
  m:  "16px",
  l:  "16px",
};

// Icon-only buttons are square
const ICON_SIZE: Record<ButtonSize, string> = {
  xs: "22px",
  s:  "28px",
  m:  "36px",
  l:  "44px",
};

const ICON_FONT: Record<ButtonSize, string> = {
  xs: "12px",
  s:  "14px",
  m:  "16px",
  l:  "18px",
};

// Radius: outline-classic and icon-outline-classic use full pill
const RADIUS: Record<ButtonType, string> = {
  "default":              "var(--radius-md, 8px)",
  "white-fill":           "var(--radius-md, 8px)",
  "outline":              "var(--radius-md, 8px)",
  "outline-classic":      "var(--radius-full, 9999px)",
  "link":                 "var(--radius-md, 8px)",
  "icon-primary":         "var(--radius-md, 8px)",
  "icon-outline":         "var(--radius-md, 8px)",
  "icon-outline-classic": "var(--radius-full, 9999px)",
  "icon-link":            "var(--radius-md, 8px)",
};

const isIconOnly = (v: ButtonType) =>
  ["icon-primary", "icon-outline", "icon-outline-classic", "icon-link"].includes(v);

// ── Spinner ───────────────────────────────────────────────────

const Spinner = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ animation: "nyra-spin 0.8s linear infinite", flexShrink: 0 }}
    aria-hidden
  >
    <style>{`@keyframes nyra-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
    <path
      d="M22 12a10 10 0 00-10-10"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

// ── Style builders ────────────────────────────────────────────

function buildStyle(
  variant: ButtonType,
  size: ButtonSize,
  disabled: boolean
): React.CSSProperties {
  const base: React.CSSProperties = {
    display:        "inline-flex",
    alignItems:     "center",
    justifyContent: "center",
    gap:            "6px",
    fontFamily:     "var(--font-base, 'Noto Sans', system-ui, sans-serif)",
    fontWeight:     500,
    lineHeight:     1,
    cursor:         disabled ? "not-allowed" : "pointer",
    border:         "none",
    outline:        "none",
    textDecoration: "none",
    userSelect:     "none",
    whiteSpace:     "nowrap",
    transition:     "background 120ms ease, box-shadow 120ms ease, color 120ms ease, border-color 120ms ease, opacity 120ms ease",
    borderRadius:   RADIUS[variant],
    fontSize:       isIconOnly(variant) ? ICON_FONT[size] : FONT_SIZE[size],
  };

  if (isIconOnly(variant)) {
    base.width  = ICON_SIZE[size];
    base.height = ICON_SIZE[size];
    base.padding = "0";
    base.flexShrink = 0;
  } else {
    base.height  = HEIGHT[size];
    base.padding = PADDING[size];
  }

  if (disabled) {
    base.opacity = 0.4;
    base.pointerEvents = "none";
  }

  switch (variant) {
    case "default":
    case "icon-primary":
      return {
        ...base,
        background: "var(--color-interactive-default, #1C5EFE)",
        color:      "var(--color-text-on-primary, #FDFDFD)",
        boxShadow:  "var(--shadow-md)",
      };

    case "white-fill":
      // Gradient border technique: transparent border + background-clip
      return {
        ...base,
        background:
          "linear-gradient(var(--color-bg-raised, #fff), var(--color-bg-raised, #fff)) padding-box," +
          "linear-gradient(135deg, var(--primitive-primary-50, #82A6FE), var(--primitive-primary-70, #1545BB)) border-box",
        border:    "1px solid transparent",
        color:     "var(--color-interactive-default, #1C5EFE)",
        boxShadow: "var(--shadow-sm)",
      };

    case "outline":
    case "icon-outline":
      return {
        ...base,
        background:   "transparent",
        border:       "1px solid var(--color-border-interactive, var(--color-interactive-default, #1C5EFE))",
        color:        "var(--color-interactive-default, #1C5EFE)",
      };

    case "outline-classic":
    case "icon-outline-classic":
      return {
        ...base,
        background: "transparent",
        border:     "1px solid var(--color-border-interactive, var(--color-interactive-default, #1C5EFE))",
        color:      "var(--color-interactive-default, #1C5EFE)",
      };

    case "link":
    case "icon-link":
      return {
        ...base,
        background:   "transparent",
        border:       "none",
        color:        "var(--color-text-interactive, var(--color-interactive-default, #1C5EFE))",
        boxShadow:    "none",
        padding:      isIconOnly(variant) ? "0" : PADDING[size],
      };
  }
}

// ── Component ─────────────────────────────────────────────────

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant  = "default",
      size     = "m",
      loading  = false,
      leftIcon,
      rightIcon,
      icon,
      htmlType = "button",
      children,
      style,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled    = disabled || loading;
    const iconOnlyMode  = isIconOnly(variant);
    const computedStyle = buildStyle(variant, size, !!isDisabled);

    const spinnerSize = size === "xs" ? 12 : size === "s" ? 14 : 16;

    const content = iconOnlyMode ? (
      loading ? <Spinner size={spinnerSize} /> : icon
    ) : (
      <>
        {loading ? <Spinner size={spinnerSize} /> : leftIcon}
        {children}
        {!loading && rightIcon}
      </>
    );

    return (
      <button
        ref={ref}
        // eslint-disable-next-line react/button-has-type
        type={htmlType}
        disabled={isDisabled}
        style={{ ...computedStyle, ...style }}
        aria-busy={loading || undefined}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
