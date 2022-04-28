import { useEffect, useState } from "react";
import { UiCheckbox } from "./UiCheckbox";

export const UiGroupCheckbox = ({ values, onChange, title }) => {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    onChange(selected);
  }, [selected]);

  const handleChange = (event) => {
    const target = event.target;

    const val = target.value;
    const checked = target.checked;

    const parseVal = parseInt(val, 0);

    if (!checked) {
      setSelected([...selected.filter((i) => i !== parseVal)]);
    } else {
      setSelected([...selected, parseVal]);
    }
  };

  return (
    <div className="mb-4">
      <fieldset>
        <legend className="text-base font-medium text-gray-900">{title}</legend>
        <div className="mt-4 space-y-4">
          {values.map((checkbox) => {
            return (
              <UiCheckbox
                id={checkbox.id}
                label={checkbox.label}
                description={checkbox.description}
                value={checkbox.value}
                onChange={handleChange}
              />
            );
          })}
        </div>
      </fieldset>
    </div>
  );
};
