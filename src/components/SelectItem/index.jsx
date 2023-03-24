import React, { useState } from "react";
import Select from "react-select";

function SelectItem({ placeholder, width }) {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width,
    }),
    menu: (provided) => ({
      ...provided,

      width,
    }),
  };

  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div>
      <Select
        styles={customStyles}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder={placeholder}
      />
    </div>
  );
}

export default SelectItem;
