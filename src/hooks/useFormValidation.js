import { useEffect, useMemo, useState } from "react";
import { validateField } from "../utils/validation";

const useFormValidation = (validationSchema, submitForm, options = {}) => {
  const { initialValues } = options;
  // states
  const [data, setData] = useState({});
  const [touched, setTouched] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  // memos
  const errors = useMemo(() => {
    const errors = {};
    if (!validationSchema) return {};
    // eslint-disable-next-line array-callback-return
    Object.keys(validationSchema).map((key) => {
      let error;
      const schema = validationSchema?.[key];
      if (Array.isArray(data[key])) {
        // for an array of item, loop through each item and validate each field
        data?.[key]?.forEach((item, idx) => {
          const { valueKey, ...otherSchema } = schema;

          error = validateField(
            (item?.[valueKey] || item)?.toString(),
            otherSchema
          );
          //   use index for inputs where each item don't have an id
          errors[item.id || idx] = error;
        });
      } else {
        error = validateField(
          data[key]?.toString(), // TODO: this will not allow it take arrays, change later
          schema,
          data // [optional], this is a new update for fiields that depends on other fields, consider removing it as soon as a new flow can bbe gotten
        );
        errors[key] = error;
      }
    });
    return errors;
  }, [data, validationSchema]);

  //   functions
  const handleFieldChanges = (name, value) => {
    setData({ ...data, [name]: value });
  };
  const handleFieldTouched = (name) => {
    setTouched({ ...touched, [name]: true });
  };
  const showError = (name) => {
    return (touched[name] || hasSubmitted) && errors[name]?.message;
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    if (Object.values(errors).find((error) => error?.message)) return;
    setLoading(true);
    await submitForm(data);
    setLoading(false);
  };
  const resetForm = () => {
    setData({});
    setTouched({});
    setHasSubmitted(false);
  };

  //   effects
  useEffect(() => {
    if (initialValues) {
      setData(initialValues || {});
    }
  }, [initialValues]);

  return {
    data,
    touched,
    errors,
    loading,
    setFieldValue: handleFieldChanges,
    setFieldTouched: handleFieldTouched,
    showError,
    handleFormSubmit,
    resetForm,
  };
};

export default useFormValidation;
