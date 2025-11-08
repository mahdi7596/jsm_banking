import React from "react";

interface SearchboxProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Searchbox = ({ value, onChange }: SearchboxProps) => {
  return (
    <div>
      <input
        className="border border-gray-500"
        value={value}
        onChange={onChange}
        type="text"
      />
    </div>
  );
};

export default Searchbox;
