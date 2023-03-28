import React from "react";
import Select from "react-select";

function SelectItem({ placeholder, width, changeHandler, options }) {
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

  return (
    <div>
      <Select
        styles={customStyles}
        onChange={changeHandler}
        options={options}
        placeholder={placeholder}
        menuPlacement="top"
      />
    </div>
  );
}

export default SelectItem;
