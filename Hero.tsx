import { FormProvider } from "@/components/form/FormContext";
import ApplicationForm from "@/components/form/ApplicationForm";

export const metadata = {
  title: "Apply — NOMI Studio",
  description: "Apply to work with NOMI Studio.",
};

export default function ApplyPage() {
  return (
    <FormProvider>
      <ApplicationForm />
    </FormProvider>
  );
}
