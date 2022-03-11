import type { RefObject } from 'react';

function byNameAttribute(element: Element, name: string) {
  return element.getAttribute('name') === name;
}

const getFirstInvalidFormField = (
  formRef: RefObject<HTMLFormElement>,
  errors: Record<string, string>,
) => {
  const firstErrorNameAttribute = Object.keys(errors)[0];
  const formElements = Array.from(formRef.current!.elements) as HTMLElement[];

  return formElements.find((formElement) =>
    byNameAttribute(formElement, firstErrorNameAttribute),
  ) as HTMLElement;
};

export default getFirstInvalidFormField;
