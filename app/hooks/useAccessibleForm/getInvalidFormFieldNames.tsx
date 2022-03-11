const toReadableName = (formInputName: string) => {
  return formInputName
    .split(/(?=[A-Z])/)
    .join(' ')
    .toLowerCase();
};

const useInvalidFormFieldNames = (errors: Record<string, string>) => {
  return Object.keys(errors).reduce((invalidFormInputFields, formInputName, index) => {
    if (index === 0) {
      return toReadableName(formInputName);
    }

    return `${invalidFormInputFields}, ${toReadableName(formInputName)}`;
  }, '');
};

export default useInvalidFormFieldNames;
