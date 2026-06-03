"use client";
import React, { useEffect } from "react";

// ============================================================
// Button — Nyra UI · Type: Default
// Source Figma : node 133:4518
// Variants : default (text + icon) | icon-primary (icon only)
// Sizes    : xs | s | m | l
// States   : default | hover | pressed | focus | disabled
// ============================================================

export type ButtonSize = "xs" | "s" | "m" | "l";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  /** "default" = texte + icône  |  "icon-primary" = icône seule */
  variant?: "default" | "icon-primary";
  size?: ButtonSize;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  /** Requis pour variant="icon-primary" */
  icon?: React.ReactNode;
  htmlType?: "button" | "submit" | "reset";
}

// ── CSS ───────────────────────────────────────────────────────
/*
  Specs Figma (node 133:4986, L size) :
  - Fill     : button-color-main = primary-60
  - Border   : 1px gradient inside (primary-50 → primary-70 → primary-50)
  - Shadow   : y:7 blur:18 rgba(primary,24%) + inner white y:2 blur:4 + black y:2 blur:4
  - Hover    : state-on-primary-color-hover overlay = rgba(7,5,10, 0.5)
  - Pressed  : rgba(7,5,10, 0.7)
  - Radius   : border-radius-l = 12px
  - L height : 54px, padding 24px/12px, gap 8px
*/
const CSS = `
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
  transition: background 120ms ease, box-shadow 120ms ease, transform 80ms ease, opacity 120ms ease;
  position: relative;
}
.nyra-btn:disabled {
  cursor: not-allowed;
  pointer-events: none;
}

/* Tailles — texte + icône */
.nyra-btn-l  { height:54px; padding:0 24px; font-size:16px; gap:8px; border-radius:12px; }
.nyra-btn-m  { height:40px; padding:0 16px; font-size:16px; gap:8px; border-radius:12px; }
.nyra-btn-s  { height:32px; padding:0 12px; font-size:14px; gap:6px; border-radius:8px;  }
.nyra-btn-xs { height:24px; padding:0 8px;  font-size:12px; gap:4px; border-radius:8px;  }

/* Tailles — icon only (carré) */
.nyra-btn-icon-l  { width:54px; height:54px; padding:0; font-size:20px; border-radius:12px; }
.nyra-btn-icon-m  { width:40px; height:40px; padding:0; font-size:18px; border-radius:12px; }
.nyra-btn-icon-s  { width:32px; height:32px; padding:0; font-size:16px; border-radius:8px;  }
.nyra-btn-icon-xs { width:24px; height:24px; padding:0; font-size:14px; border-radius:8px;  }

/* ── Default & Icon-primary ─── */
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
    linear-gradient(var(--color-btn-bg-disabled, #D8D8E1), var(--color-btn-bg-disabled, #D8D8E1)) border-box;
  color: var(--color-text-disabled, #A9A9BD);
  box-shadow: none;
  opacity: 0.4;
}
`;

function injectStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById("nyra-btn-css")) return;
  const el = document.createElement("style");
  el.id = "nyra-btn-css";
  el.textContent = CSS;
  document.head.appendChild(el);
}

// ── Spinner ───────────────────────────────────────────────────
const Spinner = ({ px }: { px: number }) => (
  <svg width={px} height={px} viewBox="0 0 24 24" fill="none"
    style={{ animation: "nyra-spin 0.75s linear infinite", flexShrink: 0 }} aria-hidden>
    <style>{`@keyframes nyra-spin{to{transform:rotate(360deg)}}`}</style>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
    <path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// ── Component ─────────────────────────────────────────────────
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "m", loading = false, leftIcon, rightIcon, icon,
     htmlType = "button", children, className = "", disabled, ...props }, ref) => {
    useEffect(() => { injectStyles(); }, []);

    const iconMode   = variant === "icon-primary";
    const isDisabled = disabled || loading;
    const spinnerPx  = size === "xs" ? 12 : size === "s" ? 14 : 16;

    const sizeClass  = iconMode ? `nyra-btn-icon-${size}` : `nyra-btn-${size}`;
    const cls = ["nyra-btn", `nyra-btn-${variant}`, sizeClass, className].filter(Boolean).join(" ");

    return (
      <button ref={ref} type={htmlType} disabled={isDisabled}
        className={cls} aria-busy={loading || undefined} {...props}>
        {iconMode
          ? (loading ? <Spinner px={spinnerPx} /> : icon)
          : (<>{loading ? <Spinner px={spinnerPx} /> : leftIcon}{children}{!loading && rightIcon}</>)
        }
      </button>
    );
  }
);

Button.displayName = "Button";
