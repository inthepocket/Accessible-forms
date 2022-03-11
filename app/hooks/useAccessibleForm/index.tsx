import { useEffect, useRef } from 'react';
import { useTransition } from 'remix';

import type useToast from '~/components/atoms/Toast/useToast';
import getFirstInvalidFormField from '~/hooks/useAccessibleForm/getFirstInvalidFormField';

import getInvalidFormFieldNames from './getInvalidFormFieldNames';

type Params = {
  hasErrors?: boolean;
  errors?: Record<string, string>;
  showToast: ReturnType<typeof useToast>['showToast'];
};

const useAccessibleForm = ({ hasErrors, errors, showToast }: Params) => {
  const formRef = useRef<HTMLFormElement>(null);
  const isSubmitting = useTransition().state === 'submitting';

  useEffect(() => {
    if (isSubmitting || hasErrors === undefined) {
      return;
    }

    if (hasErrors) {
      const invalidFormFieldNames = getInvalidFormFieldNames(errors!);
      const firstInvalidFormFieldName = invalidFormFieldNames.split(',')[0];

      const firstInvalidFormField = getFirstInvalidFormField(formRef, errors!);
      firstInvalidFormField?.focus();

      const message = `The personal information form contains the following invalid form input fields: ${invalidFormFieldNames}. Currently focusing: ${firstInvalidFormFieldName}`;
      return showToast({ message, isError: true });
    }

    showToast({ message: 'The personal information form was successfully submitted.' });
  }, [isSubmitting, hasErrors, errors, showToast]);

  return { formRef };
};

export default useAccessibleForm;
