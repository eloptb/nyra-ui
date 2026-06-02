import React from "react";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, required, className = "", ...props }, ref) => (
    <label ref={ref} className={["text-sm font-medium text-[#303041]", className].join(" ")} {...props}>
      {children}
      {required && <span className="ml-0.5 text-[#EF476F]" aria-hidden>*</span>}
    </label>
  )
);

Label.displayName = "Label";
