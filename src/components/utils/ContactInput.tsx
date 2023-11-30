import React, { type FC } from 'react';

interface Props {
  id: string;
  placeholder: string;
  label: string;
  type?: string;
  required?: boolean;
  name: string;
}

const ContactInput: FC<Props> = ({ id, label, placeholder, type = "text", required, name }) => {
  return (
    <label className="flex flex-col gap-2" htmlFor={id}>
      <span className="opacity-80">{label}</span>
      <input
        className="border-neutral-600 bg-transparent pb-2 outline-none border-b-[1px] placeholder:uppercase placeholder:opacity-50 focus:text-opacity-100 focus:border-neutral-300"
        id={id}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
      />
    </label>
  );
};

export default ContactInput;
