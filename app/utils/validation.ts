import type * as yup from 'yup';
import type { ObjectShape, OptionalObjectSchema } from 'yup/lib/object';

const getValidationErrors = (error: yup.ValidationError) => {
  const validationErrors: Record<string, string> = {};

  error.inner.forEach(({ path, message }) => (path ? (validationErrors[path] = message) : ''));

  return validationErrors;
};

const validate = async <ValidationSchema extends ObjectShape>(
  values: Record<string, FormDataEntryValue>,
  schema: OptionalObjectSchema<ValidationSchema>,
) => {
  try {
    await schema.validate(values, { abortEarly: false });
    return { hasErrors: false };
  } catch (error) {
    const errors = getValidationErrors(error as yup.ValidationError);
    return { hasErrors: true, errors };
  }
};

export default validate;
