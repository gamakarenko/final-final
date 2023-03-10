import AppRadioBtn from 'components/ui/AppRadioButton/AppRadioBtn';
import uniqid from 'uniqid';
import { HTMLAttributes } from 'react';
import "./style.css"

type RaduiItem = {
  id?: number;
  text: string;
  value: string;
};

interface RadioFormItemProps extends HTMLAttributes<HTMLInputElement> {
  radiItems: RaduiItem[];
};

export default function RadioFormItem({
  radiItems,
  ...params
}: RadioFormItemProps) {
  const radioName = uniqid();

  return (
    <div className="radio-form-item">
      {radiItems.map((rItem) => (
        <AppRadioBtn
          {...params}
          key={rItem.value}
          value={rItem.value}
          name={radioName}
        >
          {rItem.text}
        </AppRadioBtn>
      ))}
    </div>
  );
}
