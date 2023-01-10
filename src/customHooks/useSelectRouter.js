import React, { useState } from "react";

const useSelectRotor = (defaultValue) => {
  const [select, setSelect] = useState(defaultValue);
  const SelectRotor = () => {
    return (
      <select defaultValue={select} onChange={(e) => setSelect(e.target.value)}>
        <option value="I">I</option>
        <option value="II">II</option>
        <option value="III">III</option>
        <option value="IV">IV</option>
        <option value="V">V</option>
      </select>
    );
  };

  return [select, SelectRotor];
};

export default useSelectRotor;
