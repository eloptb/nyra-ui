import React from "react";

export type SelectSize = "sm" | "md" | "lg";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  size?: SelectSize;
  label?: string;
  hint?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
}

const sizes: Record<SelectSize, string> = {
  sm: "h-8 text-sm px-3",
  md: "h-10 text-sm px-3",
  lg: "h-12 text-base px-4",
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ size = "md", label, hint, error, options, placeholder, className = "", id, ...props }, ref) => {
    const selectId = id ?? `select-${Math.random().toString(36).slice(2, 8)}`;
    const borderClass = error
      ? "border-[#EF476F] focus:ring-[rgba(239,71,111,0.30)]"
      : "border-[#D8D8E1] focus:border-[#1C5EFE] focus:ring-[rgba(28,94,254,0.30)]";

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && <label htmlFor={selectId} className="text-sm font-medium text-[#303041]">{label}</label>}
        <div className="relative w-full">
          <select
            ref={ref}
            id={selectId}
            className={["w-full appearance-none rounded-lg border bg-[#FDFDFD] text-[#07050A] outline-none transition-all duration-150 focus:ring-[3px] pr-10 disabled:opacity-40", borderClass, sizes[size], className].join(" ")}
            {...props}
          >
            {placeholder && <option value="" disabled>{placeholder}</option>}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>{opt.label}</option>
            ))}
          </select>
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#737394]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
        </div>
        {error && <p className="text-xs text-[#EF476F]">{error}</p>}
        {hint && !error && <p className="text-xs text-[#737394]">{hint}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";
