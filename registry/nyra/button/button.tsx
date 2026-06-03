"use client";
import React, { useEffect } from "react";

// ============================================================
// Button — Nyra UI
// Source Figma : node 133:4518
// Specs extraites directement depuis Figma via MCP
//
// Types   : default | white-fill | outline | outline-classic |
//           link | icon-primary | icon-outline |
//           icon-outline-classic | icon-link
// Sizes   : xs | s | m | l
// States  : default | hover | pressed | focus | disabled
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
  variant?: ButtonType;
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  /** Requis pour les variantes icon-* */
  icon?: React.ReactNode;
  htmlType?: "button" | "submit" | "reset";
}

// ── CSS Injection (styles hover/focus/active via classes) ────

const NYRA_BTN_STYLES = `
/* ── Nyra Button — base ─────────────────────────────── */
.nyra-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-base, 'Noto Sans', system-ui, sans-serif);
  font-weight: 500;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;
  border: none;
  outline: none;
  text-decoration: none;
  transition:
    background 120ms ease,
    box-shadow 120ms ease,
    color 120ms ease,
    border-color 120ms ease,
    opacity 120ms ease;
  position: relative;
}
.nyra-btn:disabled,
.nyra-btn[aria-disabled="true"] {
  cursor: not-allowed;
  pointer-events: none;
  opacity: 0.4;
}

/* ── Tailles ─────────────────────────────────────────── */
/* L — Figma specs: 54px, 24px H, 12px V, gap 8px */
.nyra-btn-l  { height: 54px; padding: 0 24px; font-size: 16px; gap: 8px; border-radius: var(--radius-lg, 12px); }
.nyra-btn-m  { height: 40px; padding: 0 16px; font-size: 16px; gap: 8px; border-radius: var(--radius-lg, 12px); }
.nyra-btn-s  { height: 32px; padding: 0 12px; font-size: 14px; gap: 6px; border-radius: var(--radius-md, 8px);  }
.nyra-btn-xs { height: 24px; padding: 0 8px;  font-size: 12px; gap: 4px; border-radius: var(--radius-md, 8px);  }

/* Icon-only : carré */
.nyra-btn-icon-l  { width: 54px; height: 54px; padding: 0; font-size: 20px; border-radius: var(--radius-lg, 12px); }
.nyra-btn-icon-m  { width: 40px; height: 40px; padding: 0; font-size: 18px; border-radius: var(--radius-lg, 12px); }
.nyra-btn-icon-s  { width: 32px; height: 32px; padding: 0; font-size: 16px; border-radius: var(--radius-md, 8px);  }
.nyra-btn-icon-xs { width: 24px; height: 24px; padding: 0; font-size: 14px; border-radius: var(--radius-md, 8px);  }

/* Outline-classic et Icon-Outline-classic : pill */
.nyra-btn-outline-classic,
.nyra-btn-icon-outline-classic { border-radius: var(--radius-full, 9999px) !important; }

/* ── DEFAULT ─────────────────────────────────────────── */
/*
  Specs Figma :
  - Fill     : button-color-main (primary-60)
  - Border   : 1px gradient inside (primary-50 → primary-70 → primary-50)
  - Shadow   : blue glow y:7 blur:18 + inner white y:2 blur:4 + black y:2 blur:4
  - Hover    : state-on-primary-color-hover overlay = rgba(7,5,10,0.5)
  - Pressed  : darker overlay
*/
.nyra-btn-default,
.nyra-btn-icon-primary {
  background:
    linear-gradient(var(--color-btn-bg, #1C5EFE), var(--color-btn-bg, #1C5EFE)) padding-box,
    linear-gradient(135deg,
      var(--color-btn-border-1, #82A6FE) 0%,
      var(--color-btn-border-2, #1545BB) 50%,
      var(--color-btn-border-1, #82A6FE) 100%
    ) border-box;
  border: 1px solid transparent;
  color: var(--color-btn-text, #FDFDFD);
  box-shadow:
    0 7px 18px var(--color-btn-shadow, rgba(28,94,254,0.24)),
    inset 0 2px 4px rgba(255,255,255,0.27),
    0 2px 4px rgba(0,0,0,0.25);
}
.nyra-btn-default:hover,
.nyra-btn-icon-primary:hover {
  background:
    linear-gradient(var(--color-btn-bg-hover, #123284), var(--color-btn-bg-hover, #123284)) padding-box,
    linear-gradient(135deg,
      var(--color-btn-border-1, #82A6FE) 0%,
      var(--color-btn-border-2, #1545BB) 50%,
      var(--color-btn-border-1, #82A6FE) 100%
    ) border-box;
  box-shadow:
    0 7px 18px var(--color-btn-shadow, rgba(28,94,254,0.24)),
    inset 0 2px 4px rgba(255,255,255,0.27),
    0 2px 4px rgba(0,0,0,0.25);
}
.nyra-btn-default:active,
.nyra-btn-icon-primary:active {
  background:
    linear-gradient(var(--color-btn-bg-pressed, #0B2165), var(--color-btn-bg-pressed, #0B2165)) padding-box,
    linear-gradient(135deg,
      var(--color-btn-border-1, #82A6FE) 0%,
      var(--color-btn-border-2, #1545BB) 50%,
      var(--color-btn-border-1, #82A6FE) 100%
    ) border-box;
  box-shadow:
    0 2px 8px var(--color-btn-shadow, rgba(28,94,254,0.24)),
    inset 0 2px 4px rgba(255,255,255,0.27),
    0 1px 2px rgba(0,0,0,0.25);
  transform: translateY(1px);
}
.nyra-btn-default:focus-visible,
.nyra-btn-icon-primary:focus-visible {
  outline: 3px solid var(--focus-ring-color, rgba(28,94,254,0.4));
  outline-offset: 2px;
}
.nyra-btn-default:disabled,
.nyra-btn-icon-primary:disabled {
  background:
    linear-gradient(var(--color-btn-bg-disabled, #D8D8E1), var(--color-btn-bg-disabled, #D8D8E1)) padding-box,
    linear-gradient(135deg, var(--color-btn-bg-disabled, #D8D8E1), var(--color-btn-bg-disabled, #D8D8E1)) border-box;
  color: var(--color-text-disabled, #A9A9BD);
  box-shadow: none;
}

/* ── WHITE-FILL ──────────────────────────────────────── */
.nyra-btn-white-fill {
  background:
    linear-gradient(var(--color-bg-raised, #FDFDFD), var(--color-bg-raised, #FDFDFD)) padding-box,
    linear-gradient(135deg,
      var(--color-btn-border-1, #82A6FE) 0%,
      var(--color-btn-border-2, #1545BB) 50%,
      var(--color-btn-border-1, #82A6FE) 100%
    ) border-box;
  border: 1px solid transparent;
  color: var(--color-btn-bg, #1C5EFE);
  box-shadow: var(--shadow-sm, 0 1px 3px rgba(28,94,254,0.08));
}
.nyra-btn-white-fill:hover {
  box-shadow: var(--shadow-md, 0 4px 12px rgba(28,94,254,0.14));
}
.nyra-btn-white-fill:active {
  box-shadow: var(--shadow-sm);
  transform: translateY(1px);
}
.nyra-btn-white-fill:focus-visible {
  outline: 3px solid var(--focus-ring-color, rgba(28,94,254,0.4));
  outline-offset: 2px;
}
.nyra-btn-white-fill:disabled {
  background: linear-gradient(var(--color-btn-bg-disabled,#D8D8E1),var(--color-btn-bg-disabled,#D8D8E1)) padding-box, linear-gradient(var(--color-btn-bg-disabled,#D8D8E1),var(--color-btn-bg-disabled,#D8D8E1)) border-box;
  color: var(--color-text-disabled, #A9A9BD);
  box-shadow: none;
}

/* ── OUTLINE ─────────────────────────────────────────── */
.nyra-btn-outline,
.nyra-btn-icon-outline {
  background: transparent;
  border: 1px solid var(--color-interactive-default, #1C5EFE);
  color: var(--color-interactive-default, #1C5EFE);
}
.nyra-btn-outline:hover,
.nyra-btn-icon-outline:hover {
  background: var(--color-interactive-subtle, #E8EFFF);
}
.nyra-btn-outline:active,
.nyra-btn-icon-outline:active {
  background: var(--color-interactive-muted, #CFDDFF);
  transform: translateY(1px);
}
.nyra-btn-outline:focus-visible,
.nyra-btn-icon-outline:focus-visible {
  outline: 3px solid var(--focus-ring-color, rgba(28,94,254,0.4));
  outline-offset: 2px;
}
.nyra-btn-outline:disabled,
.nyra-btn-icon-outline:disabled {
  border-color: var(--color-btn-bg-disabled, #D8D8E1);
  color: var(--color-text-disabled, #A9A9BD);
}

/* ── OUTLINE CLASSIC ─────────────────────────────────── */
.nyra-btn-outline-classic,
.nyra-btn-icon-outline-classic {
  background: transparent;
  border: 1px solid var(--color-interactive-default, #1C5EFE);
  color: var(--color-interactive-default, #1C5EFE);
}
.nyra-btn-outline-classic:hover,
.nyra-btn-icon-outline-classic:hover {
  background: var(--color-interactive-subtle, #E8EFFF);
}
.nyra-btn-outline-classic:active,
.nyra-btn-icon-outline-classic:active {
  background: var(--color-interactive-muted, #CFDDFF);
  transform: translateY(1px);
}
.nyra-btn-outline-classic:focus-visible,
.nyra-btn-icon-outline-classic:focus-visible {
  outline: 3px solid var(--focus-ring-color, rgba(28,94,254,0.4));
  outline-offset: 2px;
}
.nyra-btn-outline-classic:disabled,
.nyra-btn-icon-outline-classic:disabled {
  border-color: var(--color-btn-bg-disabled, #D8D8E1);
  color: var(--color-text-disabled, #A9A9BD);
}

/* ── LINK ────────────────────────────────────────────── */
.nyra-btn-link,
.nyra-btn-icon-link {
  background: transparent;
  border: none;
  color: var(--color-btn-text-link, var(--color-interactive-default, #1C5EFE));
  box-shadow: none;
}
.nyra-btn-link:hover,
.nyra-btn-icon-link:hover {
  text-decoration: underline;
  text-underline-offset: 2px;
}
.nyra-btn-link:active,
.nyra-btn-icon-link:active {
  opacity: 0.75;
}
.nyra-btn-link:focus-visible,
.nyra-btn-icon-link:focus-visible {
  outline: 3px solid var(--focus-ring-color, rgba(28,94,254,0.4));
  outline-offset: 2px;
}
.nyra-btn-link:disabled,
.nyra-btn-icon-link:disabled {
  color: var(--color-text-disabled, #A9A9BD);
}
`;

function injectStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("nyra-btn-css")) return;
  const el = document.createElement("style");
  el.id = "nyra-btn-css";
  el.textContent = NYRA_BTN_STYLES;
  document.head.appendChild(el);
}

// ── Helpers ───────────────────────────────────────────────────

const isIconOnly = (v: ButtonType) =>
  ["icon-primary", "icon-outline", "icon-outline-classic", "icon-link"].includes(v);

const variantClass: Record<ButtonType, string> = {
  "default":              "nyra-btn-default",
  "white-fill":           "nyra-btn-white-fill",
  "outline":              "nyra-btn-outline",
  "outline-classic":      "nyra-btn-outline-classic",
  "link":                 "nyra-btn-link",
  "icon-primary":         "nyra-btn-icon-primary",
  "icon-outline":         "nyra-btn-icon-outline",
  "icon-outline-classic": "nyra-btn-icon-outline-classic",
  "icon-link":            "nyra-btn-icon-link",
};

// ── Spinner ───────────────────────────────────────────────────

const Spinner = ({ px }: { px: number }) => (
  <svg
    width={px}
    height={px}
    viewBox="0 0 24 24"
    fill="none"
    style={{ animation: "nyra-btn-spin 0.75s linear infinite", flexShrink: 0 }}
    aria-hidden
  >
    <style>{`@keyframes nyra-btn-spin{to{transform:rotate(360deg)}}`}</style>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
    <path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// ── Component ─────────────────────────────────────────────────

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant   = "default",
      size      = "m",
      loading   = false,
      leftIcon,
      rightIcon,
      icon,
      htmlType  = "button",
      children,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    useEffect(() => { injectStyles(); }, []);

    const iconMode    = isIconOnly(variant);
    const isDisabled  = disabled || loading;
    const spinnerPx   = size === "xs" ? 12 : size === "s" ? 14 : 16;

    const sizeClass = iconMode
      ? `nyra-btn-icon-${size}`
      : `nyra-btn-${size}`;

    const classes = [
      "nyra-btn",
      variantClass[variant],
      sizeClass,
      className,
    ].filter(Boolean).join(" ");

    const content = iconMode ? (
      loading ? <Spinner px={spinnerPx} /> : icon
    ) : (
      <>
        {loading ? <Spinner px={spinnerPx} /> : leftIcon}
        {children}
        {!loading && rightIcon}
      </>
    );

    return (
      <button
        ref={ref}
        type={htmlType}
        disabled={isDisabled}
        className={classes}
        aria-busy={loading || undefined}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
