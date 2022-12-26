import type { CheckboxProps as MuiCheckboxProps } from '@mui/material';
import type { FieldValues, Path } from 'react-hook-form';

import { Controller, useFormContext } from 'react-hook-form';
import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';
import { genericMemo } from '../../utils';

type CheckboxProps<T extends FieldValues> = Omit<MuiCheckboxProps, 'name'> & {
  name: Path<T>;
  label: string;
};

const CheckboxView = <T extends FieldValues>({ name, label, ...props }: CheckboxProps<T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControlLabel
          labelPlacement="end"
          label={label}
          sx={{ marginLeft: 0, gap: '10px', userSelect: 'none' }}
          control={
            <MuiCheckbox
              className={props.className}
              id={name}
              {...props}
              name={field.name}
              inputRef={field.ref}
              checked={field.value || false}
              onBlur={field.onBlur}
              onChange={(e) => field.onChange(e.target.checked)}
            />
          }
        />
      )}
    />
  );
};

export const Checkbox = genericMemo(CheckboxView);
