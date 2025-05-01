import { useFormikContext } from "formik";
import { useEffect } from "react";

export function ScrollToError() {
  const formik = useFormikContext();
  const submitting = formik?.isSubmitting;

  useEffect(() => {
    const el = document.querySelector(".validation-error");
    (el?.parentElement ?? el)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [submitting]);
  return null;
}
