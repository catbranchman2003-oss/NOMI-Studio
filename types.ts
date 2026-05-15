"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { FormData } from "@/lib/types";

type FormContextType = {
  step: number;
  formData: Partial<FormData>;
  setStep: (step: number) => void;
  updateForm: (fields: Partial<FormData>) => void;
  isSubmitting: boolean;
  setIsSubmitting: (v: boolean) => void;
  isRejected: boolean;
  setIsRejected: (v: boolean) => void;
};

const FormContext = createContext<FormContextType | null>(null);

export function FormProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRejected, setIsRejected] = useState(false);

  const updateForm = (fields: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...fields }));
  };

  return (
    <FormContext.Provider
      value={{ step, formData, setStep, updateForm, isSubmitting, setIsSubmitting, isRejected, setIsRejected }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error("useForm must be used within FormProvider");
  return ctx;
}
