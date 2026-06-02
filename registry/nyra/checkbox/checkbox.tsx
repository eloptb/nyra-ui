import React from "react";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  hint?: string;
  error?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, hint, error, className = "", id, ...props }, ref) => {
    const checkId = id ?? `checkbox-${Math.random().toString(36).slice(2, 8)}`;

    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={checkId} className="inline-flex items-start gap-2.5 cursor-pointer">
          <div className="relative flex items-center justify-center mt-0.5">
            <input ref={ref} id={checkId} type="checkbox" className="peer sr-only" {...props} />
            <div className={["h-4 w-4 rounded flex items-center justify-center border-2 transition-all duration-150 border-[#D8D8E1] bg-[#FDFDFD] peer-checked:bg-[#1C5EFE] peer-checked:border-[#1C5EFE] peer-focus-visible:ring-[3px] peer-focus-visible:ring-[rgba(28,94,254,0.30)] peer-disabled:opacity-40", error ? "border-[#EF476F]" : "", className].join(" ")}>
              <svg className="hidden peer-checked:block w-2.5 h-2.5" viewBox="0 0 10 8" fill="none">
                <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          {label && <span className="text-sm text-[#303041] leading-tight">{label}</span>}
        </label>
        {error && <p className="text-xs text-[#EF476F] ml-6">{error}</p>}
        {hint && !error && <p className="text-xs text-[#737394] ml-6">{hint}</p>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
