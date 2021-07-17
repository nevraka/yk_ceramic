import React from 'react';

export interface DropDownItem {
  label: string;
  value: string;
}

interface DropDownProps {
  value: string;
  setValue: (v: string) => void;
  data: DropDownItem[];
  placeholder: string;
}

const DropDown = ({ value, setValue, data, placeholder }: DropDownProps) => {
  const onSelectChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <select
      style={{ width: 200 }}
      value={value}
      placeholder={placeholder}
      onChange={onSelectChange}
    >
      {data.map((item, index) => (
        <option key={index} value={item.value || item.label}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
