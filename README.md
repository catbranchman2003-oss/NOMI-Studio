"use client";

import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface BaseProps {
  label: string;
  hint?: string;
  required?: boolean;
  optional?: boolean;
}

interface InputProps extends BaseProps, InputHTMLAttributes<HTMLInputElement> {
  as?: "input";
}

interface TextareaProps extends BaseProps, TextareaHTMLAttributes<HTMLTextAreaElement> {
  as: "textarea";
}

type FormFieldProps = InputProps | TextareaProps;

export default function FormField(props: FormFieldProps) {
  const { label, hint, required, optional, as = "input", ...rest } = props;

  const baseClass =
    "w-full bg-transparent border-b border-fern/30 text-petal font-sans font-light text-base py-3 px-0 placeholder:text-mint/25 focus:outline-none focus:border-mint/60 transition-colors duration-300 resize-none";

  return (
    <div className="space-y-2">
      <label className="block text-mint/60 text-xs tracking-[0.15em] uppercase font-sans">
        {label}
        {optional && (
          <span className="ml-2 text-mint/30 normal-case tracking-normal">
            (optional)
          </span>
        )}
      </label>
      {as === "textarea" ? (
        <textarea
          className={`${baseClass} min-h-[100px]`}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          className={baseClass}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {hint && (
        <p className="text-mint/30 text-xs font-sans font-light">{hint}</p>
      )}
    </div>
  );
}
