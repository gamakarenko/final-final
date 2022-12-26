import type { FormHTMLAttributes } from 'react';
import type { FieldValues, UseFormReturn } from 'react-hook-form';

import { FormProvider } from 'react-hook-form';

import { Checkbox } from './Checkbox';
import { Input } from './Input';

type FormProps<T extends FieldValues> = FormHTMLAttributes<HTMLFormElement> & {
  methods: UseFormReturn<T>;
};

const Form = <T extends FieldValues>({ methods, children, ...props }: FormProps<T>) => {
  return (
    <FormProvider {...methods}>
      <form {...props} noValidate>
        {children}
      </form>
    </FormProvider>
  );
};

Form.Input = Input;
Form.Checkbox = Checkbox;

export { Form };
