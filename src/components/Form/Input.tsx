import type { FieldValues, Path } from 'react-hook-form';
import type { InputProps as MuiInputProps, FormHelperTextProps, InputLabelProps } from '@mui/material';

import { Controller, useFormContext } from 'react-hook-form';
import { Input as MuiInput, InputLabel, FormHelperText, FormControl } from '@mui/material';
import { genericMemo } from '../../utils';

type InputProps<T extends FieldValues> = Omit<MuiInputProps, 'name'> & {
  name: Path<T>;
  label?: string;
  value?: string;
  labelProps?: InputLabelProps;
  helperText?: string;
  helperTextProps?: FormHelperTextProps;
};

const InputView = <T extends FieldValues>({
  value,
  name,
  label,
  helperText,
  labelProps,
  helperTextProps,
  ...props
}: InputProps<T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormControl sx={{width: '100%'}}>
          {/* Label */}
          {label && (
            <InputLabel
              error={!!fieldState.error}
              {...labelProps}
              required={props.required}
              htmlFor={`id-${field.name}`}
            >
              {label}
            </InputLabel>
          )}

          {/* Input */}
          <MuiInput
            {...props}
            id={`id-${field.name}`}
            error={!!fieldState.error}
            name={field.name}
            value={value ? value : field.value || ''}
            onBlur={field.onBlur}
            onChange={field.onChange}
            sx={{
              width: "100%",
              minHeight: "45px",
              background: '#E9E9E9',
              border: '1px solid #ADADAD',
              borderRadius: '5px',
              outline: 'none',
              "&:before": {
                borderBottom: 'none'
              }
            }}
          />

          {/* Errors */}
          {fieldState.error && <FormHelperText  error={true}>{fieldState.error.message}</FormHelperText>}

          {/* Helpers */}
          {helperText && <FormHelperText  {...helperTextProps}>{helperText}</FormHelperText>}
        </FormControl>
      )}
    />
  );
};

export const Input = genericMemo(InputView);
