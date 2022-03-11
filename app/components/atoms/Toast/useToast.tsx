import { useCallback, useRef } from 'react';

type Params = {
  message: string;
  isError?: boolean;
};

const useToast = () => {
  const toastRef = useRef<HTMLDivElement>(null);

  const showToast = useCallback(({ message, isError }: Params) => {
    const toast = toastRef.current!;

    isError ? toast.classList.add('sr-only') : toast.classList.remove('sr-only');
    toastRef.current!.textContent = message;
    toast.classList.add('visible');

    setTimeout(hideToast, 3000);
  }, []);

  const hideToast = () => {
    const toast = toastRef.current!;
    toast.textContent = '';
    toast.classList.remove('visible');
  };

  return { toastRef, showToast };
};

export default useToast;
