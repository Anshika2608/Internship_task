import React from "react";
import TextField from '@mui/material/TextField';

type InputProps = {
  type?: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ type = "text", label, value, onChange }: InputProps) {
  return (
    <div>
      <TextField
        id={`outlined-${label.toLowerCase()}-input`}
        label={label}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete="current-password"
        className='w-96 rounded-lg'
      />
    </div>
  );
}

export default Input;